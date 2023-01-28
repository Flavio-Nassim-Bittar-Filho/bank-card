<template>
  <div class="flex flex-col">
    <label :for="id" class="text-white font-medium text-xs mb-1"><slot></slot></label>
    <input type="text" v-model="value" :placeholder="placeholder" name="" :id="id" class="bg-zinc-900 border border-zinc-700 rounded-md text-zinc-400 font-medium text-lg px-3 py-2 focus:outline-none ring-zinc-700 focus:ring-2 focus:ring-opacity-40 w-full transition duration-500 ease-in-out">
  </div>
</template>

<script>
export default {
  props: {
    id : String,
    placeholder : String
  },
  
  data() {
    return {
      value : ''
    }
  },

  watch: {
    value(newValue) {
      this.$store.commit('changeValue', {id: this.id, value: newValue })
    }
  },

  created() {
    this.$store.commit('createdElement', {id: this.id, placeholder: this.placeholder, value: this.value })
  }

}
</script>
