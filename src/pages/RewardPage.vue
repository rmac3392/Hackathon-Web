<template>
  <div class="flex flex-wrap gap-10 justify-center mt-[5%]">
    <div class="lg:w-[20%]">
      <CardRewards rewardsName="Tree Planting" activityPoints="100P" />
    </div>
    <div class="lg:w-[20%]">
      <CardRewards rewardsName="Limpyo Sapa" activityPoints="100P" />
    </div>
    <div class="lg:w-[20%]">
      <CardRewards rewardsName="Limpyo kanal" activityPoints="100P" />
    </div>
    <div class="lg:w-[20%]">
      <CardRewards rewardsName="Tree Planting" activityPoints="100P" />
    </div>
  </div>
</template>
<script setup>
import CardRewards from "../components/CardRewards.vue";
</script>
