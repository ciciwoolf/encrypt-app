<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Cici's Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->       
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ciciwoolf/encrypt-app"
        target="_blank"
        text
      >
        <span class="mr-2">Check out the Github Repo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ToolCard/>
    </v-main>
  </v-app>
</template>

<script>
import ToolCard from './components/ToolCard';

export default {
  name: 'App',

  components: {
    ToolCard,
  },

  data: () => ({
    //
  }),
};
</script>
