<template>
    <q-card class="my-card q-mb-md" v-for="(items,key) in storeFirebase.getSortedItems"
    :key="key">
        <q-card-section 
        class="bg-primary text-white q-pa-sm row justify-between">
            <div class="date">          
                <div class="text-subtitle2">{{ key }}</div>
            </div>
        </q-card-section>
    
        <q-card-actions vertical align="center" class="" >
            <q-list class="full-width">
                <q-item v-for="(item, key) in items"
                :key="key"
                clickable 
                class="row justify-between">
                    <div class="left-section row">
                        <q-item-section avatar>
                            <q-avatar>
                                <q-img :src="item.img" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <strong>
                                {{ item.title }}
                            </strong>
                            <!-- <p>{{ item.time }}</p> -->
                        </q-item-section>
                    </div>
                    <div :class="['right-section row items-center text-subtitle2', 
                    item.type== 'expense' ? 'text-negative' : 'text-positive']">
                        <strong> {{ item.amount.toFixed(2) }}</strong>
                    </div>
                </q-item>
            </q-list>
        </q-card-actions>
    </q-card>
  </template>
  
<script setup>
import { useAccountingStore } from 'stores/accounting'
import { useFirebaseStore } from 'stores/firebase'
const storeAccounting= useAccountingStore();
const storeFirebase= useFirebaseStore();
   
</script>
  
  <style>
  .q-focus-helper {display: none;}
  </style>