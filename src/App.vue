<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>


<script>
import RegLayout from './components/RegLayout'
import LoginLayout from './components/LoginLayout'

export default {
  computed: {
    layout () {
      console.log(this.$route.meta)
      return 'empty-layout'
    }
  },
  components: {
    LoginLayout, RegLayout
    }
}
</script>

<style lang="scss">
@import "./style/style.css";
</style>
