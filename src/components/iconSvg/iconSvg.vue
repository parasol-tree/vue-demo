<template>
  <svg aria-hidden="true"
    :class="[$attrs.class, 'svg-icon']"
    :width="width"
    :height="height">
    <use :xlink:href="symbolId" :fill="color"/>
  </svg>
</template>


<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true, default: '' }, // icon 文件名
  color: { type: String, required: false, default: '' }, // 默认颜色
  width: { type: [String, Number], required: false, default: 20 }, // 默认宽
  height: { type: [String, Number], required: false, default: 20 }, // 默认高
})
const symbolId = computed(() => `#svg-${props.name}`) // svg ID 名
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  overflow: hidden;
  fill: currentColor;
  vertical-align: inherit;
  cursor: pointer;
}
</style>