import { useState } from 'react'

import { TEST_ACCOUNTS } from '@/lib/testAccounts'

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (email: string, password: string) => {
    if (Array.isArray(TEST_ACCOUNTS)) {
      const account = TEST_ACCOUNTS.find((acc) => acc.email === email && acc.password === password)
      if (account) {
        setUser({ email })
        localStorage.setItem('user', JSON.stringify({ email }))
      } else {
        throw new Error('Invalid credentials')
      }
    } else {
      console.error('TEST_ACCOUNTS is not an array')
    }
  }

  return { user, login }
}
