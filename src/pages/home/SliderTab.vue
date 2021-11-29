<template>
	<div class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="tabs-cont">
            	<b-tabs id="myTab" content-class="myTabContent">
				    <b-tab active>
				    	<template v-slot:title>
			        		<i class="fas fa-bed"></i> Hotel
			      		</template>
		                <HotelSearch></HotelSearch>
			      	</b-tab>
			      	<b-tab>
				    	<template v-slot:title>
			        		<i class="fas fa-home"></i> Villas
			      		</template>
			      		<VillaSearch></VillaSearch>
			      		<!--<b-form>
				      		<div class="row">
								<div class="form-group has-search col-lg-12"> 
									<i class="fas fa-map-marker-alt"></i>
									<b-form-input v-model="villaLocation" type="text" placeholder="Country or City"></b-form-input>
								</div>
							</div>
							<div class="row mrgn-cls">
		                      <div class="col-lg-6 datepicker-cls mr-auto">
		                      	<date-picker placeholder="Check In" v-model="dateVillaCheckIn" :disabled-date="notBeforeToday" input-class="gj-textbox-md"></date-picker>
		                      	<date-picker placeholder="Check Out" v-model="dateVillaCheckOut" :disabled-date="notBeforeToday" input-class="gj-textbox-md"></date-picker>
		                      </div>
		                      <div class="col-lg-3"> 
		                      	
		                      	<router-link to="/products/villa" class="search">Search Now</router-link>
		                      </div>
		                    </div>
						</b-form>-->
			      	</b-tab>
			      	<b-tab>
				    	<template v-slot:title>
			        		<i class="fas fa-fighter-jet"></i> Flights
			      		</template>
			      		<FlightSerach></FlightSerach>
			      	</b-tab>
			      	<b-tab>
				    	<template v-slot:title>
			        		<i class="fas fa-car"></i> Cars
			      		</template>
			      		<CarSearch></CarSearch>
			      	</b-tab>
			      	<b-tab>
				    	<template v-slot:title>
			        		<i class="fas fa-gamepad"></i> Activities
			      		</template>
			      		<ActivitySerach></ActivitySerach>
			      	</b-tab>
			  	</b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	import { BTabs } from 'bootstrap-vue'
	import { BFormSelect } from 'bootstrap-vue'
  	import HotelSearch from './HotelSearch'
  	import ActivitySerach from './ActivitySerach'
  	import FlightSerach from './FlightSerach'
  	import CarSearch from './CarSearch'
  	import VillaSearch from './VillaSearch'
  	
	export default {
		components: {
           BTabs,
           BFormSelect,
           HotelSearch,
           ActivitySerach,
           FlightSerach,
           CarSearch,
           VillaSearch
        },
       
		/*computed:{
			hotelRoomOptions(){
		  		return this.hotelRoomSelectOptions.map(g => ({label: g.name, value: g.value}))
			}
		},*/
	}
</script>