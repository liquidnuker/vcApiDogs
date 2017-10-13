<template>
<div>
  <!--begin navSide103-->
  <nav class="navSide103" role="navigation">
    <h3 class="navSide103_heading">Nav Title</h3>
    <ul>
      <li v-for="i in lastViewed">
        <div class="navSide103_img-holder">
          <img src="img.jpg" alt="img alt" title="img title">
          <!-- {{ i.imgSrc }} -->
        </div>
        <a href="" tabindex="0" aria-setsize="3" aria-posinset="1">
          {{ i.name }}
        </a>
        <p>{{ i.breed }}</p>
      </li>
    </ul>
  </nav>
  <!--end navSide103-->
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   
      lastViewed: store.lastViewed
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