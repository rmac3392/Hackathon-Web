<template>
  <div class="m-5">
    <router-link to="/">
        <div class="flex justify-end mb-3">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log Out</button>
        </div>
        
    </router-link>
    <div>
      <a
        href="#"
        class="block mb-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  "
      >
        <h5
          class="mb-2 text font-bold tracking-tight text-gray-900 "
        >
         {{ purok }}
        </h5>
        <p class="font-normal text-gray-700 ">
            <div>Purok Leader: {{ purok_leader }}</div>
          <div>Points: {{ points }}</div>
        </p>
      </a>
    </div>

    <router-link to="/user">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Challenge</button>
    </router-link>
    <router-link to="/reward">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reward</button>
    </router-link>
  </div>
</template>
<script setup>

import {ref,onMounted} from "vue"
import axios from "axios";
onMounted(()=>{
    getActiveChallenge();
    getMyChallenges();
    getPurok();
});

const user_id = localStorage.getItem('user_id');
const image = ref(null);


const description = ref();
const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];

    image.value = file;
}
const submitChallenge = async()=>{
    try{
        const formData = new FormData();
        formData.append('user_id',user_id);
        formData.append('description',description.value);
        formData.append('image',image.value);


        await axios.post("http://localhost:8080/submitChallenge",formData,{
        headers: {
        "Content-Type" : "multipart/form-data",
            },
        });
        window.location.reload();
    }
    catch(error){
        console.log("error:",error);
    }
}

const addChallenge = async(challenge_id)=>{
    try{
        const formData = new FormData();
        formData.append('challenge_id',challenge_id);
        formData.append('user_id',user_id);
        formData.append('status',0);


        await axios.post("http://localhost:8080/addUserChallenge",formData,{
        headers: {
        "Content-Type" : "multipart/form-data",
            },
        });
        window.location.reload();
    }
    catch(error){
        console.log("error:",error);
    }
}

const activeChallenges = ref([]);
const getActiveChallenge = async ()=>{
    
    try{
        const response = await fetch('http://localhost:8080/getChallenges');
        const data = await response.json();
        for(var i= 0 ; i < data.length; i++){
            if(data[i].status==1){
                const image = await getChallengeImage(data[i].challenge_id);
                activeChallenges.value.push({
                    id:data[i].challenge_id,
                    name:data[i].name,
                    description:data[i].description,
                    image: await convertBlob(image),

                });
            }

        }
    }
    catch(error){
        console.log("error");
    }

}
const myActiveChallenge = ref([]);

const getMyChallenges = async ()=>{
    try{
        const response = await fetch('http://localhost:8080/getAllUserChallenge');
        const data = await response.json();
        const challenges = await getChallengesReturn()
        
        for(var i = 0 ; i < data.length;i++){   
            console.log(data[i].status)
            if(data[i].user_id==user_id && data[i].status===0){
                
                const challenge = await getChallengeByID(data[i].challenge_id);
                const image = await getChallengeImage(challenge[0].challenge_id);

                myActiveChallenge.value.push({
                    id:challenge[0].challenge_id,
                    name:challenge[0].name,
                    description:challenge[0].description,
                    image: await convertBlob(image),

                });
            }   
            
        }
    }
    catch(error){
        console.log("error",error);
    }
}

const getChallengesReturn = async () =>{
    const response = await fetch('http://localhost:8080/getChallenges');
    const data = response.json();
    return data;
}

const getChallengeByID = async (id) =>{
    const response = await fetch(`http://localhost:8080/getChallengeByID/${id}`);
    const data = response.json();
    return data;
}





const getChallengeImage = async (id)=>{
    try{
        const response = await fetch(`http://localhost:8080/getChallengeImage/${id}`);
        const data = await response.json();
        return data[0].image.data;
    }
    catch(error){

    }
}

const purok = ref();
const purok_leader = ref();
const points = ref();

const getUsers = async () =>{
  const response=  await fetch('http://localhost:8080/getUsers');
  const data = await response.json();
  for (var i =0 ; i < data.length;i++){
    if(data[i].user_id==user_id){
      return data[i];
    }
  }
}

const getPurok = async ()=>{
  const user = await getUsers();
  const response=  await fetch('http://localhost:8080/getPuroks');
  const data = await response.json();
  for(var i = 0 ; i < data.length;i++){
    if(data[i].purok_id==user.purok_id){
      purok.value = data[i].name;
      purok_leader.value = user.name;
      points.value = user.points
    }
  }
}

const convertBlob = (image) => {
      return new Promise((resolve, reject) => {
        if (image) {
          const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const dataURL = reader.result;
            resolve(dataURL);
          };
        }
      });
    };

</script>
