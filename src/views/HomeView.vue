<template>
  <main class="page-main">
    <div class="container">
      <p class="title">vite + vue3 svg 组件使用 demo</p>
      <div class="divDom">
        <IconSvg name="community" color="red" />
        <div class="divText">赤</div>
      </div>
      <div class="divDom">
        <IconSvg name="documentation" color="orange" />
        <div class="divText">橙</div>
      </div>
      <div class="divDom">
        <IconSvg name="ecosystem" color="yellow" />
        <div class="divText">黄</div>
      </div>
      <div class="divDom">
        <IconSvg name="logo" color="green" />
        <div class="divText">绿</div>
      </div>
      <div class="divDom">
        <IconSvg name="support" color="cyan" />
        <div class="divText">青</div>
      </div>
      <div class="divDom">
        <IconSvg name="tooling" color="blue" />
        <div class="divText">蓝</div>
      </div>
      <div class="divDom">
        <IconSvg name="github" color="purple" />
        <div class="divText">紫</div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style>
.page-main {
  width: 100%;
  height: 100vh;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background-color: rgb(179, 174, 174);
  padding: 20px;
  vertical-align: bottom;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.title {
  margin-bottom: 10px;
  color: #17233d;
  font-weight: bold;
}
.divDom {
  display: inline-block;
  overflow: hidden;
}
.divDom + .divDom {
  margin-left: 10px;
}
.divText {
  margin-top: 10px;
  color: #17233d;
}
</style>