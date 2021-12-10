import api from './api'
import axios from 'axios'

const endpoint = '/posts';
let cancelToken = null;

const blogService = {
    getAllBlogs(page, perPage, filter) {
    
        if (cancelToken) {
            cancelToken.cancel()
        } 
  
        //Save the cancel token for the current request

        cancelToken = axios.CancelToken.source();

        let filterUrl = `?per_page=${perPage}&page=${page}`;

        if (filter.search) {
            filterUrl += `&search=${ filter.search }`;
        }
        if (filter.order) {
            filterUrl += `&order=${ filter.order }`;
        }

        filterUrl += '&_embed';

        return api().get(`${endpoint}${filterUrl}`, {
            cancelToken: cancelToken.token  //Pass the cancel token to the current request
        });
      
    },
    getBlogById(id) {
        return api().get(`${endpoint}/${id}`);
    }
};

export default blogService;