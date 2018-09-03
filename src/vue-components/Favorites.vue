<template>
<div>
  <!-- header -->
  <vcHeader />
  <!-- /header -->
  <!-- main -->
  <main class="row container-fluid--m">
  <div class="row container main-items">
    <span class="col-sm-12 breadcrumb">
      <a href="index.html#/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
      </a>
      <a href="index.html#/">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      <p>Favorites</p>
    </span>
    <!-- leftside -->
    <div class="col-sm-4 lrbg">
      <!-- breed selector -->
      <div>
        <select class="breed-selector">
          <option value="">Choose Breed...</option>
          <option v-for="i in options" 
          @change="switchBreed(i)" 
          @click="switchBreed(i)" :value="i">{{ i }}</option>
        </select>
      </div>
      <!-- /breed selector -->
      <!-- randog -->
      <div>
        <vcRandomDog
        :pr-status="status.randomDog"
        :pr-random-breed="randomDogBreed"
        :pr-random-image="randomDogImage"
        :pr-random-dog-name="randomDogName" />
      </div>
      <!-- /randog -->
      <!-- lastViewed -->
      <div>
        <vcLastViewed />
      </div>
      <!-- /lastViewed -->
    </div>
    <!-- /leftside -->
    <!-- rightside -->
    <div class="col-sm-8 rightside">
      <!-- rightside_contents -->
      <div class="row col-sm-12 rightside_contents lrbg">
        <!-- stage -->
        <div class="stage">
          <p class="stage_gallery_breedname font_heading1">Favorites</p>
        </div>
        <!-- /stage -->
        <!-- page controls -->
        <div>
          <span class="pg_holder" v-if="pagerButtons">
            <button class="btn btn1-01 btn_prev" tabindex="0"
            @click="flip()">
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
            @click="flip('next')">Next
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
              @change="filter(i)" 
              @click="filter(i)" :value="i">{{ i }}</option>
            </select>
          </span>
          <hr>
        </div>
        <!-- /page controls -->
        <!-- favorites display -->
        <div class="favorites_list">
          <ul>
            <li v-for="(i, index) in currentFavorites">
              <div class="favorites_list_info">
                <img class="favorites_list_img" :src="i.imgSrc" />
                <p class="favorites_list_name">{{ i.name }}</p><br>
                <span>Breed:&nbsp;<a class="favorites_list_breed" @click="switchBreed(i.breed)">{{ i.breed }}</a></span>
                <button class="btn btn1-01 btn_remove"
                @click="removeItem(i.name)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                </button>
              </div>
              <div class="favorites_notes" v-show="!i.edit">
                <label>{{ i.notes }}</label>
                <button class="btn btn1-01 btn_edit"
                v-show = "!i.edit" @click="edit(i.name)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
                </button>
              </div>
              <div class="favorites_edit" v-show="i.edit">
                <!-- v-on:blur= "i.edit = false" -->
                <textarea class="col-sm-12" v-model="i.notes" v-show="i.edit" @keyup.enter = "update(i.notes, i.name)"></textarea>
                <br>
                <button class="btn btn1-01" v-show="i.edit" @click="update(i.notes, i.name)">
                save
                </button>
                <button class="btn btn1-01" v-show="i.edit" @click="cancelEdit(i.name)">
                cancel
                </button>
              </div>
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
</div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
import {allbreeds} from "../js/allbreeds.js";
import {shuffle} from "../js/shuffle.js";
import {store} from "../js/store.js";
import {storage} from "../js/localStorage.js";
import {nameExists} from "../js/nameexists.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_filter} from "../js/arr_filter.js";
import {router} from "../js/router.js";
import {extractFileName} from "../js/extractfilename.js";
import Pager from "../js/pager.js";

const xss = require("xss");

const vcHeader = () => import ('./vcHeader.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
export default {
  data() {
      return {
        STORAGE_KEY_FAVORITES: "vcApiDogs-favorites",  

        filteredFavorites: "",
        currentFavorites: "", // displayed items

        options: allbreeds.sort(),
        favoriteCategories: "",

        // paginator 
        pager: null,
        currentPage: "",
        totalPages: "",
        pagerButtons: true,
        perPage: 2,

        filterItem: null,

        // random dog
        randomDogBreed: "",
        randomDogImage: "",
        randomDogName: "",

        // status
        status: {
          randomDog: ""
        },

        // list edit
        previousEditIndex: 0,
        editNoteCache: null,
      };
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
      // this.filteredFavorites = store.favorites; // replace with fetchData
      this.fetchData();

      this.activatePager();

      // for favorites dropdown
      this.setFavoriteCategories(this.filteredFavorites);

      this.showRandomDogImage();
      this.status.randomDog = "loading random dog...";
    },
    methods: {
      activatePager: function () {
        this.pager = null;
        this.pager = new Pager({
          perPage: this.perPage,
          data: this.filteredFavorites
        });
        
        this.totalPages = this.pager.getTotalPages();
        this.pagerButtons = true;
        this.showPage(1);
      },
      showPage: function (num) {
        this.currentFavorites = this.pager.page(num);
        this.currentPage = this.pager.currentPage;
      },
      flip: function(direction) {
        if (direction === "next") {
          this.showPage(this.pager.next());
        } else {
          this.showPage(this.pager.prev());
        }
      },
      fetchData: function() {
        this.filteredFavorites = storage.fetch(this.STORAGE_KEY_FAVORITES);
        store.favorites = this.filteredFavorites;
      },
      saveData: function() {
        storage.save(this.STORAGE_KEY_FAVORITES, store.favorites);
      },
      setFavoriteCategories: function (arr) {
        this.favoriteCategories = [];
        let categoryTemp = arr_extractUnique(arr, "breed");

        for (let i in categoryTemp) {
          this.favoriteCategories.push(categoryTemp[i]);
        }
        categoryTemp = null;
      },
      edit: function (name) {
        let index = nameExists(name, store.favorites);
        // console.log(`previous: ${this.previousEditIndex} current: ${index}`);
        
        if (store.favorites[this.previousEditIndex] !== undefined) {
          // unset previous
          store.favorites[this.previousEditIndex].edit = false;
        } 
        // set new previous
        this.previousEditIndex = index;

        // current edit
        store.favorites[index].edit = true;

        // if cancelled
        this.editNoteCache = store.favorites[index].notes;

        this.saveData();
      },
      cancelEdit: function (name) {
        let index = nameExists(name, store.favorites);
        store.favorites[index].edit = false;
        store.favorites[index].notes = this.editNoteCache;
      },
      update: function (newNote, name) {
        let index = nameExists(name, store.favorites);

        let sanitized = xss(newNote, {
          whiteList: [], // empty, means filter out all tags
          stripIgnoreTag: true, // filter out all HTML not in the whilelist
          stripIgnoreTagBody: ["script"] // the script tag is a special case, we need
          // to filter out its content
        });

        store.favorites[index].notes = sanitized;
        store.favorites[index].edit = false;

        this.saveData();
      },
      removeItem: function (name) {
        let index = nameExists(name, store.favorites);

        // temp
        for (let i = 0, l = store.favorites.length; i < l; i++) {
          store.favorites[i].edit = false;
        }

        store.favorites.splice(index, 1);
        this.filteredFavorites = store.favorites;

        // stay on filtered view
        if (this.filterItem) {
          this.filter(this.filterItem);
        } else {
          this.showAll();
        }

        // update dropdown
        this.setFavoriteCategories(store.favorites);

        this.saveData();
      },
      filter: function (breed) {
        this.filterItem = breed;
        let filteredBreed = arr_filter(store.favorites, "breed", breed);

        this.filteredFavorites = filteredBreed;
        this.activatePager();
      },
      showAll: function () {
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
            self.randomDogName = extractFileName(self.randomDogImage[0], false);
          });
      },
      switchBreed: function (breed) {
        router.push({
          path: "/gallery/" + breed
        });
      }
    }
};
</script>