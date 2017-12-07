<template>
<div>
  <!-- header -->
  <header class="row container-fluid--h">
    <div class="row container main-header">
      <div class="col-sm-4">logo</div>
      <div class="col-sm-8">
        <vcFavoriteCount />
      </div>
    </div>
  </header>
  <!-- /header -->
  <!-- main -->
  <main class="row container-fluid--m">
  <div class="row container main-items">
    <div class="col-sm-12">
      breadcrumb
    </div>
    <div class="col-sm-4">
      <!-- leftside -->
      <!-- breed selector -->
      <div>
        <div class="custom-select breed-selector">
        <select>
          <option value="">Choose Breed...</option>
          <option v-for="i in options"
          @click="switchBreed(i)" :value="i">{{ i }}</option>
        </select>
        </div>
      </div>
      <!-- /breed selector -->
      <!-- randog -->
      <div>
        <vcRandomDog
        :pr-status="status.randomDog"
        :pr-random-breed="randomDogBreed"
        :pr-random-image="randomDogImage" />
      </div>
      <!-- /randog -->
      <!-- lastViewed -->
      <div>
        <vcLastViewed />
      </div>
      <!-- /lastViewed -->
      <!-- /leftside -->
    </div>
    <div class="col-sm-8">
      <!-- rightside -->
      <!-- stage -->
      <div>
        stage
      </div>
      <!-- /stage -->
      <!-- page controls -->
      <div>
        <span v-if="pagerButtons">
          <vcBtnPagePrev @prevPage="prevPage()" />
          page
          <div class="custom-select pg_totalpages">
          <select v-model="currentPage">
            <option v-for="i in totalPages" :value="i"
            @click="showPage(i)">{{ i }}</option>
          </select>
          </div>
          of {{ totalPages }}
          <vcBtnPageNext @nextPage="nextPage()" />
        </span>
        <button class="btn btn1-01" 
        @click="showAll()">Show All</button>
        <!-- breed filter -->
        <div class="custom-select breed-filter">
        <select>
          <option value="">Filter Breed...</option>
          <option v-for="i in favoriteCategories"
          @click="filter(i)" :value="i">{{ i }}</option>
        </select>
        </div>
      </div>
      <!-- /page controls -->
      <!-- favorites display -->
      <div>
        <ul>
          <li v-for="(i, index) in currentFavorites">
            {{ i.breed }} {{ i.name }}
            
            <button class="btn btn1-01" 
            @click="removeItem(i.name)">remove</button>
            <div v-show = "i.edit == false">
              <label>{{ i.notes }}</label>
              <button class="btn btn1-01" 
              v-show = "i.edit == false" @click="i.edit = true; edit()">edit</button>
            </div>
            <input v-show="i.edit == true" v-model="i.notes"
            v-on:blur= "i.edit = false"
            @keyup.enter = "i.edit = false; update(i.notes, i.name)">
            <button class="btn btn1-01" 
            v-show="i.edit == true" @click="i.edit = false; cancel()">cancel</button>
          </li>
        </ul>
      </div>
      <!-- /favorites display -->
      <!-- /rightside -->
    </div>
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
</div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
import {allbreeds} from "../js/allbreeds.js";
import {shuffle} from "../js/shuffle.js";
import {store} from "../js/store.js";
import {nameExists} from "../js/nameexists.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_filter} from "../js/arr_filter.js";
import Paginate from "../js/vendor/Paginate.js";
import {router} from "../js/router.js";

const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcBtnPagePrev = () => import ('./vcBtnPagePrev.vue');
const vcBtnPageNext = () => import ('./vcBtnPageNext.vue');
export default {
  data () {
    return {   
      filteredFavorites: "",
      currentFavorites: "", // displayed items

      options: allbreeds.sort(),
      favoriteCategories: "",

      // paginator 
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: true,

      filterItem: null,

      editNoteCache: null,

      // random dog
      randomDogBreed: "",
      randomDogImage: "",

      // status
      status: {
        randomDog: ""  
      },
      }
  },
  watch: {
  // : function () {
  // }
  },
  components: {
    vcFavoriteCount: vcFavoriteCount,
    vcRandomDog: vcRandomDog,
    vcLastViewed: vcLastViewed,
    vcBtnPagePrev: vcBtnPagePrev,
    vcBtnPageNext: vcBtnPageNext
  },
  mounted: function () {
    this.filteredFavorites = store.favorites;
    this.activatePager();

    // for favorites dropdown
    this.setFavoriteCategories(store.favorites);

    this.showRandomDogImage();
    this.status.randomDog = "loading random dog...";
  },
  methods: {
    activatePager: function() {
      this.pager = null;
      this.pager = new Paginate(this.filteredFavorites); 
      this.currentFavorites = this.pager.page(0);
      this.currentPage = this.pager.currentPage; 
      this.totalPages = this.pager.totalPages;
      this.pagerButtons = true;
    },
    setFavoriteCategories: function(arr) {
      this.favoriteCategories = [];
      let categoryTemp = arr_extractUnique(arr, "breed");
      
      for (let i in categoryTemp) {
        this.favoriteCategories.push(categoryTemp[i]);
      }
      categoryTemp = null;
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
      this.filteredFavorites = store.favorites;
      
      // stay on filtered view
      if (this.filterItem) {
        this.filter(this.filterItem);
      } else {
        this.showAll();
      }

      // update dropdown
      this.setFavoriteCategories(store.favorites);
    },
    filter: function(breed) {
      this.filterItem = breed;
      let filteredBreed = arr_filter(store.favorites, "breed", breed);

      this.filteredFavorites = filteredBreed;
      this.activatePager();
    },
    showAll: function() {
      this.filterItem = null;
      this.filteredFavorites = store.favorites;
      this.activatePager();
    },
    showRandomDogImage: function () {
      this.randomDogBreed = shuffle(allbreeds);
      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + this.randomDogBreed[0] + "/images";
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          self.status.randomDog = "";
          self.randomDogImage = shuffle(arr[0].message);
        })
        .then(function () {
        
      });      
    },
    switchBreed: function(breed) {
      router.push({path: "/gallery/" + breed});
    }       
  }
}
</script>