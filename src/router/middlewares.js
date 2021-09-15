import $store from '../store'
import { AuthService } from '@/services/auth.service'

/**
 * Current user state initialization
 * @WARN Must be always first in middleware chain
 */
export async function initCurrentUserStateMiddleware (to, from, next) {

}

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware (to, from, next) {

}

export function setPageTitleMiddleware (to, from, next) {
  
}
