<template>
  <div class="blog">
    <div v-if="loading" class="top-loader">
        <circle2></circle2>
    </div>
    <div v-else>
      <div class="blog-section" v-if="blogDetails.id">
          <div class="blog-title" >
              
              <h1 v-if="blogDetails.title">{{ blogDetails.title.rendered }}</h1>
          </div>
          <div class="blog-img">
              <img :src="blogDetails.uagb_featured_image_src.medium_large[0]" />
          </div>
        
          <div v-html="blogDetails.content.rendered"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {Circle2} from 'vue-loading-spinner'

export default {
    name: "BlogDeatils",
    components: {
      Circle2
    },
    computed: {
      ...mapState('blog', ['blogDetails','loading'])
    },
    mounted() {
      this.getBlogDetails(this.$route.params.id);
    },
    methods: {
      ...mapActions('blog', ['getBlogDetails']),
    }
}
</script>

<style lang="scss" scoped="">
.spinner{
    position: absolute !important;
    left: 50% !important;
}
.top-loader .spinner {
    top: 55%;
}

</style>