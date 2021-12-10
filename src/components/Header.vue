<template>
<div>  
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-nav>
      <b-nav-item :to="'/'">Home</b-nav-item>
      <b-nav-item :to="{ name: 'Blog' }">Blog</b-nav-item>
      <b-nav-item :to="{ name: 'ContactUs' }">Contact Us</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>   
</template>


