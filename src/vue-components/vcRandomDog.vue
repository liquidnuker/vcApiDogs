<template>
  <div>
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