<template>
  <UiOnClickOutside :do="hideContent">
    <div class="ui-base-menu-dropdown component">
      <div class="icon-wrapper" @click="toggleMenu">
        <slot name="icon">
          <div class="default-menu-icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </slot>
      </div>

      <div class="content" v-if="isShown" @click="hideContent">
        <slot></slot>
      </div>
    </div>
  </UiOnClickOutside>
</template>

<script>
import UiOnClickOutside from './UiOnClickOutside'

export default {
  name: 'UiBaseMenuDropdown',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    listType: {
      type: Boolean,
      default: true
    }
  },

  components: {
    UiOnClickOutside
  },

  data () {
    return {
      isShown: false
    }
  },
  methods: {
    toggleMenu () {
      
    },
    hideContent () {

    }
  },

  mounted () {

  }
}
</script>

<style lang="scss">

}
</style>
