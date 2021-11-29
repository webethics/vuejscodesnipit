<template>
	<div>
		<div v-if="villaLoading">
            <SpinnerLoading></SpinnerLoading>
        </div>

		<div v-if="!villaLoading">
			<ThumbnailSlider mode="villa" :info="currentVilla" :hotelId="villaId"></ThumbnailSlider>
			<VillaDetailMiddleSection mode="villa" :info="currentVilla" :hotelId="villaId"></VillaDetailMiddleSection>
		</div>
	</div>
	
</template>

<script>
import VillaDetailMiddleSection from './VillaDetailMiddleSection'
import ThumbnailSlider from '../partials/ThumbnailSlider'
import SpinnerLoading from '../../admin/partials/SpinnerLoading'
import { mapState, mapActions } from 'vuex'
export default {
	props:['villaId'],
	components : {
		VillaDetailMiddleSection,
		ThumbnailSlider,
		SpinnerLoading
	},
	computed: {
    	...mapState({
            currentVilla: state => state.frontVilla.currentVilla,
            villaLoading: state => state.frontVilla.loading,
            villaForm: state => state.frontVilla.comman
        })
    },
    created: function(){
    	this.villaForm.id = this.villaId;
    	this.fetchVilla(this.villaForm)
    },
    mounted () {
      window.scrollTo(0, 0);
    },
    methods:{
    	...mapActions({
            clearAlert: 'alert/clear',
            fetchVilla : 'frontVilla/fetchVilla',
        }),
    }
}
</script>