/**
 * Маршруты суперадминки (второе приложение).
 * Базовый путь /super-admin изолирует от основного приложения.
 */
export const SUPER_ADMIN_ROUTES = {
  SIGN_IN: '/login',
  USERS: '/users',
  USER_DETAIL: (userId: string) => `/users/${userId}`,
  STATISTICS: '/statistics',
  PAYMENTS: '/payments-list',
  POSTS: '/posts',
} as const
