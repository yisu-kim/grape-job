import { type User } from '@/domain/user'
import { type UserStorage } from '@/usecases/ports'

import { create } from 'zustand'

export const useUserStore = create<UserStorage>((set) => ({
  user: undefined,
  createUser: (user: User) => set({ user }),
}))
