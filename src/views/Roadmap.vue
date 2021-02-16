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
          Interested in what’s planned for Orbit in the coming weeks and months?
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
          🚀 Current quarter
          <p>
          - Add Design Token
          </p>
          <hr class="my-4">
          <br />
          🏗 Next quarter or two
          <p>
          - Add Design Token
          </p>
          <hr class="my-4">
          <br />
          🔮 Future
          <p>
          - Add Design Token
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
