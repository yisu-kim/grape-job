import { type User } from '@/core/user'

export interface UserStorage {
  user?: User
  createUser(user: User): void
}
