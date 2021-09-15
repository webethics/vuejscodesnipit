<template>
  <div
    class="ui-toast component"
    :class="classList"
    @click="remove">
    {{ item.message }}
  </div>
</template>

<script>
export default {
  name: 'UiToast',
  props: {
    item: {
      type: Object
    }
  },

  methods: {
    remove () {
      //
    }
  },

  computed: {
    classList () {
      return {

      }
    }
  },

  mounted () {
    if (this.item.duration) {
      
    }
  }
}
</script>

<style lang="scss">

</style>
