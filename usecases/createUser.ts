import { type UserId, createUser as createUserInDomain } from '@/domain/user'
import { type UserStorage } from '@/usecases/ports'

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
