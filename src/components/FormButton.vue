<template>
  <div class="relative mt-4 group">
    <div class="absolute transition duration-500 ease-in-out h-full w-full ring-0 ring-violet-700 group-hover:blur-md group-hover:ring-8 group-hover:ring-violet-700"></div>
    <button class="p-3 relative text-sm font-medium text-zinc-900 bg-violet-600  rounded-md w-full"><slot></slot></button>
  </div>
</template>

<script>
export default {

}
</script>
