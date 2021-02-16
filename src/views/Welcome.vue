<template>
  <div class="animated fadeIn">
    <div class="card">
      <div class="card-header">
        Welcome!
      </div>
      <div class="card-body">
        <h1>Cashbac Web UI Kit</h1>
        <p>
          This is a collection of guidelines and components which can be used to create amazing user experiences. 
          Foundations introduces you to Cashbac's principles while Components lists out the bits and pieces that make up Cashbac Design System.
        </p>
      </div>
    </div>
    <b-row>
      <b-col sm="6" md="4">
        <b-card>
          <i class="icon-layers icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Foundation</h3>
          <p> Get to know how we use Web UI Kit, to build products at Cashbac.</p>
          <p> </p>
          <b-button size="lg" variant="primary" block>Get Started</b-button>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-badge icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Components</h3>
          <p>Get to know components in Cashbac Web UI Kit.</p>
          <p></p>
          <b-button size="lg" variant="primary" block>See Components</b-button>  
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card >
          <i class="icon-emotsmile icons font-2xl d-block mt-4"></i>
          <p> </p>
          <h3>Page Sample</h3>
          <p> Various page samples that developed for best practice using Web UI Kit</p>
          <p></p>
          <b-button size="lg" variant="primary" block>See Samples</b-button>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <transition name="fade">
          <b-card class="bg-secondary" no-body v-if="show">
            <div slot="header">
              Card with header actions
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>
