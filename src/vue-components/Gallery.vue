<template>
<div>
  <!-- header -->
  <header class="row container-fluid--h">
    <div class="row container main-header">
      <div class="col-sm-4">logo</div>
      <div class="col-sm-8">
        <!-- favoriteCount -->
        <vcFavoriteCount />
        <!-- /favoriteCount -->
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
        <vcBreedSelector
        :pr-selected="currentBreed" />
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
          <span class="pg_holder" v-if="pagerButtons"
            v-show="!viewDog">
            <button class="btn btn1-01 btn_prev" tabindex="0"
            @click="prevPage()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Prev</button>
            <p>page</p>            
              <select class="pg_select" @change="showPage($event.target.value)" v-model="currentPage">
                <option v-for="i in totalPages" :value="i">{{ i }}</option>
              </select>
            <p>of {{ totalPages }}</p>
            <button class="btn btn1-01 btn_prev" tabindex="0"
            @click="nextPage()">Next
            <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg></button>
          </span>
        </div>
        <!-- /page controls -->
        <!-- gallery display -->
        <!-- dog view -->
        <div v-if="viewDog">
          <p @click="viewDog=false">Back to gallery</p>
          <a :href="currentDog">
            <img :src="currentDog"
            :alt="currentDog" :title="currentDog" />
          </a>
        </div>
        <!-- /dog view -->
        <!-- gallery view -->
        <div v-else>
          {{ prStatus }}
          <ul class="gallery_display" v-for="i in currentImages">
            <li class="col-xs-6 col-sm-3">
              <div class="gallery_display_img-holder">
                <img :src="i" :alt="currentBreed + ' image'"
                :title="currentBreed + ' image'"
                @click="insertLastViewed(i, currentBreed); addToFavorites(i, currentBreed)" />
              </div>
            </li>
          </ul>
        </div>
        <!-- /gallery view -->
        <!-- /gallery display -->
      </div>
      <!-- /rightside_contents -->
    </div>
    <!-- rightside -->
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
import {itemExists} from "../js/itemexists.js";
import {shuffle} from "../js/shuffle.js";
import {router} from "../js/router.js";
import Paginate from "../js/vendor/Paginate.js";
import {store} from "../js/store.js";
import {extractFileName} from "../js/extractfilename.js";
import {nameExists} from "../js/nameexists.js";

const vcBreedSelector = () => import ('./vcBreedSelector.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data () {
    return {   
      currentBreed: "",
      cachedImages: "", // default unfiltered
      currentImages: "", // displayed items

      // random dog
      randomDogBreed: "",
      randomDogImage: "",

      // paginator 
      pager: "",
      currentPage: "",
      totalPages: "",
      pagerButtons: true,

      // status
      status: {
        galleryDisplay: "",
        randomDog: ""  
      },

      // viewDog
      viewDog: false,
      currentDog: ""
    }
  },
  components: {
    vcBreedSelector: vcBreedSelector,
    vcRandomDog: vcRandomDog,
    vcFavoriteCount: vcFavoriteCount,
    vcLastViewed: vcLastViewed,
  },
  watch: {
    $route: function () {
        this.checkCategory();
      }
  },
  mounted: function () {
    this.checkCategory();
  },
  methods: {  
    checkCategory: function () {
      // check if category exists before loading json
      let breedToCheck = this.$route.params.breedname.toLowerCase();

      if (!itemExists(breedToCheck, allbreeds)) {
      // 404/default item
      router.push({path: "/gallery/bulldog"});
      } else {
      this.currentBreed = breedToCheck;
      this.displayBreedImages(this.currentBreed);      
      }
    },
    displayBreedImages: function (breedName) {
      this.status.galleryDisplay = `fetching ${this.currentBreed} data`;

      // Returns an array of all the images from the breed
      let url = `https://dog.ceo/api/breed/${breedName}/images`;
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          self.cachedImages = arr[0].message; 
          self.status.galleryDisplay = "fetching images...";         
          self.activatePager();
        })
        .then(function () {
          self.status.galleryDisplay = "";  
          // show random dog 
          self.showRandomDogImage();
          self.status.randomDog = "loading random dog...";
        });
    },
    activatePager: function() {
      this.pager = null;
      this.pager = new Paginate(this.cachedImages); 
      this.currentImages = this.pager.page(0);
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
        this.currentImages = this.pager.next();
      }
      this.currentPage = this.pager.currentPage;
    },
    prevPage: function() {
      if (this.pager.currentPage === 1) {
        this.currentImages = this.pager.page(this.pager.totalPages);
      } else {
        this.currentImages = this.pager.prev();
      }
      this.currentPage = this.pager.currentPage;
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
    insertLastViewed: function(imgSrc, breed) {
      this.currentDog = imgSrc;
      this.viewDog = true;

      let name = extractFileName(imgSrc, false);
      
      // check before pushing
      if (nameExists(name, store.lastViewed) !== undefined) {
        return;
      } else {
        // lastViewed limit
        if (store.lastViewed.length === 4) {
          store.lastViewed.pop();
        } 
        store.lastViewed.unshift({
          name: name,
          imgSrc: imgSrc,
          breed: breed,
        });
      }      
    },
    addToFavorites: function(imgSrc, breed) {
      let name = extractFileName(imgSrc, false);

      // check before pushing
      if (nameExists(name, store.favorites) !== undefined) {
        console.log("already in favorites");
        return;
      } else {
      store.favorites.push({
        name: name,
        imgSrc: imgSrc,
        breed: breed,
        notes: "",
        edit: false
      });
      }
    }      
  }
}
</script>