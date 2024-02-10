import { type UserStorage } from '@/usecases/ports'

type Dependencies = {
  userStorage: UserStorage
}

export const getUser = (dependencies: Dependencies) => {
  const { userStorage } = dependencies

  return userStorage.user
}
