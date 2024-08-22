import { atom } from "recoil";

export const newStory = atom({
    key:"newStory",
    default:{
        title:"",
        content:"",
        tags:[],
        isPublishing:false,
        isDraft:false
    }
})