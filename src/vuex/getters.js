import {
  ROOT_GETTERS_SOME_THING
} from './rootType.js'

export default {
  [ROOT_GETTERS_SOME_THING] (rootState, otherOrSelfGetters) {
    return 'root getters.js'
  }
}
