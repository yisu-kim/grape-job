import { type User } from '@/core/user'
import { type UserStorage } from '@/core/user/usecases'
import { userStorage } from '@/core/user/adapters/userStorage'

import { create } from 'zustand'

const useUserStore = create<UserStorage>((set) => ({
  user: undefined,
  createUser: (user: User) => set({ user }),
}))

export const useUserStorage = () => {
  const userStore = useUserStore()
  return userStorage(userStore)
}
