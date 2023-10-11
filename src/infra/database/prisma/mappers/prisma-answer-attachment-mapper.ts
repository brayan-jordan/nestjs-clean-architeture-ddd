import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { AnswerAttachment as DomainAnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { Attachment as PrismaAttachment } from '@prisma/client'

export class PrismaAnswerAttachmentMapper {
  static toDomain(raw: PrismaAttachment): DomainAnswerAttachment {
    if (!raw.answerId) {
      throw new Error('Invalid attachment type')
    }

    return DomainAnswerAttachment.create(
      {
        attachmentId: new UniqueEntityID(raw.id),
        answerId: new UniqueEntityID(raw.answerId),
      },
      new UniqueEntityID(raw.id),
    )
  }
}
