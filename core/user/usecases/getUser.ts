import { type UserStorage } from '@/core/user/usecases'

type Dependencies = {
  userStorage: UserStorage
}

export const getUser = (dependencies: Dependencies) => {
  const { userStorage } = dependencies

  return userStorage.user
}
