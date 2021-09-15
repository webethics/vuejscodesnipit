<script>
export default {
  name: 'UiOnClickOutside',
  props: ['do'],
  mounted () {
    const listener = e => {

    }
    document.addEventListener('click', listener, true)
    this.$once('hook:destroyed', () => {

    })
  },
  render () {

  }
}
</script>
