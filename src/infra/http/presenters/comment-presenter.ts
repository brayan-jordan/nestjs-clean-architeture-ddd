import { Comment as DomainComment } from '@/domain/forum/enterprise/entities/comment'

export class CommentPresenter {
  // eslint-disable-next-line
  static toHTTP(comment: DomainComment<any>) {
    return {
      id: comment.id.toString(),
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }
  }
}
