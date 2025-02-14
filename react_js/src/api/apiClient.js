import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.example.com', // 실제 API 배포 시 변경
  headers: {
    'Content-Type': 'application/json',
  },
})

// 토큰이 필요하면 인터셉터 추가 가능
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
