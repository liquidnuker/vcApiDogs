<template>
<div>
  <h2 class="itemBox102_heading1">Random Dog</h2>
  <div class="itemBox102">
    
    <div class="itemBox102_img-holder">
      <a :href="prRandomImage[0]">
        <img :src="prRandomImage[0]" :alt="'random' + ' ' + prRandomBreed[0] + ' ' + 'image'"
        :title="'random' + ' ' + prRandomBreed[0] + ' ' + 'image'">
      </a>
      <!-- {{ prRandomImage[0] }} -->
    </div>
    <p>Name: {{ randomDogName }}</p>
    <p>Breed: <a :href="'#/gallery/' + prRandomBreed[0]">{{ prRandomBreed[0] }}</a></p>
  </div>
</div>
</template>
<script>
import {extractFileName} from "../js/extractfilename.js";
export default {
  data () {
    return {   
      randomDogName: "zzz"
    }
  },
  props: [
    "prStatus",
    "prRandomBreed",
    "prRandomImage"
  ],
  components: {
  },
  mounted: function () {
  },
  updated: function () {
    this.getDogName();
  },
  methods: {
    getDogName: function() {
      this.randomDogName = extractFileName(this.prRandomImage[0], false);
    }
  }
}
</script>