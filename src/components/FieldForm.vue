<template>
  <form class="flex flex-col gap-y-4">
    <FormInput id="cardNumber" placeholder="2341 2531 3352 1512">NÚMERO DO CARTÃO</FormInput>
    <FormInput id="CardholderName" placeholder="FULANO">NÚMERO DO CARTÃO</FormInput>
    <div class="flex gap-4">
      <FormInput id="expiration" placeholder="02/24">NÚMERO DO CARTÃO</FormInput>
      <FormInput id="cvc" placeholder="223">NÚMERO DO CARTÃO</FormInput>
    </div>
    <FormButton>ADICIONAR CARTÃO</FormButton>
  </form>
</template>

<script>
import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';


export default {
  components: { FormInput, FormButton },
  setup() {
      
    }
}
</script>

