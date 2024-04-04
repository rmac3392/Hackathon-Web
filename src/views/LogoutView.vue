<template>
<div class="flex items-center justify-center h-screen">
    <div
  class="group select-none w-[35%] h-[500px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl "
>
  <div class="">
    <div class="text-center p-3 flex-auto justify-center">
  <svg fill="currentColor" viewBox="0 0 20 20" class="w-12 group-hover:animate-bounce h-12 flex items-center text-gray-600 fill-red-500 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 12a1 1 0 100-2H4V6h6a1 1 0 000-2H4a2 2 0 00-2 2v8a2 2 0 002 2h6a1 1 0 100-2zM17 2a1 1 0 00-1 1v14a1 1 0 102 0V3a1 1 0 00-1-1z" clip-rule="evenodd"></path>
  </svg>
  <h2 class="text-2xl font-bold py-4 text-gray-200">Are you sure you want to Logout?</h2>
  <p class="font-bold text-md text-gray-500 px-2">
    Do you really want to continue ? This process cannot be undone
  </p>
</div>

    <div class="p-2 mt-2 text-center space-x-1 md:block flex gap-5">
      <button
        class="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
      >
        Cancel
      </button>
      <button
        class="bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300"
      >
        Confirm
      </button>
    </div>
  </div>
</div>

</div>
</template>

<script setup></script>