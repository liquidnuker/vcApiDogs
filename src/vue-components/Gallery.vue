<template>
<div>
  <!-- begin temporary display  -->
  <div class="row" id="tempdisplay">
    <!--top controls-->
    <div class="gallery-listing-paginator">
    </div>
    <!--top controls-->
    <section id="gallery-placeholder" class="row col-sm-12">
      <div id="galleryContainer">
        <!-- grid for rwd -->
        <div v-for="(i, index) in breedImages" class="col-xs-12 col-sm-4 col-lg-3">
          <div id="ajaxbox">
            <img :src="i">
          </div>
        </div>
        <!-- close grid -->
      </div>
    </section>
  </div>
  <!-- end temporary display  -->
</div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
import {allbreeds} from "../js/allbreeds.js";
import {itemExists} from "../js/itemexists.js";
import {router} from "../js/router.js";
import {pager} from "../js/paginator.js";
export default {
  data () {
    return {   
      currentBreed: "",
      breedImages: "",

      pagerActive: false,
      perPage: 8,
    }
  },
  watch: {
    $route: function () {
        console.log("watcherpageractive:" + " " + this.pagerActive);
        if (this.pagerActive) {
          pager.destroy();
        }
        this.checkCategory();
      }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    // this.checkCategory();
  },
  methods: {  
    checkCategory: function () {
      // check if category exists before loading json
      let breedToCheck = this.$route.params.breedname.toLowerCase();

      if (!itemExists(breedToCheck, allbreeds)) {
      console.log("404/revert to gallery/defaultItem");
      // router.push({
      // path: "/gallery/all"
      // });
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
          self.breedImages = arr[0].message;
        })
        .then(function () {
        self.pagerActive = true;
        pager.activate(4, self.perPage); // timeOut, perPage
      });
    },      
  }
}
</script>