<template>
  <div>
    <div class="w-[100%] h-[400px] mb-10 m-2 group px-10 py-5 bg-white/10 border rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
  <img src="../assets/1.jpg" class="mb-10 rounded-lg" alt="Reward Image" /> <!-- Ensure to add alt attribute for accessibility -->
  <p class="cardtxt font-semibold text-gray-200 tracking-wider mb-10 group-hover:text-gray-700 text-xl">{{ rewardsName }}</p>
  <div class="ordernow flex flex-row justify-between items-center w-full">
    <p class="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
      {{ activityPoints }} <!-- Assuming this is where you display points -->
    </p>
    <div>
      <button class="flex items-center justify-center mx-auto mt-[5%]">
        <p class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#abd373] bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">Redeem Reward</p>
      </button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  props: {
    rewardsName: String,

    rewardsPoints: String,

    image: String,
  },
};
</script>
