import { Either, left, rigth } from './either'

function doSomenthing(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return rigth(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const successResult = doSomenthing(true)

  expect(successResult.isRight()).toBe(true)
  expect(successResult.isLeft()).toBe(false)
})

test('error result', () => {
  const errorResult = doSomenthing(false)

  expect(errorResult.isLeft()).toBe(true)
  expect(errorResult.isRight()).toBe(false)
})
