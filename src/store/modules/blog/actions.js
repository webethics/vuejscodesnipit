import blogService from '@services/blogs.service';

export const actions = {
    getBlogs({commit, state}, filter = {}) {
//console.log('test')
        commit('SET_BLOG_VIEW_MORE_LOADING', true);
        blogService.getAllBlogs(state.page, state.perPage, filter)
        .then((resp) => {
            if(state.perPage > resp.data.length){
                commit('DISABLED_VIEW_MORE_BUTTON')
            }else{
                commit('DISABLED_VIEW_MORE_BUTTON', true)
            }
            commit('SET_BLOGS', resp.data);
            commit('SET_BLOG_LOADING');
            commit('SET_BLOG_VIEW_MORE_LOADING');
        }).catch((error) => {
           // commit('DISABLED_VIEW_MORE_BUTTON')
            console.log(error)
        });
    },
    getBlogDetails({commit}, id) {
        commit('RESET_BLOG_DETAILS');
        commit('SET_BLOG_LOADING', true);
        blogService.getBlogById(id)
        .then((resp) => {
            commit('SET_BLOG_DETAILS', resp.data);
            commit('SET_BLOG_LOADING');
        }).catch((error) => {
            console.log(error)
        })
    }
}