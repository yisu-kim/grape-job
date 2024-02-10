import { type UserStorage } from '@/usecases/ports'
import { getUser } from '@/usecases/getUser'
import { createUser } from '@/usecases/createUser'

export const userStorage = (userStorage: UserStorage): UserStorage => {
  return {
    user: getUser({ userStorage }),
    createUser: ({ id, name }) => createUser(id, name, { userStorage }),
  }
}
