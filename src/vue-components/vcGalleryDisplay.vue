<template>
<div>

<!-- favorite count -->
<vcFavoriteCount />

  {{ prStatus }}
  <ul v-for="i in prCurrentImages">
    <li>
      <img :src="i" 
      @click="insertLastViewed(i)" /><br>
    </li>
  </ul>

  <!-- temp location for lastViewed -->
  <vcLastViewed />
  
</div>
</template>
<script>
import {store} from "../js/store.js";
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data () {
    return {   
      
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prStatus",
    "prCurrentImages"
  ],
  components: {
    vcLastViewed: vcLastViewed,
    vcFavoriteCount: vcFavoriteCount
  },
  mounted: function () {
  },
  methods: {   
    insertLastViewed: function(item) {
      if (store.lastViewed.length < 4) {
        store.lastViewed.unshift(item);
      } else {
        store.lastViewed.unshift(item);
        store.lastViewed.pop();
      }
    }     
  }
}
</script>