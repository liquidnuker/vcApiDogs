<template>
<div>
  <!--begin navSide103-->
  <nav class="navSide103" role="navigation">
    <h2 class="navSide103_heading font_heading1">Recently Viewed</h2>
    <ul>
      <li v-for="i in lastViewedStorage">
        <div class="navSide103_img-holder">
          <img :src="i.imgSrc" :alt="i.breed + ' image'" :title="i.breed + ' image'">
        </div>
        <p>{{ i.name }}</p>
        <a tabindex="0" aria-setsize="3" aria-posinset="1" @click="jumpToGallery(i.breed)">{{ i.breed }}</a>
      </li>
    </ul>
  </nav>
  <!--end navSide103-->
</div>
</template>
<script>
import {store} from "../js/store.js";
import {storage} from "../js/localStorage.js";
import {router} from "../js/router.js";
export default {
  data () {
    return {
      STORAGE_KEY: "vcApiDogs-lastViewed",  
      lastViewed: store.lastViewed,
      lastViewedStorage: ""
    }
  },
  watch: {
    lastViewed: function() {
      this.fetchData();
    }
  },
  props: [
    // "prName1"
  ],
  components: {
  },
  mounted: function () {
    this.fetchData();
  },
  updated: function() {
  },
  methods: {
    fetchData: function() {
      this.lastViewedStorage = storage.fetch(this.STORAGE_KEY);
    },
    jumpToGallery: function (breedName) {
      router.push({
        path: "/gallery/" + breedName
      });
    }  
  }
}
</script>