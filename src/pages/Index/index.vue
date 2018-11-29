<template>
  <div class="indexRootContainer">
    <index-header></index-header>
    indexRootContainer
  </div>
</template>

<script>
// 使用顺序
/* [
  name,
  components,
  props,
  data,
  extends
  minxin,
  provide / inject,
  computed,
  watch,
  beforeCreate,
  created,
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  activated,
  deactivated,
  beforeDestroy,
  destroyed,
  errorCaptured
  methods
] */
import { createNamespacedHelpers } from 'vuex'
const {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} = createNamespacedHelpers('modulesAChildOne')

export default {
  name: 'index-index',
  components: {
    indexHeader: () => import('./Header.vue') // 组件使用规范 <index-header>
  },
  computed: {
    ...mapState([
      'name'
    ]),
    ...mapGetters([
      'MODULES_A_CHILD_ONE_GETTERS'
    ])
  },
  mounted () {
    console.log(this.name, 'name')
    console.log(this.MODULES_A_CHILD_ONE_GETTERS)
    this.MODULES_A_CHILD_ONE_ACTION()
    this.MODULES_A_CHILD_ONE_MUTATIONS()
  },
  methods: {
    ...mapActions([
      'MODULES_A_CHILD_ONE_ACTION'
    ]),
    ...mapMutations([
      'MODULES_A_CHILD_ONE_MUTATIONS'
    ])
  }
}
</script>

<style scoped>
  .indexRootContainer {
    width: 100%;
    height: 100%;
    background-color: skyblue;
  }
</style>
