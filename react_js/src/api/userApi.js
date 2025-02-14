import { apiClient } from './apiClient'

export const fetchUsers = async () => {
  const res = await apiClient.get('/users')
  return res.data
}
