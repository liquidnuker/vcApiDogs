<template>
<div>
  <div v-if="favCount > 0">
    Favorites: {{ favCount }}
  </div>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   
      favCount: store.favorites.length
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    
  },
  methods: {        
  }
}
</script>