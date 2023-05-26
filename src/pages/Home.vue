<template>
  <q-page class="q-pa-md column">
    <div class="total q-mb-md" v-if="storeFirebase.items && Object.keys(storeFirebase.items)">
      <q-banner dense inline-actions class="text-white bg-secondary q-py-xs" rounded>
          <span class="text-h6">Total</span>
          <template v-slot:action>
              <span class="text-h6" v-if="storeFirebase.items">{{ storeFirebase.total }}</span>
          </template>
      </q-banner>
    </div>
    <div>
      <CardItems v-if="!storeFirebase.loading"/>
      <CardItemsPlaceholder v-else/>
      
    </div>
    
  </q-page>
</template>

<script setup>
import CardItems from '../components/home/CardItems.vue'
import CardItemsPlaceholder from '../components/home/CardItemsPlaceholder.vue'
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();
</script>
<style>
</style>
