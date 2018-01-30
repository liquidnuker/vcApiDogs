<template>
  <div>
    breed directory

    <div v-for="i in breedDirList">
    {{ i.startsWith }}
      <div v-for="z in i.name">
        {{ z }} 
      </div>
      <br>
        -------------------
      <br>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        breedDirItems: "",
        breedDirChars: "",
        breedDirList: []
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
      extractBreeds: function (chars, items, dirList) {
        // extract breeds from dir chars
        chars.map((i) => {
          let z = this.extractChars(items, i);

          dirList.push({
            name: z,
            startsWith: i,
            length: z.length
          });
        });
      },
      extractChars: function (arr, char) {
        // returns array of items that starts with char
        let extracted = arr.filter(function (el) {
          return el[0].toLowerCase() === char;
        });
        return extracted;
      }
    }
};
</script>