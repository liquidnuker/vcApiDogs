<template>
<div>
  <ul v-for="i in prCurrentImages">
    <li>
      <img :src="i" />
    </li>
  </ul>
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
    "prCurrentImages"
  ],
  components: {
  },
  mounted: function () {
  },
  methods: {        
  }
}
</script>