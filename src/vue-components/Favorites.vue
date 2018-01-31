<template>
<div>
  <!-- header -->
  <vcHeader />
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
<select class="breed-selector">
  <option value="">Choose Breed...</option>
  <option v-for="i in options"
  @click="switchBreed(i)" :value="i">{{ i }}</option>
</select>
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
    <!-- rightside -->
    <div class="col-sm-8 rightside">
      <!-- rightside_contents -->
      <div class="row col-sm-12 rightside_contents">
        <!-- stage -->
        <div>
          stage
        </div>
        <!-- /stage -->
        <!-- page controls -->
        <div>
          <span class="pg_holder" v-if="pagerButtons">
            <button class="btn btn1-01 btn_prev" tabindex="0"
            @click="prevPage()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Prev</button>
            page
            <select @change="showPage($event.target.value)" class="pg_totalpages" v-model="currentPage">
                <option v-for="i in totalPages" :value="i"
                @click="showPage(i)">{{ i }}</option>
              </select>
            of {{ totalPages }}
            <button class="btn btn1-01 btn_next" tabindex="0"
            @click="nextPage()">Next
            <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
            </button>
          </span>
          <span class="favorites_filter">
          <button class="btn btn1-01"
          @click="showAll()">Show all breeds</button>
          <!-- breed filter -->
          <select class="breed-selector">
              <option value="">Filter Breed...</option>
              <option v-for="i in favoriteCategories"
              @click="filter(i)" :value="i">{{ i }}</option>
            </select>
          </span>
          <hr>
        </div>
        <!-- /page controls -->
        <!-- favorites display -->
        <div>
          <ul >
            <li v-for="(i, index) in currentFavorites">
              {{ i.breed }} {{ i.name }}
              
              <button class="btn btn1-01 btn_remove"
              @click="removeItem(i.name)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
              </button>
              <div v-show = "i.edit == false">
                <label>{{ i.notes }}</label>
                <button class="btn btn1-01 btn_edit"
                v-show = "i.edit == false" @click="i.edit = true; edit()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
                </button>
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
      </div>
      <!-- rightside_contents -->
    </div>
    <!-- /rightside -->
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

const vcHeader = () => import ('./vcHeader.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
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
    vcHeader: vcHeader,
    vcRandomDog: vcRandomDog,
    vcLastViewed: vcLastViewed,
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
        this.currentFavorites = this.pager.next();
      }
      this.currentPage = this.pager.currentPage;
    },
    prevPage: function() {
      if (this.pager.currentPage === 1) {
        this.currentFavorites = this.pager.page(this.pager.totalPages);
      } else {
        this.currentFavorites = this.pager.prev();
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