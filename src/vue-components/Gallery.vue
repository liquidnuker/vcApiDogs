<template>
<div>
   <vue-progress-bar></vue-progress-bar>
  <!-- header -->
  <vcHeader />
  <!-- /header -->
  <!-- main -->
  <main class="row container-fluid--m">
  <div class="row container main-items">
    <div class="col-sm-12 breadcrumb">
      <a href="index.html#/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
      </a>
      <a href="index.html#/">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      <p>Gallery: {{ currentBreed }}</p>
    </div>
    <!-- leftside -->
    <div class="col-sm-4 lrbg">
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
        :pr-random-image="randomDogImage"
        :pr-random-dog-name="randomDogName" 
        :pr-is-random-dog-ready="isRandomDogReady" />
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
          <div class="stage_gallery">
          <p class="stage_gallery_breedname font_heading1">{{ currentBreed }}</p>
          <p class="stage_gallery_description">{{ currentBreed }} is the finest dog breed in the world...</p>
          </div>
        </div>
        <!-- /stage -->
        <!-- page controls -->
        <div>
          <span class="pg_holder" v-if="pagerButtons"
            v-show="!viewDog">
            <button class="btn btn1-01 btn_prev" tabindex="0"
            @click="flip()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Prev</button>
            <p>page</p>            
              <select class="pg_select" @change="showPage($event.target.value)" v-model="currentPage">
                <option v-for="i in totalPages" :value="i"
                @click="showPage(i)">{{ i }}</option>
              </select>
            <p>of {{ totalPages }}</p>
            <button class="btn btn1-01 btn_prev" tabindex="0"
            @click="flip('next')">Next
            <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg></button>
          </span>
        </div>
        <!-- /page controls -->
        <!-- gallery display -->
        <!-- dog view -->
        <div v-if="viewDog" class="dogview">
          <button class="btn btn1-01" @click="viewDog=false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
          Back to {{ currentBreed }} gallery</button>
          <span class="dogview_name font_heading1">{{ extractDogName(currentDog) }}</span>
          <a :href="currentDog">
            <img class="dogview_img" :src="currentDog"
            :alt="currentDog" :title="currentDog" />
          </a>
        </div>
        <!-- /dog view -->
        <!-- gallery view -->
        <div v-else>
          <p>{{ status.galleryDisplay }}</p>
          <ul class="gallery_display" v-for="i in currentImages">
            <li class="col-xs-6 col-sm-3">
              <div class="gallery_display_img-holder">
                <vcSpinner 
                :pr-is-thumbs-ready="isThumbsReady" />
                <img v-if="isThumbsReady" :src="i" :alt="currentBreed + ' image'"
                :title="currentBreed + ' image'"
                @click="insertLastViewed(i, currentBreed);" />
              </div>
              <div class="gallery_display_info">
                <p class="gallery_display_dogname">{{ extractDogName(i) }}</p>
              <button class="btn btn1-01" @click="addToFavorites(i, currentBreed)">
                +Fav
              </button>
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
</div>
</template>
<script>
import {jsonDir} from "../js/jsondir.js";
import {axios_get} from "../js/axios_get.js";
import {allbreeds} from "../js/allbreeds.js";
import {itemExists} from "../js/itemexists.js";
import {shuffle} from "../js/shuffle.js";
import {router} from "../js/router.js";
import {store} from "../js/store.js";
import {storage} from "../js/localStorage.js";
import {extractFileName} from "../js/extractfilename.js";
import {nameExists} from "../js/nameexists.js";
import Pager from "../js/pager.js";


const vcBreedSelector = () => import ('./vcBreedSelector.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcHeader = () => import ('./vcHeader.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcSpinner = () => import ('./vcSpinner.vue');
export default {
  data () {
    return {   
      STORAGE_KEY_LASTVIEWED: "vcApiDogs-lastViewed",
      STORAGE_KEY_FAVORITES: "vcApiDogs-favorites",  
      
      currentBreed: "",
      cachedImages: "", // default unfiltered
      currentImages: "", // displayed items

      // random dog
      randomDogBreed: "",
      randomDogImage: "",
      randomDogName: "",

      // paginator 
      pager: "",
      currentPage: "",
      totalPages: "",
      pagerButtons: true,
      perPage: 4,

      // status
      status: {
        galleryDisplay: "",
        randomDog: ""  
      },

      // viewDog
      viewDog: false,
      currentDog: "",

      isThumbsReady: false,
      isRandomDogReady: false
    }
  },
  components: {
    vcBreedSelector: vcBreedSelector,
    vcRandomDog: vcRandomDog,
    vcLastViewed: vcLastViewed,
    vcHeader: vcHeader,
    vcSpinner: vcSpinner
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
    extractDogName: function(url) {
      let name = extractFileName(url, false);
      return name;
    },
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
      this.$Progress.start();

      // Returns an array of all the images from the breed
      // let url = `https://dog.ceo/api/breed/${breedName}/images`;
      
      // this.loadBackupGallery();
      
      let url = `https://dog.ceo/api/breed/${breedName}/images`;
      
      axios_get(url)
        .then((response) => {
          this.$Progress.finish();
          let arr = Object.values(response);
          this.cachedImages = arr[0].message; 
          this.status.galleryDisplay = "fetching images...";         
        })
        .then(() => {
          this.prepareRandomDog();
        })
        .catch((error) => {
          // console.log(error);
          this.loadBackupGallery();
        });
    },
    loadBackupGallery: function() {
      console.log("loading gallery backup");
      let url = jsonDir + "gallery_backup_default.json";
      axios_get(url)
        .then((response) => {
          this.cachedImages = response.data["default"]; 
        })
        .then(() => {
          this.prepareRandomDog();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    prepareRandomDog: function() {
      this.activatePager();
      this.$Progress.fail();
      this.status.galleryDisplay = "";  
      this.showRandomDogImage();
    },
    activatePager: function() {
      this.pager = null;
      this.pager = new Pager({
        perPage: this.perPage,
        data: this.cachedImages
      });
      this.totalPages = this.pager.getTotalPages();
      this.pagerButtons = true;
      this.showPage(1);
    },
    showPage: function(num) {
      this.currentImages = this.pager.page(num);
      this.currentPage = this.pager.currentPage;
      this.setThumbsReady(true);
    },
    flip: function(direction) {
      this.setThumbsReady(false);
      if (direction === "next") {
        this.showPage(this.pager.next());
      } else {
        this.showPage(this.pager.prev());
      }
    },
    setThumbsReady: function(isReady) {
      this.isThumbsReady = isReady;
    },
    showRandomDogImage: function () {
      this.status.randomDog = "loading random dog...";
      this.randomDogBreed = shuffle(allbreeds);
      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + this.randomDogBreed[0] + "/images";
      
      axios_get(url)
        .then((response) => {
          let arr = Object.values(response);
          this.status.randomDog = "";
          this.randomDogImage = shuffle(arr[0].message);
        })
        .then(() => {
          this.randomDogName = extractFileName(this.randomDogImage[0], false);
          this.isRandomDogReady = true;
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

        storage.save(this.STORAGE_KEY_LASTVIEWED, store.lastViewed);
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
        edit: false,
        favorited: true
      });

      storage.save(this.STORAGE_KEY_FAVORITES, store.favorites);
      }
    },
  }
}
</script>