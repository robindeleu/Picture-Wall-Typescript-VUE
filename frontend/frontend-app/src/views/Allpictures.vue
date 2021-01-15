<template>
  <div class="about">
          <h1 class="amber--text text-center" > Photo Wall</h1>
      <v-row justify="center">
      <v-col cols="12" md="6" lg="12"
       v-for="item in componentlist" :key="item.id">
    <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
      class="white--text align-end"
      height="200px"
      :src= item.url   >
    </v-img>
    <div class="text-center ma-3">
    <v-card-title>
      {{item.title}}
    </v-card-title>
    <v-card-subtitle>
      Posted at {{item.timepost}} seconds since Jan 01 1970. (UTC)
    </v-card-subtitle>
    <p>
      Unique ID (need to update picture): {{item.id}}
    </p>
      </div>
      <div class="text-center ma-3">
        <v-col>
      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
           <v-btn
          elevation="2"
          raised
          rounded
          color= primary
                    v-bind="attrs"
          v-on="on"
          @click="removebutton(item.id)"
        >
        Delete</v-btn>
        </template>
      <span>Delete {{item.title}}</span>
    </v-tooltip> 
        </v-col>
     
      </div>
  </v-card>
          </v-col>
  </v-row>
  </div>
</template>
<script>
import apiComponent from '../api/picture';
export default {
  name: 'Allpictures',
  components: {
  },
   mounted() {
    console.log("Updating while creating");
     this.update();
  },
   data: () => ({
       show: false,
      componentlist: [
  {
    "id": 7,
    "title": "castle",
    "timepost": "1610702984482",
    "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg"
  },
  {
    "id": 6,
    "title": "lion",
    "timepost": "1610702974482",
    "url": "https://media.s-bol.com/7v5E3vKoPpA/550x420.jpg"
  },
  {
    "id": 5,
    "title": "beach",
    "timepost": "1610702974382",
    "url": "https://retreatmi.com/files/destinations-logo/5e5224aa3718e.jpg"
  }
]
  }),
  methods: {
      removebutton(pictureid){
        console.log("in Allpictures delete with id",pictureid)
        apiComponent.deletePicture(pictureid)
        location.reload();
      },
      update(){
        console.log("update methode")
        this.componentlist = [];
        apiComponent.getPicture().then(response => {
        console.log(response);        
        this.componentlist = response.data;
        console.log(this.componentlist);
      }).catch(e => {
        this.error = e;
        console.log(e);
      })
      console.log(this.componentlist);
      },
  }
}
</script>