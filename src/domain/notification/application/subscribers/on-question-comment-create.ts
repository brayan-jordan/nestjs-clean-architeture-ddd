import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { SendNotificationUseCase } from '../use-cases/send-notification'
import { QuestionCommentCreatedEvent } from '@/domain/forum/enterprise/events/question-comment-created-event'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

export class OnQuestionCommentCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotificationUseCase: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      // Quando essa função for chamada o "this" vai ser essa classe
      this.sendNewQuestionCommentNotification.bind(this),
      QuestionCommentCreatedEvent.name,
    )
  }

  private async sendNewQuestionCommentNotification({
    questionComment,
  }: QuestionCommentCreatedEvent) {
    const question = await this.questionsRepository.findById(
      questionComment.questionId.toString(),
    )

    if (question) {
      await this.sendNotificationUseCase.execute({
        title: `Novo comentário em "${question.content
          .substring(0, 40)
          .concat('...')}"`,
        content: questionComment.content,
        recipientId: question.authorId.toString(),
      })
    }
  }
}
