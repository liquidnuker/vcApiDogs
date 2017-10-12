<template>
<div>

  <!-- header -->
  <header class="row container-fluid--h">
    <div class="row container main-header">
      <div class="col-sm-4">logo</div>
      <div class="col-sm-8">favorites</div>
    </div>
  </header>
  <!-- /header -->

  <!-- main -->
  <main class="row container-fluid--m">
    <div class="row container main-items">
      <div class="col-sm-4">dropdown</div>
      <div class="col-sm-8">carousel</div>
      <div class="col-sm-4">randog</div>
      <div class="col-sm-8">favorites display</div>
      <div class="col-sm-4">lastviewed</div>
    </div>
  </main>
  <!-- /main -->

  <!-- footer -->
  <footer class="row container-fluid--f">
    <div class="row container main-footer">
      <div class="col-sm-12">
        footer
      </div>
    </div>
  </footer>
  <!-- /footer -->

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

  <button @click="showAll()">Show All</button>
  <!-- breed selector -->
  <select>
    <option value="">Filter Breed...</option>
    <option v-for="i in options"
    @click="filter(i)" :value="i">{{ i }}</option>
  </select>

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
import {allbreeds} from "../js/allbreeds.js";
import {store} from "../js/store.js";
import {nameExists} from "../js/nameexists.js";
import Paginate from "../js/vendor/Paginate.js";

const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data () {
    return {   
      currentFavorites: "",

      options: allbreeds.sort(),

      // paginator 
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: false,

      editNoteCache: null,

      filterItem: null
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
    this.activatePager(store.favorites);
  },
  methods: {
    activatePager: function(data) {
      this.pager = null;
      this.pager = new Paginate(data); 
      this.currentFavorites = this.pager.page(0);
      this.currentPage = this.pager.currentPage; 
      this.totalPages = this.pager.totalPages;
      this.pagerButtons = true;
    },
    showPage: function(num) {
      this.currentFavorites = this.pager.page(num);
    },
    nextPage: function() {
      if (!this.pager.hasNext()) {
        this.currentFavorites = this.pager.page(0);
      } else {
        this.currentFavorites = this.pager.page(this.pager.currentPage + 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    prevPage: function() {
      if (this.pager.currentPage === 1) {
        this.currentFavorites = this.pager.page(this.pager.totalPages);
      } else {
        this.currentFavorites = this.pager.page(this.pager.currentPage - 1);
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
      
      if (this.filterItem) {
        // retain filtered view
        this.filter(this.filterItem);
      } else {
        this.showAll();
      }
    },
    filter: function(breed) {
      this.filterItem = breed;

      let filteredBreed = store.favorites.filter(function (el) {
      return el.breed === breed; 
      }); 
      this.activatePager(filteredBreed);   
    },
    showAll: function() {
      this.filterItem = null;
      this.activatePager(store.favorites);
    }  
  }
}
</script>