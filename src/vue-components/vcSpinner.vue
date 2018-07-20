<template>
  <div v-if="!prLoading" class="vcspinner1">
    <span v-if="prSpinner" class="vcspinner1_loading"></span>
    <p v-else class="vcspinner1_status">{{ prStatus }}</p>
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
    "prLoading",
    "prSpinner",
    "prStatus"
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