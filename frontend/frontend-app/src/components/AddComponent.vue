<template>
<div class="about">
    <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
      class="white--text align-end"
      height="200px"
      :src="avatar"    >
      <v-card-title >Add picture</v-card-title>
    </v-img>
    <div class="text-center ma-3">
      <v-text-field
        single-line v-model="picturetitle" label="Title" clearable
        ></v-text-field>
      <v-text-field
        single-line v-model="pictureurl" label="URL" clearable
        ></v-text-field>
          
      </div>
      <div class="text-center ma-3">
        <v-col>
           <v-btn
          elevation="2"
          raised
          rounded
          color= primary
          @click="add"
        >
        Add</v-btn>
        </v-col>
     
      </div>
  </v-card>
  </div>
</template>
<script>
import Defaultdeviceplaceholder from '../assets/defaultbackgrounddevice.jpg';
import apiComponent from '../api/picture';
export default {
  name: 'addComponent',
  props: {
  },
  computed: {
    avatar() {
      return this.image ? this.image : Defaultdeviceplaceholder;
    }},
  data: () => ({
      picturetitle:'',
      pictureurl:'',
      searchpicturetitle:'',
      searchcomponentvalue:'',
      searchpictureurl:'',
      totalcomponent:'',

  }),
  methods: {
      add(){
        console.log("add methode")
        this.searchpicturetitle = this.picturetitle
        this.searchcomponentvalue = Date.now()
        this.searchpictureurl = this.pictureurl
        this.totalcomponent = {
            "title": this.searchpicturetitle,
            "timepost": this.searchcomponentvalue,
            "url": this.searchpictureurl,
        }
        console.log(this.totalcomponent)
        apiComponent.createPicture(this.totalcomponent)
        this.$router.push('/');
      },
  }
}
</script>