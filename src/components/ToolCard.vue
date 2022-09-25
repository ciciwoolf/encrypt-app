<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
       
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Cici's Super Secret Encrypt & Decrypt Tool
          </h1>      
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Encrypt Your Secret Message Here
        </h2>

        <v-row justify="center">
        
           
        
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Decrypt Your Encrypted Message Here
        </h2>

        <v-row justify="center">
          
       
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
       

        <v-row justify="center">
       
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ToolCard',

    data: () => ({
      ecosystem: [
        // {
        //   text: 'vuetify-loader',
        //   href: 'https://github.com/vuetifyjs/vuetify-loader',
        // },
        // {
        //   text: 'github',
        //   href: 'https://github.com/vuetifyjs/vuetify',
        // },
        // {
        //   text: 'awesome-vuetify',
        //   href: 'https://github.com/vuetifyjs/awesome-vuetify',
        // },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
