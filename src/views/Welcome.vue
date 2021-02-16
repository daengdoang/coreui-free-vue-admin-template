<template>
  <div class="animated fadeIn">
   
    <b-alert show dismissible>
      Welcome to Cashbac Web UI Kit. Please note: This is for internal purpose usage only.
    </b-alert>
    
     <!-- HERO -->

    <div>
      <b-jumbotron bg-variant="white" text-variant="black" border-variant="">
        <template slot="header">
          Cashbac Web UI Kit
        </template>
        <template slot="lead">
          This is a collection of guidelines and components which can be used to create amazing user experiences. 
          Foundations introduces you to Cashbac's principles while Components lists out the bits and pieces that make up Cashbac Design System.
        </template>
        <hr class="my-4">
      </b-jumbotron>
    </div>

    <!-- HERO END -->

    <b-row>
      <b-col sm="6" md="4">
        <b-card>
          <i class="icon-badge icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Foundation</h3>
          <p> Get to know how we use Web UI Kit, to build products at Cashbac.</p>
          <p> </p>
          <b-button size="lg" variant="primary" block to="/foundation/">Get Started</b-button>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-layers icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Components</h3>
          <p>Get to know components in Cashbac Web UI Kit.</p>
          <p></p>
          <b-button size="lg" variant="primary" block to="/base/">See Components</b-button>  
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-docs icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Page Sample</h3>
          <p> Various page samples that developed for best practice using Web UI Kit</p>
          <p></p>
          <b-button size="lg" variant="primary" block to="/dashboard">See Samples</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>
