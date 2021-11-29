<template>
	<div class="nav-section border-bottom">
    <div class="container-fluid">
      <b-navbar toggleable="lg" variant="faded" class="bg-white navbar navbar-expand-lg booking-nv">
        <router-link to="/dashboard" class="navbar-brand my-0 mr-md-auto font-weight-normal">
          <img class="img-fluid" :src="base_url+'images/web-logo.png'">
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ctm-nav-ul booking-nav">
            <b-nav-item to="/dashboard" class="active">Dashboard </b-nav-item>

            <b-nav-item-dropdown text="User" right>
              <!-- Using 'button-content' slot -->
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  import Config from '../config'
  import { userService } from '../_services';
  import { router, Role } from '../_helpers';
  import { BDropdown } from 'bootstrap-vue'
  import { mapState} from 'vuex'
  export default {
      props:['currentUser'],
      data:function () {
        return {
          front_page: trans.global.front_page,
          base_url: Config.BASE_URL,
          adminRole: Role.ADMIN_USER_TYPE,
          supplierRole : Role.SUPPLIER_USER_TYPE
        }
      },
      methods: {
        logout () {
          userService.logout();
          router.push('/login');
        }
      }
  }
</script>
