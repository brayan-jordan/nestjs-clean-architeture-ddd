import { Answer as DomainAnswer } from '@/domain/forum/enterprise/entities/answer'

export class AnswerPresenter {
  static toHTTP(answer: DomainAnswer) {
    return {
      id: answer.id.toString(),
      content: answer.content,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
    }
  }
}
