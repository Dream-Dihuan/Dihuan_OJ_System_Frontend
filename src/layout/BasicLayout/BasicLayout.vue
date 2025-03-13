<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalNavigation />
      </a-layout-header>
      <a-layout-content class="content">
        <RouterView />
      </a-layout-content>
      <a-layout-footer class="footer">迪幻 OJ 在线判题系统 powered by Dihuan</a-layout-footer>
    </a-layout>

  </div>
</template>

<script setup lang="ts">
import GlobalNavigation from '@/components/GlobalNavigation/GlobalNavigation.vue';



</script>

<style scoped lang="scss">
#basicLayout {

  .header {}

  .content {
    background-color: purple;
    padding: 60px;
  }

  .footer {
    background-color: skyblue;

    text-align: center;
    font-size: 20px;
  }
}
</style>
