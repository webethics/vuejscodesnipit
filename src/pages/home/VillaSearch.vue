<template>
	<b-form autocomplete="off">
        <Autocomplete :isAsync="true" @selectedCode="onChangeDestinationCode" mode="villa" placeholder="Country or City" className="has-search col-lg-12" rowClass="row"></Autocomplete>
        
        <div class="row mrgn-cls">
        	<CheckinCheckout :form="form" :submitted="submitted" @modifyDate="modifyGlobalfilter" lg="6" className="datepicker-cls mr-auto"></CheckinCheckout>
			<div class="col-lg-3">
				<div class="select-data data-name">
					<v-select v-model="form.guests" :options="guestOptions" :placeholder="guestPlaceholder" class="filter_dropdown" :clearable="false"></v-select>
				</div>     
			</div>
			
			<div class="col-lg-3"> 
				<b-button type="submit" variant="primary" class="search" @click="onSubmit">{{submitBtnText}}</b-button>
				<!-- <router-link class="search" to="/products/hotel"> Search Now</router-link> -->
			</div>
        </div>
    </b-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Autocomplete from '../../products/partials/Autocomplete'
import CheckinCheckout from '../../products/partials/CheckinCheckout'
import Config from '../../config'
import vSelect from 'vue-select'
import ButtonSpinner from 'vue-button-spinner';
export default {
	components: {
       ButtonSpinner,
       Autocomplete,
	   vSelect,
       CheckinCheckout
    },
    data(){
		return {
	    	form : {
	    		checkin : '',
	    		checkout : '',
	    		location : '',
				guests : 0
	    	},
			guestOptions : [],
	    	guestPlaceholder : 'Guest',
	    	submitted : false,
	    	submitBtnText: 'Search Now',
    	}
    },
    computed: {
        ...mapState({
			loading: state => state.frontVilla.loading,
			comman: state => state.frontVilla.comman
		})
	},
	created(){
		this.setDropDownOptions();
		this.modifyGlobalComman({'destination_code':this.form.location,'locationSearch':''});
	},
	mounted() {
    	//this.selectedDefaultDate();
    },
	methods:{
		...mapActions({
    		getAll: 'frontVilla/getAll',
    		modifyGlobalComman: 'frontVilla/modifyGlobalComman'
    	}),
		modifyGlobalfilter(){

		},
		onChangeDestinationCode(value){
	    	this.form.location = value;
	    },
		setDropDownOptions(){
			for(let i=0;i<=parseInt(Config.TOTAL_ADULT);i++){
				this.guestOptions.push(i)
			}
		},
		onSubmit(evt) {
			evt.preventDefault()
			this.submitted = true;

			//this.form.homeSubmit = true;

			let commanSearch = {'checkin':this.form.checkin,'checkout':this.form.checkout,'adult':2,'child':0,'room':'','id':'','destination_code':this.form.location,'page':1,'min_price':0,'max_price':50000,'accommodation':[],'facilities':[],'currency':'','rating':null,hotel_name:'','homeSubmit':true,'guests':this.form.guests};
			this.getAll(commanSearch)

			this.$router.push({name: 'villa-listing'});

		},
	    selectedDefaultDate(){
	    	if(this.form.checkout == '' && this.form.checkin == ''){
	    		/*Select Default date*/
	    		let checkInDate = new Date();
	    		
	    		checkInDate.setDate(checkInDate.getDate() + 14);
	    		checkInDate.setHours(0, 0, 0, 0);

	    		let checkOutDate = new Date(checkInDate);
	    		checkOutDate.setDate(checkInDate.getDate() + 1);
	    		checkOutDate.setHours(0, 0, 0, 0);

	    		let checkInDateFormatted = this.formatedDate(checkInDate)
	    		let checkOutDateFormatted = this.formatedDate(checkOutDate)

	    		this.form.checkin = checkInDateFormatted;
	    		this.form.checkout = checkOutDateFormatted

	    	}
	    },
	    appendLeadingZeroes(n){
		  if(n <= 9){
		    return "0" + n;
		  }
		  return n
		},
		formatedDate(dateformat){
			return dateformat.getFullYear() + "-" + this.appendLeadingZeroes(dateformat.getMonth() + 1) + "-" + this.appendLeadingZeroes(dateformat.getDate());
		}
	}
}

</script>