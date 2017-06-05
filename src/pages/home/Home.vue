<template>
  <div class="home-container">
     <itemcontainer father-components="home"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    itemcontainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
