<template>
  <div class="about">
         <h1 class="amber--text text-center" > Update picture</h1>
     <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
      class="white--text align-end"
      height="200px"
      :src="avatar"    >
      <v-card-title >Update Title</v-card-title>
    </v-img>
    <div class="text-center ma-3">
      <v-text-field
        single-line v-model="picturetitle" label="Title" clearable
        ></v-text-field>
      <v-text-field
        single-line v-model="pictureid" label="id" clearable
        ></v-text-field>
          
      </div>
      <div class="text-center ma-3">
        <v-col>
           <v-btn
          elevation="2"
          raised
          rounded
          color= primary
          @click="update"
        >
        update</v-btn>
        </v-col>
     
      </div>
  </v-card>
  </div>
</template>
<script>
import Defaultdeviceplaceholder from '../assets/defaultbackgrounddevice.jpg';
import apiComponent from '../api/picture';
export default {
  name: 'Updatepicture',
  components: {
  },
  computed: {
    avatar() {
      return this.image ? this.image : Defaultdeviceplaceholder;
    }},
    data: () => ({
      picturetitle:'',
      pictureid:'',
      searchpicturetitle:'',
      searchcomponentvalue:'',
      searchpictureid:'',
      totalcomponent:'',

  }),
    methods: {
      update(){
        console.log("add methode")
        this.searchpicturetitle = this.picturetitle
        this.searchcomponentvalue = Date.now()
        this.searchpictureid = this.pictureid
        this.totalcomponent = {
            "title": this.searchpicturetitle,
            "timepost": this.searchcomponentvalue,
        }
        apiComponent.updatePicture(this.searchpictureid,this.totalcomponent)
        
        this.$router.push('/');
      },
  }
}
</script>