<template>
<div>
  <!-- prev/next dirList -->
  <span class="pg_holder">
    <button class="btn btn1-01 btn_prev" tabindex="0"
    @click="flip()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    Prev</button>
    <button class="btn btn1-01 btn_prev" tabindex="0"
    @click="flip('next')">Next
    <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg></button>
  </span>
  <!-- /prev/next dirList -->
  <!-- page group selector -->
  <span class="pg_holder" v-for="(i, index) in breedDogNames">
    <button class="btn btn1-01 btn_prev" 
    @click="showPage(index + 1)">Dogs {{ i.start }} - {{ i.end }}</button>
  </span>
  <!-- /page group selector -->
  <p class="breed_dir_title font_heading1">Breed directory</p>
  <div class="row">
    <div v-for="i in pagerBreedList" class="col-sm-3 bd_grid">

    <!-- for hiding empty sets.
    <div v-for="i in pagerBreedList" 
    class="col-sm-3 bd_grid" v-if="i.length > 0"> -->
      <div class="bd_grid_items lrbg2">
        <!-- {{ i.length }}
        {{ i.startsWith }} -->
        <template v-for="(z, index) in i.name">
        <a class="font_heading1" v-if="index === 0" 
        @click="jumpToGallery(z)">{{ z }}</a>
        <!-- with separator -->
        <a :title="z" v-else-if="index > 0 && index < i.name.length-1" 
        @click="jumpToGallery(z)">
        {{ z }},</a>
        <!-- last item -->
        <a :title="z" v-else @click="jumpToGallery(z)">{{ z }}</a>
        </template>
        

        <img class="dog_shadow" :src="'./src/img/ui/dogs/dirlist_' + i.startsWith + '.png'" />
        <img class="dog_preview" :src="'./src/img/ui/dogs/dirlist_' + i.startsWith + '.png'" />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Pager from "../js/pager.js";
import {router} from "../js/router.js";
export default {
  data() {
      return {
        breedDirItems: "",
        breedDirChars: "",
        breedDirList: [],

        breedDogNames: [],

        // paginator
        pager: "",
        currentPage: "",
        pagerButtons: null,
        pagerBreedList: [],
        perPage: 8,
      };
    },
    watch: {
      // : function () {
      // }
    },
    props: [
      "prBreedDirItems"
    ],
    components: {},
    mounted: function () {
      this.breedDirItems = this.prBreedDirItems;
      this.breedDirChars = this.createDirChars("a", "z");
      this.extractBreeds(this.breedDirChars, this.breedDirItems, this.breedDirList);
    },
    methods: {
      createDirChars: function (charA, charZ) {
        let a = [];
        let i = charA.charCodeAt(0);
        let j = charZ.charCodeAt(0);
        for (; i <= j; i++) {
          a.push(String.fromCharCode(i));
        }
        return a;
      },
      extractChars: function (arr, char) {
        // returns array of items that starts with char
        let extracted = arr.filter(function (el) {
          return el[0].toLowerCase() === char;
        });
        return extracted;
      },
      extractBreeds: function (chars, items, dirList) {
        // extract breeds from dir chars
        chars.forEach((i) => {
          let z = this.extractChars(items, i);

          // don't push empty sets
          if (z.length > 0) {
            dirList.push({
              name: z,
              startsWith: i,
              length: z.length
            });
          }
        });
        this.breedDirList = dirList;
        this.paginateBreedList(this.breedDirList);
      },
      paginateBreedList: function (data) {
        this.pager = null;

        this.pager = new Pager({
          perPage: this.perPage,
          data: data
        });

        this.showPage(1);
        this.pagerButtons = true;

        this.setBreedNameButtons();
      },
      setBreedNameButtons: function () {
        let temp2 = [];
        for (let i = 0, l = this.pager.getTotalPages() + 1; i < l; i++) {
          temp2.push(this.pager.page(i));
        }

        temp2.forEach((i, index) => {
          let startName = i[0].name;
          let lastIndex = i.length - 1;
          let lastName = i[lastIndex].name;
          // console.log(startName[0].charAt(0) + " " + lastName[0].charAt(0));

          if (index > 0) { // to remove duplicate entries
            this.breedDogNames.push({
              start: startName[0].charAt(0).toUpperCase(),
              end: lastName[0].charAt(0).toUpperCase(),
            });
          }
        });
        temp2 = null;
      },
      flip: function(direction) {
        if (direction === "next") {
          this.showPage(this.pager.next());
        } else {
          this.showPage(this.pager.prev());
        }
      },
      showPage: function (num) {
        this.currentPage = num;
        this.pagerBreedList = this.pager.page(this.currentPage);
      },
      jumpToGallery: function (breedName) {
        router.push({
          path: "/gallery/" + breedName
        });
      }
    }
};
</script>