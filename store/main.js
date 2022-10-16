import { UserType } from '@/types/user'
import { getPureUser } from '~/services/auth'

export const state = () => ({
  isAuth: false,
  userType: UserType.STUDENT,
  userData: getPureUser(),
})

export const getters = {
  getIsAuth(state) {
    return state.isAuth
  },

  getUserType(state) {
    return state.user
  },

  getUser(state) {
    return state.userData
  },
}

export const mutations = {
  auth(state, authValue) {
    state.isAuth = authValue
  },

  user(state, userValue) {
    state.user = userValue
  },

  newUser(state, userData) {
    state.userData = userData
  },
}

export const actions = {
  setAuth({ state }, authValue) {
    state.isAuth = authValue

    return state.isAuth
  },

  setUser({ state }, userValue) {
    state.user = userValue

    return state.user
  },

  setNewUser({ state }, userData) {
    state.userData = userData
    state.isAuth = true

    return state.user
  },
}
