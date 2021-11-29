<template>
  <div>
    <div class="mobile-banner"> <img class="img-fluid" :src="base_url+'images/home-banner.jpg'"> </div>
    <SliderTab></SliderTab>
    
    <Gallery heading="Top Destinations" v-bind:destinations="destinations" mode='hotel'></Gallery>
    
    <div class="bottom-banner-cont gallery-cont">
      <div class="container-fluid">
        <div class="row">
          <div class="btm-img-cont"> <img class="img-fluid rounded" :src="base_url+'images/bottom-banner.jpg'">
            <div class="btm-txt">
              <h1> Popular World Scene </h1>
              <router-link to="/products/villa/">Explore More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Gallery heading="Top Villas" v-bind:destinations="villas" mode='villa' :loading="loadFeatured"></Gallery>
    <Gallery heading="Top Activities" v-bind:destinations="activites" mode='activities' :loading="loadFeaturedActivity"></Gallery>

    <div class="listproperty_sec">
      <div class="container">
        <div class="listproperty_content">
          <h3>Open your door to Rental income. List your property on Findingdirect
          </h3>
          <router-link to="/list-your-property"> {{global.front_page.list_your_property}} </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Config from '../../config'
import Gallery from './Gallery'
import SliderTab from './SliderTab'
import { mapState, mapActions } from 'vuex'
   export default {
        components: {
            Gallery,
            SliderTab
        },
        mounted () {
          window.scrollTo(0, 0);
        },
        created(){
          this.getfeaturedVilla();
          let activitiesObj = {'checkin':'','checkout':'','adult':'','child':'','keywords':'','id':'','destination_code':'','page':1,'locationSearch' : '','fsegments':[],'homeSubmit':false}
          this.getAllActivity();
        },
        data:function () {
          return {
                base_url: Config.BASE_URL,
                global: trans.global,
                destinations : [
                    {'name' : 'Bangkok','image':'images/img2.jpg','description' : 'Bangkok is a huge and modern city humming with nightlife and great aromas. Visitors will find the conceptual division below of the main areas more useful for getting around. All of Thailand\'s major festivals are celebrated in Bangkok.','destination_code':'BKK'},
                    {'name' : 'Phuket','image':'images/img3.jpg','description' : 'Phuket Province is located in Southern Thailand. It is the biggest island of Thailand and sits on the Andaman Sea. Being a big island, Phuket is surrounded by many magnificent beaches such as Rawai, Patong, Karon, Kamala, Kata Yai, Kata Noi, and Mai Khao. Laem Phromthep Viewpoint is said to feature the most beautiful sunsets in Thailand.','destination_code':'HKT'},
                    {'name' : 'Singapore','image':'images/img4.jpg','description' : 'Combining the skyscrapers and subways of a modern, affluent city with a medley of Chinese, Malay and Indian influences along with a tropical climate, tasty food from hawker centres, copious shopping malls, and vibrant night-life scene, this Garden City makes a great stopover or springboard into the region.','destination_code':'SIN'},
                    {'name' : 'London','image':'images/london-img2.jpg','description' : 'London is considered to be one of the world\'s most important global cities and has been called the world\'s most powerful,most desirable,most influential,most visited,most expensive,innovative,sustainable,most investment-friendly,and most-popular-for-work city','destination_code':'LON'},
                    {'name' : 'Paris','image':'images/parisimg2.jpg','description' : 'The city is a major railway, highway and air-transport hub served by two international airports: Paris-Charles de Gaulle (the second busiest airport in Europe) and Paris-Orly.','destination_code':'PAR'}
                ],
                /*villas : [
                    {'name':'Hidden Pool Villa','image':'images/img6.jpg','price':'$300','features':['Type: Villa','Minimum 2 nights','Maximum Guest: 7 Persons']},
                    {'name':'Champagne pool villa','image':'images/img7.jpg','price':'$200','features':['Type: Villa','Minimum 2 nights','Maximum Guest: 7 Persons']},
                    {'name':'Hidden Pool Villa','image':'images/img8.jpg','price':'$250','features':['Type: Villa','Minimum 2 nights','Maximum Guest: 7 Persons']},
                    {'name':'Champagne Pool villa','image':'images/img8.jpg','price':'$350','features':['Type: Villa','Minimum 2 nights','Maximum Guest: 7 Persons']}
                ],*/
                /*activites : [
                    {'name':'Airport Fast Track + Transfer','image':'images/img10.jpg','price':'$300','features':['Type: Activity','1 Day','Now - 31 April 2019']},
                    {'name':'Champagne pool villa','image':'images/img11.jpg','price':'$200','features':['Type: Activity','1 Day','Now - 31 April 2019']},
                    {'name':'Hidden Pool Villa','image':'images/img12.jpg','price':'$250','features':['Type: Activity','1 Day','Now - 31 April 2019']},
                    {'name':'Champagne pool villa','image':'images/img13.jpg','price':'$350','features':['Type: Activity','1 Day','Now - 31 April 2019']}
                ],*/
            }
        },
        computed: {
          ...mapState({
            loadFeatured: state => state.frontVilla.loadFeatured,
            featuredVilla: state => state.frontVilla.featuredVilla,
            activities: state => state.activities.featuredActivity,
            loadFeaturedActivity: state => state.activities.loadFeatured,
          }),
          villas:{
            get(){
              let calVillas = []
              if(this.featuredVilla != null && this.featuredVilla.length > 0){
                this.featuredVilla.forEach(function(item,index){
                  /*Check If calVilla index not grether than 4*/
                  if(index < 4){
                    calVillas[index] = [];
                    calVillas[index]['id'] = item.id;
                    calVillas[index]['name'] = item.name
                    if(typeof item.image != 'undefined' && item.image.length > 0)
                      calVillas[index]['image'] = item.image[0]
                    else
                      calVillas[index]['image'] = ''

                    calVillas[index]['price'] = item.amount
                    calVillas[index]['currency'] = item.currency
                    calVillas[index]['features'] = [];
                    calVillas[index]['features'].push('Type: Villa');

                    if(item.minNight)
                      calVillas[index]['features'].push('Minimum '+item.minNight+' nights')

                    if(item.maxGuest)
                      calVillas[index]['features'].push('Maximum Guest: '+item.maxGuest+' Persons')
                    else if(item.maxNight)
                      calVillas[index]['features'].push('Maximum : '+item.maxNight+' nights')

                  }
                    
                });
              }
              return calVillas;
            }
          },
          activites:{
            get(){
              let calActivity = [];
              if(this.activities != null && this.activities.length > 0){
                this.activities.forEach(function(item,index){
                  /*Check If calVilla index not grether than 4*/
                  if(index < 4){
                    calActivity[index] = [];
                    calActivity[index]['id'] = item.code;
                    calActivity[index]['name'] = item.title
                    if(typeof item.image)
                      calActivity[index]['image'] = item.image
                    else
                      calActivity[index]['image'] = ''

                    let adultPrice = 0

                    if(item.paxAmount && item.paxAmount.length > 0){
                      item.paxAmount.forEach(function(pax,pindex){
                        if(pax.paxType == 'Adult')
                          adultPrice = pax.amount
                      });
                    }

                    calActivity[index]['price'] = adultPrice
                    calActivity[index]['currency'] = item.currency
                    calActivity[index]['features'] = [];
                    //calActivity[index]['features'].push('Type: Activity');

                    if(item.duration)
                      calActivity[index]['features'].push(item.duration)

                    //calActivity[index]['features'].push('Now - 31 April 2019')
                  }

                });
                  
              }
              return calActivity;
            }
          }
        },
        methods: {
          ...mapActions({
            getfeaturedVilla: 'frontVilla/getfeaturedVilla',
            getAllActivity: 'activities/getfeaturedActivity'
          })
        },
    }
</script>