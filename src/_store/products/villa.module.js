import { villaService } from '../../_services';

const state = {
    loading : false,
    searchLoading : false,
    loadMoreLoading : false,
    loadFeatured : false,
    featuredVilla : [],
    all: [],
    error : {},
    currentVilla : {},
    comman: {'checkin':'','checkout':'','id':'','destination_code':'','page':1,'min_price':0,'max_price':50000,'category':[],'facilities':[],'currency':'USD','rating':null,'hotel_name':'','locationSearch' : '','homeSubmit':false,'bedroom':'','bathroom':'','bed':''},
    destination_name : {'city':'','country':''},
    totalPages:null,
    totalItems:0,
    searchDestination: [],
    loadingDestination: false,
    bookingInfo : {},
    bookingRequest : '',
    lastBookNowLoading:false
}

const actions = {
    modifyGlobalComman({commit},searchForm){
        commit('modifyCommanRequest',searchForm);
    },
    getfeaturedVilla({commit}){
        commit('getfeaturedVillaRequest');

        villaService.getfeaturedVilla()
            .then(
                response => commit('getfeaturedVillaSuccess',response),
                error => commit('getfeaturedVillaFailure',error)
            );
    },
    getAll({ dispatch,commit },searchForm) {
    	commit('getAllRequest',searchForm);
        
        villaService.getAll(searchForm)
            .then(
                response => {
                    if(searchForm.currentpage == 1){
                        /*Clear other state data*/
                        dispatch('flights/clear','',{ root: true });
                        dispatch('activities/clear','',{ root: true });
                        dispatch('cars/clear','',{ root: true });
                    }
                    commit('getAllSuccess', response)
                },
                error => commit('getFailure', error)
            );
    },
    fetchVilla({commit},hotelForm){
        commit('fetchVillaRequest',hotelForm);

        villaService.fetchVillaById(hotelForm)
            .then(
                response => commit('fetchVillaSuccess',response),
                error => commit('fetchVillaFailure',error)
            );
    },
    getDestinationSearch({commit},keyword){
        commit('getDestinationSearchRequest');

        villaService.getDestinationSearch(keyword)
            .then(
                response => commit('getDestinationSearchSuccess',response),
                error => commit('getDestinationSearchFailure',error)
            );
    },
    clear({ commit }) {
        commit('clear');
    }
};

const mutations = {
    clear(state){
        state.all = [];
        state.comman = {'checkin':'','checkout':'','id':'','destination_code':'','page':1,'min_price':0,'max_price':50000,'category':[],'facilities':[],'currency':'USD','rating':null,'hotel_name':'','locationSearch' : '','homeSubmit':false,'bedroom':'','bathroom':'','bed':''};
    },
    modifyCommanRequest(state,searchForm){
        //state.comman = searchForm
        if(Object.keys(searchForm).length > 0){
            /*state.comman = {...state.comman,searchForm}*/
            for(var key in searchForm){
                state.comman = {...state.comman,[key]:searchForm[key]};
            }
        }
    },
    getAllRequest(state,searchForm) {
       //state.comman = searchForm
       if(Object.keys(searchForm).length > 0){
            /*state.comman = {...state.comman,searchForm}*/
            for(var key in searchForm){
                state.comman = {...state.comman,[key]:searchForm[key]};
            }
        }
        if(searchForm.page == 1){
            state.loading = true;
            state.all = [];
        }else{
            state.loadMoreLoading = true;
        }
        state.paymentFormData = {};
    },
    getAllSuccess(state, response) {
    	state.loading = false;
        /*response.forEach(function(item){
            state.all.push(item);
        })*/
        response.villa.list.forEach(function(item){
            state.all.push(item);
        })
        state.destination_name.city = response.city;
        state.destination_name.country = response.country;
        state.comman.locationSearch = response.locationSearch;
        state.comman.destination_code = response.destination_code;
        state.comman.checkin = response.checkin;
        state.comman.checkout = response.checkout;
        state.comman.min_price = response.min;
        state.comman.max_price = response.max;
        state.comman.bedroom = response.bedroom;
        state.comman.bathroom = response.bathroom;
        state.comman.bed = response.bed;
        state.comman.facilities = response.facilities;
        state.comman.category = response.category;
        if(typeof response.villa.totalPage != 'undefined' && response.villa.totalPage != null && response.villa.totalPage != ''){
            state.totalPages=  response.villa.totalPage;
            state.totalItems = response.villa.totalSize;
        }else{
            state.totalPages=  1;
            state.totalItems = 1;
        }
        
        //state.comman.currency = response.currency;
        state.comman.rating = response.rating;
        state.loadMoreLoading = false;

    },
    getFailure(state, error) {
        state.loading = false;
        state.loadMoreLoading = false;
        state.error = error ;

        setTimeout(() => {
            state.error = '';
        },5000);
    },
    fetchVillaRequest(state,form){
        if(typeof form.submit != 'undefined' && form.submit != null)
            state.searchLoading = true
        else
            state.loading = true;

        state.paymentFormData = {};
    },
    fetchVillaSuccess(state, response) {
        state.loading = false;
        state.searchLoading = false
        state.currentVilla = response.details;

        state.destination_name.city = response.details.city;
        state.destination_name.country = response.details.country;
    },
    fetchVillaFailure(state, error) {
        state.loading = false;
        state.searchLoading = false
        state.error = error ;

        setTimeout(() => {
            state.error = '';
        },5000);
    },
    getDestinationSearchRequest(state){
        state.loadingDestination = true;
        state.paymentFormData = {};
    },
    getDestinationSearchSuccess(state,response){
        state.loadingDestination = false;
        state.searchDestination = response.destinations
    },
    getDestinationSearchFailure(state,error){
        state.loadingDestination = false;
        state.error = error

        setTimeout(() => {
            state.error = '';
        },5000);
    },
    getfeaturedVillaRequest(state){
        state.loadFeatured = true;
        state.paymentFormData = {};
    },
    getfeaturedVillaSuccess(state,response){
        state.loadFeatured = false;
        state.featuredVilla = response
    },
    getfeaturedVillaFailure(state,error){
        state.loadFeatured = false;
        state.error = error

        setTimeout(() => {
            state.error = '';
        },5000);
    },



}

export const frontVilla = {
    namespaced: true,
    state,
    actions,
    mutations
};