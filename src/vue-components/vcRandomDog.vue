<template>
<div>
  <h2 class="itemBox102_heading1">Random Dog</h2>
  <div class="itemBox102">
    
    <div class="itemBox102_img-holder">
      <img :src="prRandomImage[0]" :alt="'random' + ' ' + prRandomBreed[0] + ' ' + 'image'" 
      :title="'random' + ' ' + prRandomBreed[0] + ' ' + 'image'">
      <!-- {{ prRandomImage[0] }} -->
    </div>
    <h3 class="itemBox102_heading2">Name</h3>
    <p>Breed: {{ prRandomBreed[0] }}</p>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {   

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
  // todo: add extractfilename for {{ name }}
  methods: {

  }
}
</script>