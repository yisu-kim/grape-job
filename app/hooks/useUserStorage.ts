import { userStorage } from '@/adapters/userStorage'

import { useUserStore } from '@/app/services/store'

export const useUserStorage = () => {
  const userStore = useUserStore()
  return userStorage(userStore)
}
