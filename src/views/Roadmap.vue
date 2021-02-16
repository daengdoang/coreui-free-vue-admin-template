<template>
  <div class="animated fadeIn">
   
    <b-alert show dismissible >
      <b>Please note:</b> This Roadmap page is update regularly.
    </b-alert>
    
     <!-- HERO -->

    <div>
      <b-jumbotron bg-variant="white" text-variant="black" border-variant="">
        <template slot="header">
          Roadmap of 
          <br />
          Cashbac Web UI Kit
        </template>
        <template slot="lead">
          All the planning under one roof.
        </template>
        <hr class="my-4">
        <p>
          Interested in what’s planned for Cashbac Web UI Kit in the coming weeks and months?
          <br />
          This is a good place to start. Roadmap contains delivery estimates only in quarter scope. 
          <br />
          For a more detailed overview of what is already designed and in what state, visit component status.
        </p>
      </b-jumbotron>
    </div>

    <!-- HERO END -->

    <!-- HERO -->

    <div>
      <b-jumbotron bg-variant="white" text-variant="black" border-variant="">
        <template slot="lead">
          🚀 Current quarter (Q4 of 2019)
          <p>
          - Implement end-to-end tests for better coverage on cashbac-components <br />
          - Create library for Illustrations <br />
          - Add Cashbac Brand Guidelines
          <br />
          - Add Changelog and component status page
          </p>
          <hr class="my-4">
          <br />
          🏗 Next quarter or two (Q1 or Q2 of 2020)
          <p>
          - Creating dark theme palette<br />
          - Create library for landing pages cashbac[dot]com
          </p>
          <hr class="my-4">
          <br />
          🔮 Future
          <p>
          - Add Design Token
          <br />
          - Make open source this Cashbac Web UI Kit <br />
          - Add Foundation: Voice and Tones 
          </p>
  
        </template>
        
        
      </b-jumbotron>
    </div>

    <!-- HERO END -->
  </div>
</template>

<script>
export default {
  name: 'roadmap'
}
</script>
