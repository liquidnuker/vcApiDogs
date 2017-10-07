<template>
  <div>
    <!-- all breed names -->
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
      allBreedNames: "",
      masterBreedImages: [],
      breedImages: [],
      subBreed: [],
      
      // api urls
      
      // List all breed names including sub breeds.
      // url for api mode:
      // url_allBreedNames: "https://dog.ceo/api/breeds/list/all",
      // url for local list
      url_allBreedNames: "./src/js/ajax/allbreeds.json",

      // Returns a random dog image from all the breed
      url_randomDogImage: "https://dog.ceo/api/breeds/image/random",
    }
  },
  mounted: function () {
    // this.listAllBreedNames();
    // this.listBreedImages("african");
    // this.listSubBreed("african");
    // this.showRandomDogImage();
  },
  methods: {
    listAllBreedNames: function () {
      let self = this;
      axios_get(self.url_allBreedNames)
        .then(function (response) {
          // for local list
          self.allBreedNames = response.data.allbreeds;

          // for api mode
          // let arr = Object.values(response);
          // let arr2 = arr[0].message;

          // for (let i in arr2) {
          //   self.allBreedNames.push(i);
          // }
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
          console.dir(arr2); // jpg ok
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
    showRandomDogImage: function () {
      // todo:
      // shuffle AllbreedNames
      // listBreedImage
      // shuffle < listBreedImage.length
      // show
    }

  }
}
</script>