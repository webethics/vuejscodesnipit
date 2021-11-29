<template>
	<div class="nav-section border-bottom">
      <div class="container">
        <nav class="d-flex flex-column flex-md-row align-items-center bg-white">
          <router-link to="/" class="navbar-brand my-0 mr-md-auto font-weight-normal">
            <img class="img-fluid" :src="base_url+'images/web-logo.png'">
          </router-link>
          <ul class="ctm-nav-ul">
            
            <li><router-link class="hl-btn" to="/login">{{front_page.host_login}}</router-link> </li>
         
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
  import Config from '../config'
    export default {
        data:function () {
          return {
            front_page: trans.global.front_page,
            base_url: Config.BASE_URL
          }
        }
    }
</script>
