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

    <b-card-group>
        <b-card>
          <i class="icon-chart icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Cashbac Ops Dashboard (Settlement and Promo) Squad</h3>
          <br />
          <ul>
            <li>Daeng Muhammad Feisal <strong>(UI/UX Designer)</strong</li>
            <li>Ignatius Oktaviardi <strong>(Front End Developer)</strong</li>
            <li>Miftah Ramadhan <strong>(QA Engineer)</strong</li>
            <li>Hilmiatun Nisa <strong>(Product Manager)</strong></li>
          </ul>
          <p> </p>
        </b-card>
        <b-card >
          <i class="icon-chart icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Cashbac Merchant Dashboard Squad</h3>
          <br />
          <ul>
            <li>Daeng Muhammad Feisal <strong>(UI/UX Designer)</strong</li>
            <li>Cristyna Tan <strong>(UI/UX Designer and Illustrator)</strong</li>
            <li>Rafiandra Widhiansyah <strong>(UI/UX Designer)</strong</li>
            <li>Robby Hermansyah <strong>(Front End Developer)</strong</li>
            <li>Andre "Gever" Pratama <strong>(Product Manager)</strong></li>
          </ul>          
          <p></p>  
        </b-card>
        <b-card >
          <i class="icon-globe icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Cashbac Landing Page Squad</h3>
          <br />
          <ul>
            <li>Daeng Muhammad Feisal <strong>(UI/UX Designer)</strong</li>
            <li>Febriana Afra Hanifah <strong>(Content Writer)</strong</li>
            <li>Mary Chelsea <strong>(Marketing)</strong</li>
            <li>Jepri Sinaga <strong>(Product Manager)</strong></li>
          </ul>   
          <p></p>
        </b-card>
    </b-card-group>
    <br />
  </div>
</template>

<script>
export default {
  name: 'credit'
}
</script>
