<template>
    <div>
        <div class="top-heading">
        <h2> All Blogs:</h2>
        <b-row :key="filterBoxKey">
            <b-col md="6">
                <search-box 
                    @search="searchBlogs"
                />
            </b-col>
            <b-col md="2">
                <per-page-dropdown
                    @setPerPage="getByPerPage"
                />
            </b-col>
            <b-col md="2">
                <sorting-dropdown
                    @setOrder="getByOrder"
                />
            </b-col>
            <b-col md="2">
                <b-button variant="light" class="w-100" 
                    @click.prevent="resetFilter"
                >Reset</b-button>
            </b-col>
        </b-row>
        <div v-if="loading" class="top-loader">
            <!-- <circle2></circle2> -->
            <b-col cols="12" class="mt-3">
                <b-skeleton-img primary no-aspect height="150px"></b-skeleton-img>
            </b-col>
        </div>
        <div v-else>
            <div class="heading"  v-if="blogs.length">
                <div class="blog-section" v-for="(blog,key) in blogs" :key="key">
                    <b-card no-body>
                        <b-card-body>
                            <b-link 
                                :to="{ name: 'BlogDetails', params: { id: blog.id} }" 
                                class="title-link"
                            >
                                <h4>{{ blog.title.rendered }}</h4>  
                            </b-link>
                            <small class="text-muted">
                                <b>  Posted: </b>
                                {{ moment(blog.date).fromNow()}}
                            </small>
                            <b-card-text v-html="blog.excerpt.rendered">
                            </b-card-text>
                        </b-card-body>
                    </b-card> 
                </div>
                <div v-if="viewMoreLoading">
                    <div class="custom-circle">
                    <circle2></circle2>
                    </div>
                </div>
                <div v-else>
                    <div v-if="viewMoreButton">
                        <div class="text-center view-more" align-v="center">
                            <b-button pill variant="primary" 
                                @click.prevent="loadMore"
                            >Load More</b-button>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else>
                 <p class="text-center record-not-found">No Record Found..</p>
             </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { Circle2 } from 'vue-loading-spinner'
import SearchBox from '@components/SearchInputBox.vue'
import PerPageDropdown from '@components/PerPageDropdown.vue'
import SortingDropdown from '@components/SortingDropdown.vue'

export default {
    name: 'Blog',
    components: {
        Circle2,
        SearchBox,
        PerPageDropdown,
        SortingDropdown,
    },
    data() {
        return {
            moment: require('moment'),
            filter: {
                search: null,
                order: 'desc',
            },
            filterBoxKey: 1,
        }
    },
    computed: {
        ...mapState('blog', [
            'blogs', 
            'page',
            'loading', 
            'viewMoreLoading',
            'viewMoreButton'
        ])
    },
    mounted() {
        this.resetBlogs();
        this.getBlogs();
    },
    methods: {
        ...mapActions('blog', ['getBlogs']),
        ...mapMutations('blog', {
            setCurrentPage: 'SET_CURRENT_PAGE',
            resetBlogs: 'RESET_BLOGS',
            resetPerPage: 'RESET_PER_PAGE' 
        }),
        loadMore() {
            this.setCurrentPage();
            this.getBlogs(this.filter)
        },
        searchBlogs(search) {
            this.filter.search = search;
            this.resetBlogs();
            this.getBlogs(this.filter);
        },
        getByPerPage(value) {
            this.resetPerPage(value);
            this.resetBlogs();
            this.getBlogs(this.filter);
        },
        getByOrder(order) {
            this.filter.order = order;
            this.resetBlogs();
            this.getBlogs(this.filter);
        },
        resetFilter() {
            this.resetPerPage();
            this.filterBoxKey++;
            this.resetBlogs();
            this.getBlogs();
        }
    }
}
</script>

<style lang="scss" scoped="">
.top-heading {
    margin-top: 20px;
    text-align: left;
}
.blog-section {
    margin-top: 1%;
    margin-bottom: 1%;
}
.text-muted {
    color: #888 !important;
}
.spinner{
    position: absolute !important;
    left: 50% !important;
}
.top-loader .spinner {
    top: 55%;
}
.custom-circle .spinner {
    position: static !important;
    margin: auto;
}
.title-link {
    text-decoration: none;
}
.record-not-found {
    margin-top: 25px;
    font-weight: bold;
}
.view-more {
    margin-bottom: 20px;
    margin-top: 20px;
}
.b-skeleton {
    background-color: rgb(161, 198, 254) !important;
}
</style>
