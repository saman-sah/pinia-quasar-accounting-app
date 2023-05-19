<template>
  <q-page class="q-pa-md column">
    <div class="total q-mb-md">
      <q-banner dense inline-actions class="text-white bg-red">
        Total
        <template v-slot:action>
          4270.00
        </template>
      </q-banner>
    </div>
    <q-card class="my-card full-width">
      <CardItems />
    </q-card>
    
  </q-page>
</template>

<script setup>
import CardItems from './home/CardItems.vue'
import { useAccountingStore } from 'stores/accounting'
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
const storeAccounting= useAccountingStore();
</script>
<style>
</style>
