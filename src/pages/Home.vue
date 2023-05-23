<template>
  <q-page class="q-pa-md column">
    <div class="total q-mb-md">
      <q-banner dense inline-actions class="text-white bg-secondary" rounded>
          <span class="text-h6">Total</span>
          <template v-slot:action>
              <!-- <span class="text-h6">{{ (storeAccounting.total).toFixed(2) }}</span> -->
          </template>
      </q-banner>
  </div>
    <div>
      <CardItems />
    </div>
    
  </q-page>
</template>

<script setup>
import CardItems from '../components/home/CardItems.vue'
import { useAccountingStore } from 'stores/accounting'
import { onMounted } from 'vue';
const storeAccounting= useAccountingStore();
onMounted(() => {
  // storeAccounting.getSortedItems
  // storeAccounting.postDataTest()
})
</script>
<style>
</style>
