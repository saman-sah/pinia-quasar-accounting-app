<template>
    <q-page v-if="storeFirebase.getFilteredItems('debt')"
    class="q-pa-md column">
        <div class="total q-mb-md">
            <q-banner dense inline-actions class="text-white bg-secondary q-py-xs" rounded>
                <span class="text-h6">Total</span>
                <template v-slot:action>
                    <span class="text-h6">{{ (storeFirebase.getFilteredItems('debt').total).toFixed(2) }}</span>
                </template>
            </q-banner>
        </div>
        <q-card class="my-card q-mb-md" v-for="(item, key) in storeFirebase.getFilteredItems('debt').items" 
            :key="key">            
            <q-card-section 
            class="bg-primary text-white q-px-sm q-py-xs row justify-between">
                <div class="date">          
                    <div class="text-subtitle2">{{ item.date }}</div>
                </div>
                <div class="time">
                    <div class="text-subtitle2">{{ item.time }}</div>
                </div>
            </q-card-section>
        
            <q-card-actions class="row justify-between q-pa-none" >
                <q-list class="full-width">
                    <q-item 
                    clickable 
                    @click="storeFirebase.step2({type: item.type, data: item, action: 'Update', itemKey: key})"
                    class="row justify-between items-center q-px-sm q-py-xs">
                        <div class="left row items-center" >
                            <q-avatar size="35px" class="q-mr-xs">
                                <q-img :src="item.img" width="35px"/>
                            </q-avatar>
                            <div class="title">
                                <strong>{{ item.title }}</strong>
                                <q-chip outline  size="12px" color="secondary" >{{ item.name }}</q-chip>
                            </div>
                        </div>
                        <div class="right">
                            <strong>{{ parseInt(item.amount).toFixed(2) }}</strong>
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
