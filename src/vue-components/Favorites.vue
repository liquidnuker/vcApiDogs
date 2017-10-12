<template>
<div>
  <vcFavoriteCount />
  <ul>
    <li v-for="(i, index) in currentFavorites">
      {{ i.breed }} {{ i.name }}
      
      <button @click="removeItem(i.name)">remove</button>
      <div v-show = "i.edit == false">
        <label>{{ i.notes }}</label>
        <button v-show = "i.edit == false" @click="i.edit = true; edit()">edit</button>
      </div>
      <input v-show="i.edit == true" v-model="i.notes"
      v-on:blur= "i.edit = false"
      @keyup.enter = "i.edit = false; update(i.notes, i.name)">
      <button v-show="i.edit == true" @click="i.edit = false; cancel()">cancel</button>
    </li>
  </ul>

  <!-- page controls -->
  <span v-if="pagerButtons">
    <button @click="prevPage()">&lt;previous</button>
    page
    <select v-model="currentPage">
      <option v-for="i in totalPages" :value="i"
      @click="showPage(i)">{{ i }}</option>
    </select> of {{ totalPages }}
    <button @click="nextPage()">next&gt;</button>
  </span>
  <!-- end page controls -->

</div>
</template>
<script>
import {store} from "../js/store.js";
import {nameExists} from "../js/nameexists.js";
import Paginate from "../js/vendor/Paginate.js";

const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data () {
    return {   
      currentFavorites: "",

      // paginator 
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: false,

      editNoteCache: null
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
    this.activatePager();
  },
  methods: {
    activatePager: function() {
      this.pager = null;
      this.pager = new Paginate(store.favorites); 
      this.currentFavorites = this.pager.page(0);
      this.currentPage = this.pager.currentPage; 
      this.totalPages = this.pager.totalPages;
      this.pagerButtons = true;
    },
    showPage: function(num) {
      this.currentImages = this.pager.page(num);
    },
    nextPage: function() {
      if (!this.pager.hasNext()) {
        this.currentImages = this.pager.page(0);
      } else {
        this.currentImages = this.pager.page(this.pager.currentPage + 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    prevPage: function() {
      if (this.pager.currentPage === 1) {
        this.currentImages = this.pager.page(this.pager.totalPages);
      } else {
        this.currentImages = this.pager.page(this.pager.currentPage - 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    edit: function(tempnote) {
      // todo
    },
    update: function(newNote, name) {
      let itemIndex = nameExists(name, store.favorites);
      store.favorites[itemIndex].notes = newNote;
    },
    cancel: function() {
      // todo
    },
    removeItem: function(name) {
      let itemIndex = nameExists(name, store.favorites);
      store.favorites.splice(itemIndex, 1);
      this.activatePager();
    },  
  }
}
</script>