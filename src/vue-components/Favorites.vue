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
        <select>
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
          <button @click="prevPage()">&lt;previous</button>
          page
          <select v-model="currentPage">
            <option v-for="i in totalPages" :value="i"
            @click="showPage(i)">{{ i }}</option>
          </select> of {{ totalPages }}
          <button @click="nextPage()">next&gt;</button>
        </span>
        <button @click="showAll()">Show All</button>
        <!-- breed filter -->
        <select>
          <option value="">Filter Breed...</option>
          <option v-for="i in filterOptions"
          @click="filter(i)" :value="i">{{ i }}</option>
        </select>
      </div>
      <!-- /page controls -->
      <!-- favorites display -->
      <div>
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
import Paginate from "../js/vendor/Paginate.js";
import {router} from "../js/router.js";

const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
export default {
  data () {
    return {   
      currentFavorites: "",

      options: allbreeds.sort(),
      filterOptions: allbreeds.sort(),

      // paginator 
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: false,

      editNoteCache: null,

      filterItem: null,

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
    vcLastViewed: vcLastViewed
  },
  mounted: function () {
    this.activatePager(store.favorites);

    this.showRandomDogImage();
    this.status.randomDog = "loading random dog...";
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