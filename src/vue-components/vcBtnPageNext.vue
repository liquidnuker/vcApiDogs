<template>
  <div>
  <button class="btn btn1-01" tabindex="0"
  @click="nextPage()">Next</button>
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