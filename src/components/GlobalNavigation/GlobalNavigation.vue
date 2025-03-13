<template>
  <div id="globalNavigation">
    <a-row class="grid" align="center" :wrap=false>
      <a-col flex="auto">
        <div>
          <a-menu mode="horizontal" :default-selected-keys="selectKeys" @menu-item-click="doMenuClick">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div class="logo_container">
                <img class="image" src="../../assets/Dihuan_Avatar.jpg" alt="">
                <div class="title">迪幻OJ在线判题系统</div>
              </div>

            </a-menu-item>
            <a-menu-item
              v-for="(item, index) in calculateNavigationMenu(userStore.$state.asyncRoutesPermissionNameList)"
              :key="item.path">{{ item.meta?.label }}</a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <a-col flex="70px">
        <div>{{ userStore.$state.name == '' ? '未登录' : userStore.$state.name }}</div>
      </a-col>
    </a-row>

  </div>
</template>

<script setup lang="ts">
import { calculateNavigationMenu } from '@/router/routes';
import useUserStore from '@/store/modules/user';
import { ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

// 当前路由路径（默认主页）a
const selectKeys: Ref<String[]> = ref(['/']);

// 路由跳转路径选择
router.afterEach((to, from, failure) => {
  selectKeys.value = [to.path]
})


//点击菜单路由跳转
const doMenuClick = (path: string) => {
  router.push(path)
}

</script>

<style scoped lang="scss">
#globalNavigation {
  .logo_container {

    margin-top: 10px;
    display: flex;
    align-items: center;
    height: 50px;


    .image {
      height: 100%;
      border-radius: 25px;
    }

    .title {
      margin-left: 10px;
      color: black;
      font-size: 20px;
    }
  }
}
</style>