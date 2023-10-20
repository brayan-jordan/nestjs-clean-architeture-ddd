import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Attachment as DomainAttachment } from '@/domain/forum/enterprise/entities/attachment'
import { Prisma, Attachment as PrismaAttachment } from '@prisma/client'

export class PrismaAttachmentMapper {
  static toDomain(attachment: PrismaAttachment): DomainAttachment {
    return DomainAttachment.create(
      {
        title: attachment.title,
        url: attachment.url,
      },
      new UniqueEntityID(attachment.id),
    )
  }

  static toPersistence(
    attachment: DomainAttachment,
  ): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: attachment.id.toString(),
      title: attachment.title,
      url: attachment.url,
    }
  }
}
