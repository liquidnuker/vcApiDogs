<template>
<div>
  <vcBreedSelector 
  :pr-selected="currentBreed" />

  <br>
  <br>

  <!-- random dog -->
  <vcRandomDog
  :pr-status="status.randomDog"
  :pr-random-breed="randomDogBreed"
  :pr-random-image="randomDogImage" />

  <!-- gallery display -->
  <vcGalleryDisplay 
  :pr-status="status.galleryDisplay"
  :pr-current-images="currentImages" />
  <!-- end gallery display -->

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
import {axios_get} from "../js/axios_get.js";
import {allbreeds} from "../js/allbreeds.js";
import {itemExists} from "../js/itemexists.js";
import {shuffle} from "../js/shuffle.js";
import {router} from "../js/router.js";
import Paginate from "../js/vendor/Paginate.js";

const vcBreedSelector = () => import ('./vcBreedSelector.vue');
const vcGalleryDisplay = () => import ('./vcGalleryDisplay.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
export default {
  data () {
    return {   
      currentBreed: "",
      currentImages: "",

      // random dog
      randomDogBreed: "",
      randomDogImage: "",

      // paginator 
      pager: "",
      currentPage: "",
      totalPages: "",
      pagerButtons: false,

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
    vcRandomDog: vcRandomDog
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
      let url = "https://dog.ceo/api/breed/" + breedName + "/images";
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          self.pager = new Paginate(arr[0].message); 
          self.status.galleryDisplay = "fetching images...";         
          
          // default page
          self.currentImages = self.pager.page(0);
          self.currentPage = self.pager.currentPage;          
        })
        .then(function () {
          self.status.galleryDisplay = "";  
          self.totalPages = self.pager.totalPages;
          self.pagerButtons = true;

          // show random dog 
          self.showRandomDogImage();
          self.status.randomDog = "loading random dog...";
        });
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