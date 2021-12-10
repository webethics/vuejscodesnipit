export const mutations = {
    SET_BLOGS(state, data = []) {
        state.blogs.push(...data);
    },
    SET_BLOG_DETAILS(state, data) {
        state.blogDetails = data;
    },
    RESET_BLOG_DETAILS(state){
        state.blogDetails = [];
    },
    SET_CURRENT_PAGE(state){
        state.page += 1 ;
    },
    RESET_BLOGS(state) {
        state.blogs = [];
        state.loading = true;
        state.page = 1;
    },
    SET_BLOG_LOADING(state, value = false) {
        state.loading = value;
    },
    SET_BLOG_VIEW_MORE_LOADING(state, value = false) {
        state.viewMoreLoading = value;
    },
    DISABLED_VIEW_MORE_BUTTON(state, value = false){
        state.viewMoreButton = value;
    },
    RESET_PER_PAGE(state, value = 10) {
        state.perPage = value;
    },
}