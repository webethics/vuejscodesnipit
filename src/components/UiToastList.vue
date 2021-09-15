<template>
  <transition-group name="slide" tag="div" class="ui-toast-list component">
    <UiToast
      @remove="onRemove"
      v-for="item in toastsList"
      :item="item"
      :key="item.id"
    />
  </transition-group>
</template>

<script>
import UiToast from './UiToast'
export default {
  name: 'UiToastList',
  components: {
    UiToast
  },
  computed: {
    toastsList () {

    }
  },
  methods: {
    onRemove (id) {
      // this.$store.commit('toast/REMOVE', { id })
    },
    clearToastList () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
