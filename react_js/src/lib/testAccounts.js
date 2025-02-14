import { faker } from '@faker-js/faker'

export const TEST_ACCOUNTS = Array.from({ length: 5 }).map(() => ({
  email: faker.internet.email(),
  password: 'password123',
}))

console.log('Generated Test Accounts:', TEST_ACCOUNTS)
