<template>
  <div class="btn_pager">
  <button class="btn btn_pager_previous" tabindex="0"
  @click="nextPage()">
  <span>Next</span>
  <svg xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
</svg>
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
    nextPage: function() {
      this.$emit('nextPage');
    }        
  }
}
</script>