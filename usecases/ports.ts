import { type User } from '@/domain/user'

export interface UserStorage {
  user?: User
  createUser(user: User): void
}
