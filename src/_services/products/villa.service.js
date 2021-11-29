import Config from '../../config'
import { requestOptions, handleResponse , headerOptions} from '../../_helpers';
import axios from 'axios'

export const API_URL = Config.API_URL;

export const villaService = {
    getfeaturedVilla,
    getAll,
    fetchVillaById,
    getDestinationSearch,
    bookDetail,
    bookNow,
};

/*Get Feature Villa*/
function getfeaturedVilla(){
     return axios.get(API_URL+'api/featured-villa')
            .then(response => {
            return response.data.villas;
        }).catch(handleResponse);
}

/*Get All Hotel Request with filter*/
function getAll(searchForm) {
    let getallUrl = API_URL+'api/villa-listing';
    return fetch(getallUrl, requestOptions.post(searchForm))
    .then(handleResponse)
    .then(response => {
            return response.villas;
        });
    /*console.log('GetAll')
    console.log(searchForm);
    return axios.get(API_URL+'api/villa-listing',searchForm).then(response => {
            return response.data.villas;
        }).catch(handleResponse);*/
}

/*Fetch Hotel by id*/
function fetchVillaById(form){
	return fetch(API_URL+'api/villa-details', requestOptions.post(form))
    .then(handleResponse)
    .then(response => {
        return response;
    });
}

