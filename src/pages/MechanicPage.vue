<template>
  <div class="m-3">
    <router-link to="/user">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Back
      </button>
    </router-link>
    <div class="">
      <h1 class="font-bold text-lg">Mechanics:</h1>
      <div class="m-5">
        <ul class="list-disc list-inside">
          <li class="mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            dolorum quo recusandae facere doloribus ex quidem sed quas tempora
            quasi harum at, magnam similique. Numquam accusamus perferendis
            dicta? Odio, sequi.
          </li>
          <li class="mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            dolorum quo recusandae facere doloribus ex quidem sed quas tempora
            quasi harum at, magnam similique. Numquam accusamus perferendis
            dicta? Odio, sequi.
          </li>
          <li class="mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            dolorum quo recusandae facere doloribus ex quidem sed quas tempora
            quasi harum at, magnam similique. Numquam accusamus perferendis
            dicta? Odio, sequi.
          </li>
          <li class="mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            dolorum quo recusandae facere doloribus ex quidem sed quas tempora
            quasi harum at, magnam similique. Numquam accusamus perferendis
            dicta? Odio, sequi.
          </li>
        </ul>

        <div>
          <hr class="mb-5" />
          <div>Upload Image:</div>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div class="">
            <div class="mt-3">Desription:</div>

            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <router-link to="/landing">
            <button
              type="button"
              class="text-white w-full mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
