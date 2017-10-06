<template>
  <div>
    <ul v-for="i in allBreedNames">
    <li>{{ i }}</li>
    </ul>
  </div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
export default {
  data() {
    return {
      allBreedNames: [],
      masterBreedImages: [],
      breedImages: [],
      subBreed: [],
      
      // api urls
      // List all breed names including sub breeds.
      url_allBreedNames: "https://dog.ceo/api/breeds/list/all",
      // Returns an array of all the dog images from all the master breeds
      url_masterBreedImages: "https://dog.ceo/api/breeds/list",
           

    }
  },
  mounted: function () {
    this.listAllBreedNames();
    // this.listMasterBreedImages();
    // this.listBreedImages("african");
    // this.listSubBreed("african");
  },
  methods: {
    listAllBreedNames: function () {
      let self = this;
      axios_get(self.url_allBreedNames)
        .then(function (response) {
          let arr = Object.values(response);
          let arr2 = arr[0].message;

          for (let i in arr2) {
            self.allBreedNames.push(i);
          }

          // console.log(self.allBreedNames);
        })
        .then(function () {
        // self.pagerActive = true;
        // pager.activate(4, self.perPage); // timeOut, perPage
      });
    },
    listMasterBreedImages: function () {
      let self = this;
      axios_get(self.masterBreedImages)
        .then(function (response) {
          let arr = Object.values(response);
          let arr2 = arr[0].message;
          console.log(arr2);
        })
        .then(function () {
        // self.pagerActive = true;
        // pager.activate(4, self.perPage); // timeOut, perPage
      });
    },
    listBreedImages: function (breedName) {
      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + breedName + "/images";
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          let arr2 = arr[0].message;
          console.log(arr2[0]); // jpg ok
        })
        .then(function () {
        // self.pagerActive = true;
        // pager.activate(4, self.perPage); // timeOut, perPage
      });
    },
    listSubBreed: function (breedName) {
      // empty if no sub-breed
      let url = "https://dog.ceo/api/breed/" + breedName + "/list";
      let self = this;
      axios_get(url)
        .then(function (response) {
          // console.log(response);
        })
        .then(function () {
        // self.pagerActive = true;
        // pager.activate(4, self.perPage); // timeOut, perPage
      });
    },

  }
}
</script>