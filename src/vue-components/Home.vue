<template>
<div>
  <!-- header -->
  <vcHeader />
  <!-- /header -->
  <!-- main -->
  <main class="row container-fluid--m">
  <div class="row container main-items">
    <!-- leftside -->
    <div class="col-sm-4 leftside lrbg">
     <!-- breed selector -->
      <div>
        <select class="breed-selector" @change="switchBreed($event.target.value)">
          <option value="">Choose Breed...</option>
          <option v-for="i in options" :value="i">{{ i }}</option>
        </select>
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
        <div class="stage stage_home">
          <div class="stage_home_desc-holder">
            <h1 class="stage_gallery_breedname font_heading1">Welcome to vcDogs!</h1>
          <p class="stage_gallery_description">Over 9000 dog images!</p>
          </div>
          <img src="src/img/ui/dogs/stage_home2.jpg" alt="main dog image" title="main dog image"/>
        </div>
        <!-- /stage -->
        <!-- main breed directory holder -->
        <div>
          <vcBreedDirectory 
           :pr-breed-dir-items="options" />
        </div>
        <!-- /main breed directory holder -->
      </div>
      <!-- /rightside_contents -->
    </div>
    <!-- /rightside -->
  </div>
  </main>
  <!-- /main -->
</div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
import {shuffle} from "../js/shuffle.js";
import {allbreeds} from "../js/allbreeds.js";
import {router} from "../js/router.js";
import {extractFileName} from "../js/extractfilename.js";
import {jsonDir} from "../js/jsondir.js";

const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcBreedDirectory = () => import ('./vcBreedDirectory.vue');
const vcHeader = () => import ('./vcHeader.vue');
export default {
  data() {
    return {
      allBreedNames: "",

      options: allbreeds.sort(),
      
      // random dog
      randomDogBreed: "",
      randomDogImage: "",
      randomDogName: "",
      isRandomDogReady: false,

      status: {
        randomDog: ""
      },

      // api urls
      // List all breed names including sub breeds.
      // url for api mode:
      // url_allBreedNames: "https://dog.ceo/api/breeds/list/all",
      // url for local list
      url_allBreedNames: jsonDir + "allbreeds.json",
    }
  },
  components: {
    vcRandomDog: vcRandomDog,
    vcLastViewed: vcLastViewed,
    vcBreedDirectory: vcBreedDirectory,
    vcHeader: vcHeader
  },
  mounted: function () {
    this.listAllBreedNames();
  },
  methods: {
    listAllBreedNames: function () {
      axios_get(this.url_allBreedNames)
        .then((response) => {
          // for local list
          this.allBreedNames = response.data.allbreeds;

          // for api mode
          // let arr = Object.values(response);
          // let arr2 = arr[0].message;

          // for (let i in arr2) {
          //   this.allBreedNames.push(i);
          // }
        })
        .then(() => {
          this.showRandomDogImage();
      });
    },
    showRandomDogImage: function () {
      this.randomDogBreed = shuffle(allbreeds);
      this.status.randomDog = `Loading random ${this.randomDogBreed[0]}...`;

      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + this.randomDogBreed[0] + "/images";
      
      axios_get(url)
        .then((response) => {
          let arr = Object.values(response);
          this.status.randomDog = "";
          this.randomDogImage = shuffle(arr[0].message);
        })
        .then(() => {
          // for vcRandomDog.vue name
          this.randomDogName = extractFileName(this.randomDogImage[0], false);
          this.isRandomDogReady = true;
      });      
    },
    switchBreed: function(breed) {
      router.push({path: "/gallery/" + breed});
    } 
  }
}
</script>