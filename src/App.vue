<template>
  <div class="flex flex-col gap-6 w-[288px]">
    <h1 class="text-gray-300 font-extralight">CADASTRO DO CARTÃO</h1>
    <FieldForm></FieldForm>
  </div>
  <FieldCard></FieldCard>
</template>

<script>
import FieldCard from './components/FieldCard.vue';
import FieldForm from './components/FieldForm.vue';


export default {
  name: 'App',
  components: { FieldForm, FieldCard }
}
</script>

<style>

</style>
