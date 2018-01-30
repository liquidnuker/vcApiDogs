<template>
  <div>
    breed directory
  </div>
</template>
<script>
export default {
  data () {
    return {   
      c: ""
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prBreedDirItems"
  ],
  components: {
  },
  mounted: function () {
    this.breedDirItems = this.prBreedDirItems;
    console.log(this.breedDirItems.length);
  },
  methods: {        
  }
}
</script>