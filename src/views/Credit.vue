<template>
  <div class="animated fadeIn">
   
    <b-alert show dismissible >
      <b>Please note:</b> This is for internal purpose usage only.
    </b-alert>
    
     <!-- HERO -->

    <div>
      <b-jumbotron bg-variant="white" text-variant="black" border-variant="">
        <template slot="header">
          Credit
        </template>
        <template slot="lead">
          This page deicated as hall of fame from Cashbac Web UI Kit
        </template>
        <hr class="my-4">
      </b-jumbotron>
    </div>

    <!-- HERO END -->

    <b-row>
      <b-col sm="6" md="4">
        <b-card>
          <i class="icon-globe icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Cashbac Ops Dashboard</h3>
          <p> Know the foundation how to use Web UI Kit, to build web products at Cashbac.</p>
          <p> </p>
          <b-button size="lg" variant="primary" block to="/foundation/">Get Started</b-button>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-globe icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Merchant Dashboard</h3>
          <p>Get to know components in Cashbac Web UI Kit. Please read one by one carefully :)</p>
          <p></p>
          <b-button size="lg" variant="primary" block to="/base/">See Components</b-button>  
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-globe icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Cashbac Landing Page</h3>
          <p> Various page samples that developed for best practice using Cashbac Web UI Kit</p>
          <p></p>
          <b-button size="lg" variant="primary" block to="/dashboard">See Samples</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'credit'
}
</script>
