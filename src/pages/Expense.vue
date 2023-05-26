<template>
    <q-page v-if="storeFirebase.getFilteredItems('expense')"
    class="q-pa-md column">
        <div class="total q-mb-md">
            <q-banner dense inline-actions class="text-white bg-secondary" rounded>
                <span class="text-h6">Total</span>
                <template v-slot:action>
                    <span class="text-h6">{{ (storeFirebase.getFilteredItems('expense').total).toFixed(2) }}</span>
                </template>
            </q-banner>
        </div>
        <q-card class="my-card q-mb-md" v-for="(item, key) in storeFirebase.getFilteredItems('expense').items" 
            :key="key">            
            <q-card-section 
            class="bg-primary text-white q-pa-sm q-px-md row justify-between">
                <div class="date">          
                    <div class="text-subtitle2">{{ item.date }}</div>
                </div>
                <div class="time">
                    <div class="text-subtitle2">{{ item.time }}</div>
                </div>
            </q-card-section>
        
            <q-card-actions class="row justify-between q-pa-none q-pr-sm" >
                <q-list class="full-width">
                    <q-item 
                    clickable 
                    @click="storeFirebase.step2({type: item.type, data: item, action: 'Update', itemKey: key})"
                    class="row justify-between items-center">
                        <div class="left row items-center">
                            <q-item-section avatar>
                                <q-avatar size="40px">
                                    <q-img :src="item.img"/>
                                </q-avatar>
                            </q-item-section>
                            <div class="title">
                                <strong>{{ item.title }}</strong>
                            </div>
                        </div>
                        <div class="right">
                            <strong>{{ (item.amount).toFixed(2) }}</strong>
                        </div>
                    </q-item>
                </q-list>
            </q-card-actions>
        </q-card>
    </q-page>
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