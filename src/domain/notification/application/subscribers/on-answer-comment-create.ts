import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { SendNotificationUseCase } from '../use-cases/send-notification'
import { AnswerCommentCreatedEvent } from '@/domain/forum/enterprise/events/answer-comment-created-event'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'

export class OnAnswerCommentCreated implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotificationUseCase: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      // Quando essa função for chamada o "this" vai ser essa classe
      this.sendNewAnswerCommentNotification.bind(this),
      AnswerCommentCreatedEvent.name,
    )
  }

  private async sendNewAnswerCommentNotification({
    answerComment,
  }: AnswerCommentCreatedEvent) {
    const answer = await this.answersRepository.findById(
      answerComment.answerId.toString(),
    )

    if (answer) {
      await this.sendNotificationUseCase.execute({
        title: `Novo comentário em "${answer.content
          .substring(0, 40)
          .concat('...')}"`,
        content: answerComment.content,
        recipientId: answer.authorId.toString(),
      })
    }
  }
}
