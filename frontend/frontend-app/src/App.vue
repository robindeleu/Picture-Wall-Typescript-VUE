<template>
  <v-app>
    <v-app-bar
      app
      color= primary
      dark
    >
<h1 class="font-italic">Robin's Picture Gallery</h1>
      <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="ma-1"
          outlined fab small rounded color="white" @click="$router.push('/addpicture')"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon
          class="mx-2" dark outlined color="white"
          v-bind="attrs"
          v-on="on"
          @click="$router.push('/addpicture')"
        >
          mdi-plus
        </v-icon>
        </v-btn>
      </template>
      <span>Add picture</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="ma-1"
          outlined fab small rounded color="white" @click="$router.push('/updatepicture')"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon
          class="mx-2" dark outlined color="white"
          v-bind="attrs"
          v-on="on"
          @click="$router.push('/updatepicture')"
        >
          mdi-update
        </v-icon>
        </v-btn>
      </template>
      <span>Update title from picture</span>
    </v-tooltip>
  
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-1" outlined rounded  color="white" @click="$router.push('/')"
          v-bind="attrs"
          v-on="on"
        >
        All Pictures
        </v-btn>
      </template>
      <span>show all Pictures</span>
    </v-tooltip>   
  
    </v-app-bar>

    <v-main>
      <v-row justify="center">
        <v-col cols="9">
      <router-view></router-view>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>
