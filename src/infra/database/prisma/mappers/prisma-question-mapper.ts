import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Question as DomainQuestion } from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { Question as PrismaQuestion, Prisma } from '@prisma/client'

export class PrismaQuestionMapper {
  static toDomain(raw: PrismaQuestion): DomainQuestion {
    return DomainQuestion.create(
      {
        title: raw.title,
        content: raw.content,
        authorId: new UniqueEntityID(raw.authorId),
        bestAnswerId: raw.bestAnswerId
          ? new UniqueEntityID(raw.bestAnswerId)
          : null,
        slug: Slug.create(raw.slug),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPersistence(
    question: DomainQuestion,
  ): Prisma.QuestionUncheckedCreateInput {
    return {
      id: question.id.toString(),
      title: question.title,
      content: question.content,
      authorId: question.authorId.toString(),
      slug: question.slug.value,
      bestAnswerId: question.bestAnswerId?.toString(),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    }
  }
}
