<template>
  <div class="header wrapper">
    <UiToastList/>

    <div class="menu-wrapper">
      <ul class="menu">
        <li>
          <router-link :to="{ name: 'index' }" exact>Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'news' }">News</router-link>
        </li>
      </ul>
      <ul class="menu side">
        <li v-if="!$currentUser.id">
          <router-link :to="{ name: 'login' }">login</router-link>
        </li>
        <li v-if="$currentUser.id"><span class="logout-button" @click="logout()">logout</span></li>
        <li>
          <UiHeaderDropdownMenu/>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import { AuthService } from '../services/auth.service'
import UiHeaderDropdownMenu from '@/components/UiHeaderDropdownMenu.vue'
import UiToastList from '@/components/UiToastList'
export default {
  name: 'Header',
  components: {
    UiToastList,
    UiHeaderDropdownMenu
  },
  methods: {
    async logout () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>

}
</style>
