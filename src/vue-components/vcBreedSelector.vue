<template>
<div>
  <form>
    <span>
      <p>Choose Breed:</p>
    </span>
    <!-- vendor/select-css.scss -->
    <div class="custom-select1_01">
     <select v-model="prSelected">
        <option v-for="i in options" :value="i.id" @click="switchCategory(i.id)">{{ i.name}}</option>
      </select>
    </div>
  </form>
</div>
</template>
<script>
import {store} from "../js/store.js";
import {router} from "../js/router.js";
export default {
  data () {
    return {   
      // selected: store.currentCategory,
      options: [{
        name: "event name 1",
        id: "events1"
      },
      {
        name: "event name 2",
        id: "events2"
      }]
    }
  },
  props: [
    "prSelected"
  ],
  mounted: function () {
  },
  methods: {   
    switchCategory: function(category) {
      router.push(category);
    }     
  }
}
</script>