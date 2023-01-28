<template>
	<div class="flex flex-col justify-between bg-[url('img/cc-bg.svg')] p-4 bg-no-repeat w-[364px] h-[233px]">
    <div class="top-4 left-6 bg-[url('img/cc-icon.svg')] bg-no-repeat w-[20px] h-[24px]"></div>
    <div class="flex flex-col gap-3">
      <p class="font-medium text-2xl text-white">{{ write(0) }}</p> 
      <div class="flex flex-col gap-2">
        <div>
          <p class="font-light text-xs text-white">Nome do titular</p>
          <p class="font-medium text-base text-white">{{ write(1) }}</p>
        </div>
        <div class="flex justify-between items-end">
          <div>
            <p class="font-light text-xs text-white">Expiração</p>
            <p class="font-medium text-base text-white">{{ write(2) }}</p>
          </div>
          <div >
            <p class="font-light text-xs text-white">CVC</p>
            <p class="font-medium text-base text-white">{{ write(3) }}</p>
          </div>
          <div class="h-[30px] w-[38px] bg-[url('img/cc-chip.svg')] bg-no-repeat"></div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  methods: {
    write(index) {
      if(this.$store.state.elements[index].value == '') {
        return this.$store.state.elements[index].placeholder
      }
      else {
        return this.$store.state.elements[index].value
      }
    }
  }
}
</script>
