<template>
<div>
  {{ prStatus }}
  <ul v-for="i in prCurrentImages">
    <li>
      <img :src="i" 
      @click="insertLastViewed(i)" /><br>
    </li>
  </ul>

  <!-- temp last viewed -->
  <ul v-for="i in lastViewed">
    <li>
      {{ i }}
    </li>
  </ul>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   
      // just hook to props of lastViewed component
      lastViewed: ""
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
      this.lastViewed = store.lastViewed;
    }     
  }
}
</script>