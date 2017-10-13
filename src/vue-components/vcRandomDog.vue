<template>
<div>
  {{ prStatus }}
  <div class="itemBox102">
    <h3 class="itemBox102_heading1">Random Dog</h3>
    <div class="itemBox102_img-holder">
      <img src="img.jpg" alt="img alt" title="Image Title">
      <!-- {{ prRandomImage[0] }} -->
    </div>
    <h4 class="itemBox102_heading2">Name</h4>
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