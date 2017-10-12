<template>
  <div>
    <vcFavoriteCount />

    <ul>
      <li v-for="(i, index) in favorites">
      {{ i.breed }}<br>
      {{ i.imgSrc }}<br>
      <button @click="removeItem(i.name)">remove</button>
      <div v-show = "i.edit == false">
        <label>{{ i.name }}</label>
        <button v-show = "i.edit == false" @click="i.edit = true;">edit</button>
      </div>

      <input v-show="i.edit == true" v-model="i.name"
      v-on:blur= "i.edit = false" 
      @keyup.enter = "i.edit = false; update(i.name, index)">
      <button v-show="i.edit == true" @click="i.edit = false; cancel(index)">cancel</button>
      </li>      
    </ul>

  </div>
</template>
<script>
import {store} from "../js/store.js";
import {nameExists} from "../js/nameexists.js";

const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data () {
    return {   
      favorites: store.favorites,
      }
  },
  watch: {
  // : function () {
  // }
  },
  components: {
    vcFavoriteCount: vcFavoriteCount
  },
  mounted: function () {
    
  },
  methods: {
    edit: function(tempnote, index) {
      
    },
    update: function(newNote, index) {
      // temp update only
      // index changes when filtered, so use findIndex later
      store.favorites[index].name = newNote;
    },
    cancel: function() {
    },
    removeItem: function(name) {
      let itemIndex = nameExists(name, store.favorites);
      store.favorites.splice(itemIndex, 1);
      // this.currentItems = this.allItems;
    }  
  }
}
</script>