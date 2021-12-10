import { state } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const blog = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}