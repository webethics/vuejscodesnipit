<template>
  <div>
      <b-form-input  
          v-on:keyup="searchBlog" 
          v-model="search" 
          placeholder="Search"
      ></b-form-input>
  </div>
</template>
<script>

  export default {
    name: 'SearchBox',
    props: {
        searchInput: {
            type: String,
        },
    },
    data() {
      return {
        search: null
        
      }
    },
    methods: {
      searchBlog(event) {
        if([13, 32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
            event.preventDefault();
            return false;
        }
        this.$emit('search', this.search);
      }
    },
  };
  </script>