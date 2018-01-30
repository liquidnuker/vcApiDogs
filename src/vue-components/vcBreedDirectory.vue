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
  data () {
    return {   
      breedDirItems: "",
      breedDirChars: "",
      breedDirList: []
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prBreedDirItems"
  ],
  components: {
  },
  mounted: function () {
    this.breedDirItems = this.prBreedDirItems;
    
    this.breedDirChars = this.createDirLetters('a', 'z')
    // console.log(this.breedDirChars);

    this.extractBreeds(this.breedDirChars, this.breedDirItems);
  },
  methods: {   
    createDirLetters: function (charA, charZ) {
      let a = [];
      let i = charA.charCodeAt(0);
      let j = charZ.charCodeAt(0);
      for (; i <= j; i++) {
        a.push(String.fromCharCode(i));
      }
      return a;
    },
    extractBreeds: function(chars, arr) {
      // extract breeds from dir letters
      chars.map((i, index, array) => {
        let z = this.extractLetters(arr, i);
        
        this.breedDirList.push({
          name: z,
          startsWith: i,
          length: z.length
        });
      });

      // console.log(this.breedDirList[2].name); ok
      // console.log(this.breedDirList.length); ok

      console.dir(this.breedDirList);
    },
    extractLetters: function(arr, char) {
      // returns array
      let extracted = arr.filter(function (country) {
        return country[0].toLowerCase() === char;
      });

      return extracted;
    }
  }
}
</script>