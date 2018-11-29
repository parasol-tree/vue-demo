import {
  MODULES_A_CHILD_ONE_ACTION
} from './type.js'

export default {
  // [LOGIN] ({ state, commit, rootState }) {
  [MODULES_A_CHILD_ONE_ACTION] (commit, dispatch, getters, rootGetters, rootState, state) {
    console.log('modulesA_ChildOne actions.js')
  }
}
