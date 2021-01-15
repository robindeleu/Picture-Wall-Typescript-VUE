import api from './api';

export default {
    getPicture(){
        console.log("getComponents")
        return api().get(`/api`);
    },
    getPicturewithId(pictureid: number){
        console.log("getComponents with id", pictureid)
        return api().get(`/api/${pictureid}`);
    },
    createPicture(newpicture: any){
        console.log("postComponents with json", newpicture)
        return api().post(`/api`, newpicture)
    },
    updatePicture(pictureid: number,picturetitleandtime: any){
        console.log("updateComponents with json", picturetitleandtime)
        console.log("updateComponents with id", pictureid)
        return api().put(`/api/${pictureid}`, picturetitleandtime)
    },
    deletePicture(pictureid: number){
        console.log("deleteComponents with id",pictureid)
        return api().delete(`/api/${pictureid}`)
    },

}