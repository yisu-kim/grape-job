import { type UserId, createUser as createUserInDomain } from '@/core/user'
import { type UserStorage } from '@/core/user/usecases'

type Dependencies = {
  userStorage: UserStorage
}

export const createUser = (
  id: UserId,
  name: string,
  dependencies: Dependencies
) => {
  const { userStorage } = dependencies

  const user = createUserInDomain(id, name)
  userStorage.createUser(user)
}
