<template>
  <div v-if="!prIsThumbsReady" class="vcspinner1">
    <span class="vcspinner1_loading"></span>
  </div>
</template>
<script>
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
    "prIsThumbsReady"
  ],
  components: {
  },
  mounted: function () {
    // console.log("vcSpinner.vue mounted");
  },
  methods: {        
  }
}
</script>