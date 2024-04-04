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
         Purok Kasambagan
        </h5>
        <p class="font-normal text-gray-700 ">
            <div>Purok Leader: Michael Tonilon</div>
          <div>Points: 200</div>
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
<script setup></script>
