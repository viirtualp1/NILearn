import { USER } from '@/types/user'

export const state = () => ({
  isAuth: false,
  user: USER.STUDENT,
})

export const getters = {
  getIsAuth(state) {
    return state.isAuth
  },

  getUserState(state) {
    return state.user
  },
}

export const mutations = {
  auth(state, authValue) {
    state.isAuth = authValue
  },

  user(state, userValue) {
    state.user = userValue
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
}
