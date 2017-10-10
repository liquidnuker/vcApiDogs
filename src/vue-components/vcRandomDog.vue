<template>
  <div>
  {{ prStatus }}
  <br>
  <!-- random -->
  {{ prRandomBreed[0] }}
  <br>
  {{ prRandomImage[0] }}
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
  methods: {        
  }
}
</script>