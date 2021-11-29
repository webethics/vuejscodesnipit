<template>
    <div class="cooman-container" v-bind:class="{'login-page':isloginPage }">
        <!--<Header></Header>-->
        <notifications position="bottom right"/>
        <DashboardHeader v-if="currentUser" :currentUser="currentUser"></DashboardHeader>
    	<Header v-else></Header>
        <router-view></router-view>
    </div>
	
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { userService } from '../_services';
import { router } from '../_helpers';
import  Header  from '../common/Header.vue'
import  Footer  from '../common/Footer.vue'
import DashboardHeader from '../common/DashboardHeader.vue'


export default {
    name: 'app',
	components:{
		Header,
		Footer,
        DashboardHeader
	},
    data () {
        return {
            isloginPage: false
        };
    },
    computed: {
        ...mapState({
            currentUser: state => state.account.user || null,
            alert: state => state.alert,
            alertMessage: state => state.alert.message
        })
    },
    mounted(){
        if (this.$route.path === '/login') {
            this.isloginPage = true
        }
        else {
            this.isloginPage = false
        }

    },
    created () {
       // userService.currentUser.subscribe(x => this.currentUser = x);
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear',
        }),
        showNotification : function(){
            //show Notification
            if(this.alert.message != null && this.alert.status != null){
                this.$notify({
                    type: this.alert.status,
                    text: this.alert.message
                });
                //window.scrollTo(0, 0);
                this.clearAlert();
            }
            
        },
    },
    watch: {
        '$route' () {
            if (this.$route.path === '/login') {
                this.isloginPage = true
            }
            else {
                this.isloginPage = false
            }
            this.clearAlert();
        },
        alertMessage:function(newValue,oldValue){
            this.showNotification();
        }
    }
}; 
</script>