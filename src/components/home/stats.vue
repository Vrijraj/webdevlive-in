<template>
  <v-container fluid class="mb-0 pb-0">
    <v-row align="center" justify="center">
      <v-col cols="12" md="7" sm="7" lg="7" xl="6" class="">
        <p class="google-font mb-1" style="font-weight: 350;font-size:200%">
          <b class="google-font" :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" >Everyone is welcome here</b>
        </p>
        <p class="google-font mt-3" style="">
          Much of the web ecosystem focusing on fundamentals and innovating quickly to meet the ever-changing needs of users. <br> <br>
          To help our community build powerful and useful sites, we want to invite you to web.dev LIVE India, a four-day digital event to learn modern web techniques and to connect with other developers.
          <br> <br>
          While we are open to welcome everyone and a digital event means anyone can join, the content will be tailored to India/APAC region audience.
        </p>
      </v-col>

      <v-col cols="12" md="5" sm="5" lg="5" xl="6" class="">
        <v-row justify="center" align="center" class="px-5">
          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #616161;font-size:300%">
              <b>
                <span class="primary--text">1500+</span>
              </b>
            </p>
            <p class="google-font">Registrations</p>
          </v-col>

          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #616161;font-size:300%">
              <b>
                <span class="primary--text">4</span>
              </b>
            </p>
            <p class="google-font">Days</p>
          </v-col>
          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #616161;font-size:300%">
              <b>
                <span class="primary--text">26</span>
              </b>
            </p>
            <p class="google-font">Speakers</p>
          </v-col>
          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #616161;font-size:300%">
              <b>
                <span class="primary--text">24</span>
              </b>
            </p>
            <p class="google-font">Sessions</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
