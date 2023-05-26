<template>
    <div>
        <template v-if="storeFirebase.items && Object.keys(storeFirebase.items)">
            <q-card class="my-card q-mb-md" v-for="(items,key) in storeFirebase.getSortedItems"
        :key="key">
            <q-card-section 
            class="bg-primary text-white q-px-sm q-py-xs row justify-between">
                <div class="date">          
                    <div class="text-subtitle2">{{ key }}</div>
                </div>
                <div class="sub-total">          
                    <div class="text-subtitle2">{{ items.subTotal }}</div>
                </div>
            </q-card-section>
        
            <q-card-actions vertical align="center" class="q-pa-none" >
                <q-list class="full-width">
                    <q-item v-for="(item, key) in items.items"
                    :key="key"
                    clickable 
                    @click="storeFirebase.step2({type: item.type, data: item, action: 'Update', itemKey: key})"
                    class="row justify-between q-px-sm q-py-xs">
                        <div class="left-section row">
                            <q-avatar size="40px">
                                <q-img :src="item.img" width="35px"/>
                            </q-avatar>
                            <q-item-section>
                                <strong>
                                    {{ item.title }}
                                </strong>
                                <q-chip v-if="item.type== 'debt'"
                                outline  
                                size="12px" 
                                color="secondary" >
                                    {{ item.name }}
                                </q-chip>
                            </q-item-section>
                        </div>
                        <div :class="['right-section row items-center text-subtitle2', 
                        item.type== 'expense'  || item.title== 'Lend' ? 'text-negative' : 'text-positive']">
                            <strong> {{ item.amount }}</strong>
                        </div>
                    </q-item>
                </q-list>
            </q-card-actions>
        </q-card>
        </template>
        <template v-else>
            <q-banner dense inline-actions class="text-white bg-secondary" rounded>
                <span class="text-h6">There is no Transaction</span>
            </q-banner>
        </template>
    </div>
  </template>
  
<script setup>
    import { useFirebaseStore } from 'stores/firebase'
    const storeFirebase= useFirebaseStore();   
</script>
  
<style>
    .q-focus-helper {display: none;}
    .q-img__container {
        padding: 4px;
    }
</style>