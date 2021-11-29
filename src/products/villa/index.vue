<template>
	<div>
		<go-top :size="40"></go-top>
		<MobileInnerBanner :imageUrl="base_url+'images/inner-banner.jpg'"></MobileInnerBanner>
		<HeaderInnerBanner mode="villa" :loading="loading" namespace="villa"></HeaderInnerBanner>
		<!--<Progress></Progress>-->
		<TopFilter :accommodationOption="vcategory" :facilitiesOption="facilities" mode="villa" totalMax=50000 totalMin=0></TopFilter>

		<div class="map-info-section">
			<div class="container-fluid">
				<div v-if="loading">
		            <SpinnerLoading></SpinnerLoading>
		        </div>

		        <div v-if="!loading">
					<Listing :items="villa" mode="villa" :totalPages="totalPages" :loading="loading" noItemText="No Villa Found"></Listing> 
				</div>
			</div>	
		</div>
			
	</div>	
</template>

<script>
	//import Progress from './Progress'
	import MobileInnerBanner from '../partials/MobileInnerBanner'
	import HeaderInnerBanner from '../partials/HeaderInnerBanner'
	import TopFilter from '../partials/TopFilter'
	import Listing from '../partials/Listing'
	import SpinnerLoading from '../../admin/partials/SpinnerLoading'
	import Config from '../../config'
	import { mapState, mapActions } from 'vuex'
	import GoTop from '@inotom/vue-go-top';
	export default {
		components: {
			MobileInnerBanner,
			HeaderInnerBanner,
			TopFilter,
			Listing,
			SpinnerLoading,
			GoTop
		},
		mounted () {
          window.scrollTo(0, 0);
        },
        data:function () {
			return {
				base_url: Config.BASE_URL,
				page:1,
			}
      	},
      	computed: {
			...mapState({
			    villa: state => state.frontVilla.all,
				commanVilla: state => state.frontVilla.comman,
				//page: state => state.frontVilla.comman.page,
				totalPages: state => state.frontVilla.totalPages,
				totalItems: state => state.frontVilla.totalItems,
				loading: state => state.frontVilla.loading,
				vcategory: state => JSON.parse(JSON.stringify(state.settings.vcategory)),
				facilities: state => JSON.parse(JSON.stringify(state.settings.vfacilities))
			}),
			comman: {
			    get() {
			      	return this.commanVilla;
			  	},
			  	set(val){
			  		this.getAll(val);
					return val;
				}
			}
		},
		created () {
	    	this.clearAlert();
	    	/*Check if accomodation and facilities Object empty then hit api else fetch from state*/
	    	if(Object.keys(this.vcategory).length == 0 || Object.keys(this.facilities).length == 0){
	    		this.getVillaDropDownList();
	    	}
	    	
	    	setTimeout(() => {
	    		/*Check if home submitted form*/
	    		if(!this.commanVilla.homeSubmit)
	    			this.comman = {'checkin':'','checkout':'','id':'','destination_code':'','page':1,'min_price':0,'max_price':50000,'category':[],'facilities':[],'currency':'USD','rating':null,'hotel_name':'','locationSearch' : '','homeSubmit':false,'bedroom':'','bathroom':'','bed':''};
               	//this.comman.currentpage = this.page;
               	else
               		this.modifyGlobalComman({'homeSubmit':false});
            },500)
	    	
	    },
		mounted () {
	    	window.scrollTo(0, 0);
	    },
	    methods: {
        	...mapActions({
        		getAll: 'frontVilla/getAll',
        		clearAlert: 'alert/clear',
        		getVillaDropDownList: 'settings/getVillaDropDownList',
        		modifyGlobalComman:'frontVilla/modifyGlobalComman'
        	})
        },
		watch: {
	        $route (to, from){
	            // clear alert on location change
	            this.clearAlert();
	        },
	    }
	}
</script>