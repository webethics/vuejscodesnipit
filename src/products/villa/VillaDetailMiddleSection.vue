<template>
	<div class="detail-middle-ssection" v-if="info">
	  <div class="container">
	    <div class="row">
	     	<div class="col-lg-8">
	        	<div class="detail-left-section">
	        		<Breadcrumb :mode="mode" :info="breadcrubsInfo" :modeText="modeText"></Breadcrumb>
	          	
		          	<div class="description-cont">
			            <div class="descrip-box">
			              <h1> {{info.name}} </h1>
			              <h4> {{info.address}} </h4>
			            </div>
		            	<hr>
			            <div class="descrip-box pb-3 home-icon">
			              <h3>Description </h3>
							<ul>
								<li v-if="info.category"> <i class="fas fa-hotel"></i> {{info.category}} </li>
								<li> <i class="fas fa-user-friends"></i> Guests</li>
								<li v-if="info.bedrooms"> <i class="fas fa-door-open"></i> {{info.bedrooms}} Bedroom</li>
								<li v-if="info.beds"> <i class="fas fa-bed"></i> {{info.beds}} Bed</li>
								<li v-if="info.bathrooms"> <i class="fas fa-shower"></i> {{info.bathrooms}} Bathroom</li>
							</ul>
							<p v-html="info.note"> </p>
			            </div>
			            
		            	<hr>
		            	<div class="descrip-box pb-3">
							<h3>Other Details </h3>
							<div class="table-responsive">
								<table class="table">
									<thead class="">
										<tr>
										  <th scope="col" v-if="info.checkinTime">Check In</th>
										  <th scope="col" v-if="info.checkoutTime">Check Out</th>
										  <th scope="col" v-if="info.minNight">Minimum Stay</th>
										  <th scope="col" v-if="info.maxNight">Maximum Stay</th>
										  <th scope="col" v-if="info.maxGuest">Maximum Guest</th>
										</tr>
									</thead>
									<tbody>
										<tr>
										  <td v-if="info.checkinTime">{{info.checkinTime}}</td>
										  <td v-if="info.checkoutTime">{{info.checkoutTime}}</td>
										  <td v-if="info.minNight">{{info.minNight}} nights</td>
										  <td v-if="info.maxNight">{{info.maxNight}} nights</td>
										  <td v-if="info.maxGuest">{{info.maxGuest}} person</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

			            <div class="descrip-box help pb-3" v-if="info.facility">
			              	<h3>Amenities </h3>
			              	
								<ul>
									<li v-for="(facility,index) in info.facility" :key="index">
										<i :class="facility.icons"></i> {{facility.name}}
									</li>
								</ul>
			              	
				        </div>

				        <div class="descrip-box pb-3" v-if="info.productCondition && info.productCondition.length > 0">
							<h3> Additional Service Fee </h3>
							<div class="table-responsive">
							<table class="table">
							  <tbody>
							    <tr v-for="(condition,index) in info.productCondition" :key="'condition_'+index">
							      <th scope="row" class="ctm-th">{{condition.name}}</th>
							      <td> {{condition.currency}} {{condition.amount}} </td>
							    </tr>
							  </tbody>
							</table>
							</div>
			            </div>
			            <div class="descrip-box pb-3" v-if="info.rules">
							<h3> House Rules </h3>
							<div class="rules-box" v-if="info.rules.GENERAL_RULE && info.rules.GENERAL_RULE.length > 0">
								<h5> General rules </h5>
								<ul>
								  <li v-for="(item,index) in info.rules.GENERAL_RULE" :key="'general_'+index"> 
								  	<i class="fas fa-check"></i> {{item}} </li>
								</ul>
							</div>
							<div class="rules-box" v-if="info.rules.HOST_RULE && info.rules.HOST_RULE.length > 0">
								<h5> From your host</h5>
								<p v-for="(item,index) in info.rules.HOST_RULE[0].split('\n-')" :key="'host_'+index"> <i class="fas fa-check"></i> {{item}} </p>
							</div>
							<div class="rules-box" v-if="info.rules.OPTIONAL_RULE && info.rules.OPTIONAL_RULE.length > 0">
								<h5> Details guests must know </h5>
								<ul>
									<li v-for="(item,index) in info.rules.OPTIONAL_RULE" :key="'optional_'+index"> <i class="fas fa-check"></i> {{item}} </li>
								</ul>
							</div>
			            </div>

			            <div class="descrip-box pb-3" v-if="info.cancellationPolicy">
							<div class="clp-box">
								<h5> Cancellation Policy </h5>
								<p> {{info.cancellationPolicy}} </p>
							</div>
			            </div>
							
			        </div>

	          	</div>
	        </div>
			<div class="col-lg-4">
			<div class="side-bar">
			  <SearchBookingForm :mode="mode" :detail="info" :hotelId="hotelId"></SearchBookingForm>

			  <div class="side-map" v-show="items.length > 0">
				<h3> Location </h3>
					<Map :items="items"></Map>
			  </div>
			  </div>
			</div>
	    </div>
	  </div>

	  
	</div>
	
</template>

<script>
import Map from '../partials/Map'
import CarouselSlider from '../partials/CarouselSlider'
import SearchBookingForm from './SearchBookingForm'
import SpinnerLoading from '../../admin/partials/SpinnerLoading'
import Breadcrumb from '../partials//Breadcrumb'
import { mapState,mapActions } from 'vuex'
export default {
	name:'VillaDetailMiddleSection',
	props: ['mode','info','hotelId'],
	components: {
		Map,
		CarouselSlider,
		SearchBookingForm,
		SpinnerLoading,
		Breadcrumb
	},
	data(){
		return {
			roomInfo : '',
			roomIndex : null,
			modeText : 'Villa',
			breadcrubsInfo : {},
			bookNowIndex : '',
			bookNowRequest : {}
		}
	},
	created () {
		window.scrollTo(0, 0);
		this.breadcrubsInfo.country = this.info.country
		this.breadcrubsInfo.city = this.info.city
      	this.breadcrubsInfo.name = this.info.name

    },
	computed: {
		...mapState({
			searchHotelLoading: state => state.hotels.searchLoading,
			serachActivityLoading: state => state.activities.searchLoading,
			destinationHotel: state => state.hotels.destination_name,
			destinationActivity: state => state.activities.destination_name,
			bookingInfo: state => state.hotels.bookingInfo,
			bookingInfoActivity: state => state.activities.bookingInfo,
			destinationVilla: state => state.frontVilla.destination_name

		}),
		searchLoading:{
			get(){
				let searchLoad;
				if(this.mode == 'hotel')
					searchLoad = this.searchHotelLoading
				else if(this.mode == 'activities')
					searchLoad = this.serachActivityLoading

				return searchLoad
			},
		},
		// a computed getter
		items: function () {
		  	let item = [];
			if(typeof this.info != 'undefined' && this.info != null){
				let obj = {'latitude':parseFloat(this.info.latitude),'longitude':this.info.longitude,'name':this.info.name};
				item.push(obj);
			}
			return item;
		}
	},
	methods:{
		...mapActions({
    		bookDetail: 'hotels/bookDetail',
    		bookDetailActivity: 'activities/bookDetail',
    	}),
		modifyModelContent: function(room,roomIndex){
			if(this.roomIndex != roomIndex){
				this.roomIndex = roomIndex;
				this.roomInfo = room;
				this.$refs['modal-room-info'].show()
			}
		},
		bookNowHotel:function(room,roomIndex){
			this.bookNowIndex = roomIndex;
			this.bookNowRequest.id = this.hotelId;
			this.bookNowRequest.roomCode = room.roomCode;
			this.bookNowRequest.boardCode = room.rate.boardCode;
			this.bookNowRequest.adult = this.info.adult
			this.bookNowRequest.child = this.info.child
			this.bookNowRequest.room = this.info.rooms;
			this.bookNowRequest.checkin = this.info.checkin;
			this.bookNowRequest.checkout = this.info.checkout;

			this.bookDetail(this.bookNowRequest);
			//this.$router.push({name: 'hotel-book'});
		},
		bookNowActivity:function(activty,activiIndex){
			this.bookNowIndex = activiIndex;
			this.bookNowRequest.id = this.info.code;
			this.bookNowRequest.itemCode = activty.itemCode;
			this.bookNowRequest.adult = this.info.adult
			this.bookNowRequest.child = this.info.child
			this.bookNowRequest.checkin = this.info.checkin;
			this.bookNowRequest.checkout = this.info.checkout;

			this.bookDetailActivity(this.bookNowRequest);

		},
		reverseDateFormat:function(dateStr){
			return dateStr.split("-").reverse().join("/")
		},
		fetchAmountPax:function(activityArray,pax){
			//let matchArray = activityArray.filter(arry => arry.paxType == pax)
			let amt = 0;
			activityArray.forEach(function(arry){
				if(arry.paxType == pax)
					amt = arry.amount
			})

			amt = parseInt(amt) > 0 ? amt+ ' '+this.info.currency : '-'

			return amt;
		}
	},
	watch:{
		bookingInfo: function(){
			/*Check if obj not empty*/
			if(Object.keys(this.bookingInfo).length > 0){
				this.$router.push({name: 'hotel-book'});
			}
		},
		bookingInfoActivity: function(){
			/*Check if obj not empty*/
			if(Object.keys(this.bookingInfoActivity).length > 0){
				this.$router.push({name: 'activity-book'});
			}
		}
	}
}
</script>