<template>
  <div
    class="bg-no-repeat bg-cover bg-center relative"
    style="background-image: url(../assets/bg_login.jpg)"
  >
    <div
      class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"
    ></div>
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div
        class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10"
      >
        <div class="self-start hidden lg:flex flex-col text-white">
          <img src="" class="mb-3" />
          <h1 class="mb-3 font-bold text-5xl">Baranggay Tejero</h1>
          <p class="pr-3">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
        </div>
      </div>
      <div class="flex justify-center self-center z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-[470px]">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2">
              <div class="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none border focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >Username</label
                >
              </div>
            </div>
            <div class="space-y-2">
              <div class="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none border focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >Password</label
                >
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm mr-1">
                Forgot your password?
                <a href="#" class="">
                  <span class="underline text-green-400 hover:text-green-500"
                    >Click Here!</span
                  >
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          <div class="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2021-2022
              <a
                href="https://codepen.io/uidesignhub"
                rel=""
                target="_blank"
                title="Ajimon"
                class="text-green hover:text-green-500"
                >AJI</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
