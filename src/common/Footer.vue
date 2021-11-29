<template>
	<div class="footer-cont">
		<div class="container">
			<div class="row">
			  <div class="info-cont">
			    <h1> {{global.information}} </h1>
			    <div class="divide-line"></div>
			    <div class="info-cont-txt">
			      <ul>
			        <li><router-link to="/"> {{global.front_page.home}} </router-link></li>
			        <li><router-link to="/about-us"> {{global.front_page.about_us}} </router-link></li>
			    
			      </ul>
			      <ul>
			        <li><router-link to="/contact-us"> {{global.front_page.contact_us}} </router-link></li>
			        
			      </ul>
			      <ul>
			        <li><router-link to="/privacy-policy"> {{global.front_page.privacy_policy}}  </router-link></li>
			        
			        <li><router-link to="/terms-conditions"> {{global.front_page.terms_conditions}}  </router-link></li>
			      </ul>
			      
			      <ul>
			        <!--<li><a href="mailto:email@email.com">email@email.com </a></li>
			        <li><a href="tel:(916) 572-1770"> (916) 572-1770 </a></li>-->
			        <ul class="social-cont">
			          <li><router-link to="https://www.facebook.com/"> <i class="fab fa-facebook-f"></i> </router-link></li>
			          <li><router-link to=""> <i class="fab fa-twitter"></i> </router-link></li>
			          <li><router-link to=""> <i class="fab fa-instagram"></i> </router-link></li>
			        </ul>
			      </ul>
			    </div>
			    <div class="copy-right">
			      <p> {{global.copyrights}} © {{ new Date().getFullYear() }} {{global.site_title}}. {{global.rights_reserved}} </p>
			    </div>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data:function () {
          return {global: trans.global}
        }
    }
</script>

