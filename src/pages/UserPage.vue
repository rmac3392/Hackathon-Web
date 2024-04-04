<template>
  <div class="m-5">
    <router-link to="/landing">
      <button
        type="button"
        class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Back
      </button>
    </router-link>
    <Challenge 
    v-for="(challenge,index) in activeChallenges"
    :key="index"
    :title="challenge.name"
    :description="challenge.description"
    @click="passId(challenge.id)"
        />

  </div>
</template>

<script setup>
import Challenge from "../components/Challenge.vue";
import {ref, onMounted} from "vue";
import { useRouter }from "vue-router"
const router = useRouter();
onMounted(()=>{
getActiveChallenge();
});

const passId = (id)=>{
  localStorage.setItem('challenge_id',id);
  router.push('/mechanincs');

}

const activeChallenges = ref([]);
const getActiveChallenge = async ()=>{
    
    try{
        const response = await fetch('http://localhost:8080/getChallenges');
        const data = await response.json();
        for(var i= 0 ; i < data.length; i++){
            if(data[i].status==1){
                activeChallenges.value.push({
                    id:data[i].challenge_id,
                    name:data[i].name,
                    description:data[i].description,

                });
            }

        }
    }
    catch(error){
        console.log("error");
    }

}
</script>
