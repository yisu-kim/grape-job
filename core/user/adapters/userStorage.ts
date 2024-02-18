import { type UserStorage } from '@/core/user/usecases'
import { getUser } from '@/core/user/usecases/getUser'
import { createUser } from '@/core/user/usecases/createUser'

export const userStorage = (userStorage: UserStorage): UserStorage => {
  return {
    user: getUser({ userStorage }),
    createUser: ({ id, name }) => createUser(id, name, { userStorage }),
  }
}
