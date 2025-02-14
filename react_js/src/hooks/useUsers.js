import { useQuery } from '@tanstack/react-query'

import { fetchUsers } from '@/api/userApi'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
