import axios from 'axios'

import { Http } from './http.init'
import $store from '../store'
import $router from '../router'

import { API_URL } from '../.env'

let BEARER = ''

export class AuthService {
  /**
   ******************************
   * @API
   ******************************
   */

  static async makeLogin ({ email, password }) {
    try {

    } catch () {
    }
  }

  static async makeLogout () {
    try {

    } catch () {

    }
  }

  static async refreshTokens () {
    try {

    } catch () {

    }
  }
  /**
   ******************************
   * @METHODS
   ******************************
   */

  static isAccessTokenExpired () {

  }

  static hasRefreshToken () {

  }

  static setRefreshToken (status) {

  }

  static getBearer () {
    return BEARER
  }

  static setBearer (accessToken) {

  }
}
