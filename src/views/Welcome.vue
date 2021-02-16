<template>
  <div class="animated fadeIn">
   
    <b-alert show dismissible >
      Welcome to Cashbac Web UI Kit! <b>Please note:</b> This is for internal purpose usage only.
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
          <i class="icon-layers icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Foundation</h3>
          <p> Know the foundation how to use Web UI Kit, to build web products at Cashbac.</p>
          <p> </p>
          <b-button size="lg" variant="outline-primary" block to="/foundation/">Get Started</b-button>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-puzzle icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Components</h3>
          <p>Get to know components in Cashbac Web UI Kit. Please read one by one carefully :)</p>
          <p></p>
          <b-button size="lg" variant="outline-primary" block to="/base/">See Components</b-button>  
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-docs icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Page Sample</h3>
          <p> Various page samples that developed for best practice using Cashbac Web UI Kit</p>
          <p></p>
          <b-button size="lg" variant="outline-primary" block to="/dashboard">See Samples</b-button>
        </b-card>
      </b-col>
    </b-row>
    <!-- ROW 2 -->
    <b-row>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-directions icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Roadmaps</h3>
          <p> Current progress, next quarter plans and future dreams. All plans in one roof.</p>
          <p></p>
          <b-button size="lg" variant="outline-primary" block to="/roadmap">See Roadmap</b-button>
        </b-card>
      </b-col>

      <b-col sm="6" md="4">
        <b-card>
          <i class="icon-shield icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3 style="display: inline-block;">Brand</h3>&nbsp <b-badge style="display: inline-block; vertical-align: 50%;" variant="danger">WIP</b-badge> 
          <p> Know the brand guidelines of Cashbac. From logo, assets and beyonds.</p>
          <p> </p>
          <b-button size="lg" variant="outline-primary disabled" block>Read Guidelines</b-button>
        </b-card>
      </b-col>
      
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-bubbles icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3 style="display: inline-block;">Voice and Tones</h3> &nbsp <b-badge style="display: inline-block; vertical-align: 50%;" variant="danger">WIP</b-badge>
          <p>Get to know components in Cashbac Web UI Kit. Please read one by one carefully :)</p>
          <p></p>
          <b-button size="lg" variant="outline-primary disabled" block>See Voice and Tones</b-button>  
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
