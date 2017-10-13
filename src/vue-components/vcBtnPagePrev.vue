<template>
<div class="btn_pager">
  <button class="btn btn_pager_previous" tabindex="0"
  @click="prevPage()">
  <svg xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
</svg>
<span>Previous</span>
</button>
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