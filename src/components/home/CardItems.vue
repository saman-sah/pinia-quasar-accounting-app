<template>
    <q-card class="my-card q-mb-md" v-for="(items,key) in storeAccounting.getSortedItems"
    :key="key">
        <q-card-section 
        class="bg-grey-8 text-white q-pa-sm row justify-between">
            <div class="date">          
                <div class="text-subtitle2">{{ key }}</div>
            </div>
        </q-card-section>
    
        <q-card-actions vertical align="center" class=" bg-blue-grey-3" >
            <q-list class="full-width">
                <q-item v-for="(item, key) in items"
                :key="key"
                clickable 
                class="row justify-between">
                    <div class="left-section row">
                        <q-item-section avatar>
                            <q-avatar>
                                <img :src="item.img">
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            {{ item.title }}
                            <p>{{ item.time }}</p>
                        </q-item-section>
                    </div>
                    <div :class="['right-section row items-center', item.type== 'expense' ? 'text-red' : 'text-green']">
                        {{ item.amount.toFixed(2) }}
                    </div>
                </q-item>
            </q-list>
        </q-card-actions>
    </q-card>
  </template>
  
<script setup>
import { useAccountingStore } from 'stores/accounting'
const storeAccounting= useAccountingStore();
   
</script>
  
  <style>
  .q-focus-helper {display: none;}
  </style>