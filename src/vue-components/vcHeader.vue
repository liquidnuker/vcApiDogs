<template>
  <!-- header -->
  <header class="row container-fluid--h">
    <div class="row container main-header">
      <div class="col-sm-4">
        <img class="vcdogs_logo" src="src/img/vcDogs_logo_v1.svg" alt="vcDogs logo" title="vcDogs logo">
      </div>
      <div class="col-sm-8">
        <!-- favoriteCount -->
        <vcFavoriteCount />
        <!-- /favoriteCount -->
      </div>
    </div>
  </header>
  <!-- /header -->
</template>
<script>
const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
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
    "prName1"
  ],
  components: {
    vcFavoriteCount: vcFavoriteCount,
  },
  mounted: function () {
    // console.log("vcheader.vue mounted");
  },
  methods: {        
  }
}
</script>