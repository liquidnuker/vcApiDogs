<template>
<div>
  <vcBreedSelector 
  :pr-selected="currentBreed" />

  <br>
  <br>

  <!-- temp image display -->
  <ul v-for="i in currentImages">
    <li>
      <img :src="i" />
    </li>
  </ul>
  <!-- end temp image display -->

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
import {router} from "../js/router.js";
import Paginate from "../js/vendor/Paginate.js";

const vcBreedSelector = () => import ('./vcBreedSelector.vue');
export default {
  data () {
    return {   
      currentBreed: "",
      currentImages: "",

      // paginator 
      pager: "",
      currentPage: "",
      totalPages: "",
      pagerButtons: false
    }
  },
  components: {
    vcBreedSelector: vcBreedSelector,
  },
  watch: {
    $route: function () {
        this.checkCategory();
      }
  },
  props: [
    "prName1"
  ],
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
      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + breedName + "/images";
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          self.pager = new Paginate(arr[0].message);          
          
          // default page
          self.currentImages = self.pager.page(0);
          self.currentPage = self.pager.currentPage;          
        })
        .then(function () {
          self.totalPages = self.pager.totalPages;
          self.pagerButtons = true;
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
    }      
  }
}
</script>