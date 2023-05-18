<template>
  <q-page class="q-pa-md row column justify-between content-between">
    <div class="col inputs-section">
      <q-input outlined 
      v-model.number="income"
      type="number"
      label="income" >      
        <q-btn @click="storeAccounting.incomeExpend({
          title:'income',
          action: income
          })"        
        round  dense  flat  icon="send" />
      </q-input>
      <q-input outlined 
      v-model.number="expend"
      type="number"       
      class='q-mt-sm' 
      label="expend">
        <q-btn @click="storeAccounting.incomeExpend({
          title: 'expend',
          action: expend
          })"  
        round dense flat icon="send" />
      </q-input>
    </div>
    <div>
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section class="row q-pa-md justify-between">
          <span>Total:</span>
          <span>{{ storeAccounting.total }}</span>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { useAccountingStore } from 'stores/accounting'
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
const storeAccounting= useAccountingStore();
let income= ref('')
let expend= ref('')

</script>
<style>
.inputs-section {
  width: 100% !important
}
</style>
