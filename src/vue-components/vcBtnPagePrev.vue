<template>
<div>
  <button class="btn btn1-01" tabindex="0"
  @click="prevPage()">Previous</button>
</div>
</template>
<script>
export default {
  data () {
    return {   

    }
  },
  mounted: function () {
    
  },
  methods: {
    prevPage: function() {
      this.$emit('prevPage');
    }        
  }
}
</script>