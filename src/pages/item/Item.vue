<template>
  <div class="item-container">
     <itemcontainer father-components="item"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  name: 'item',
  data () {
    return {
    }
  },
  components: {
    itemcontainer
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> 
