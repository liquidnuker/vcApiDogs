<template>
<div>
  <div v-if="favorites.length > 0">
    Favorites: {{ favorites.length }}
  </div>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   
      favorites: store.favorites
    }
  },
  watch: {
  // : function () {
  // }
  },
  mounted: function () {
  },
  methods: {        
  }
}
</script>