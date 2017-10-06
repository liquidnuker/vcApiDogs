<template>
  <div>
    
  </div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
export default {
  data() {
    return {
      allBreeds: [],
      breedImages: [],
      
      // api urls
      // List all breed names including sub breeds.
      allBreedNames: "https://dog.ceo/api/breeds/list/all",
      // Returns an array of all the dog images from all the master breeds
      masterBreedImages: "https://dog.ceo/api/breeds/list",

    }
  },
  mounted: function () {
    // this.listAllBreedNames();
    this.listMasterBreedImages();
  },
  methods: {
    listAllBreedNames: function () {
      let self = this;
      axios_get(self.allBreedNames)
        .then(function (response) {
          let arr = Object.values(response);
          let arr2 = arr[0].message;
          
          for (let i in arr2) {
            self.allBreeds.push(i);
          }
        })
        .then(function () {
        // self.pagerActive = true;
        // pager.activate(4, self.perPage); // timeOut, perPage
      });
    },
    listMasterBreedImages: function () {
      // todo: fetch .jpg for this
      let self = this;
      axios_get(self.masterBreedImages)
        .then(function (response) {
          let arr = Object.values(response);
          let arr2 = arr[0].message;
        })
        .then(function () {
        // self.pagerActive = true;
        // pager.activate(4, self.perPage); // timeOut, perPage
      });
    }
  }
}
</script>