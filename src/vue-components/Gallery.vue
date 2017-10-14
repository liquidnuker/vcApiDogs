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
          <select @change="showPage($event.target.value)" v-model="currentPage">
            <option v-for="i in totalPages" :value="i">{{ i }}</option>
          </select>
          </div> of {{ totalPages }}
          <vcBtnPageNext @nextPage="nextPage()" />
        </span>
      </div>
      <!-- /page controls -->
      <!-- gallery display -->
      <div>
        <vcGalleryDisplay
        :pr-status="status.galleryDisplay"
        :pr-current-breed="currentBreed"
        :pr-current-images="currentImages" />
      </div>
      <!-- /gallery display -->
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
import {itemExists} from "../js/itemexists.js";
import {shuffle} from "../js/shuffle.js";
import {router} from "../js/router.js";
import Paginate from "../js/vendor/Paginate.js";

const vcBreedSelector = () => import ('./vcBreedSelector.vue');
const vcGalleryDisplay = () => import ('./vcGalleryDisplay.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
const vcBtnPagePrev = () => import ('./vcBtnPagePrev.vue');
const vcBtnPageNext = () => import ('./vcBtnPageNext.vue');
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
    }
  },
  components: {
    vcBreedSelector: vcBreedSelector,
    vcGalleryDisplay: vcGalleryDisplay,
    vcRandomDog: vcRandomDog,
    vcFavoriteCount: vcFavoriteCount,
    vcLastViewed: vcLastViewed,
    vcBtnPagePrev: vcBtnPagePrev,
    vcBtnPageNext: vcBtnPageNext
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
  }
}
</script>