<template>
    <q-page v-if="storeFirebase.getDebts && storeFirebase.getDebts.total >0"
    class="q-pa-md column">
        <div class="total q-mb-md">
            <q-banner dense inline-actions class="text-white bg-secondary" rounded>
                <span class="text-h6">Total</span>
                <template v-slot:action>
                    <span class="text-h6">{{ (storeFirebase.getDebts.total).toFixed(2) }}</span>
                </template>
            </q-banner>
        </div>
        <q-card class="my-card q-mb-md" v-for="item in storeFirebase.getDebts.items" 
            :key="item.title">
            <q-card-section 
            class="bg-primary text-white q-pa-sm row justify-between">
                <div class="date">          
                    <div class="text-subtitle2">{{ item.date }}</div>
                </div>
                <div class="time">
                    {{ item.time }}
                </div>
            </q-card-section>
        
            <q-card-actions class="row justify-between q-pa-none q-pr-sm" >
                <div class="left row items-center">
                    <q-avatar>
                        <q-img :src="item.img" width="25px" />
                    </q-avatar>
                    <div class="title">
                        <strong>{{ item.title }}</strong>
                    </div>
                </div>
                <div class="right">
                    <strong>{{ (item.amount).toFixed(2) }}</strong>
                </div>
            </q-card-actions>
        </q-card>
    </q-page>
</template>

<script setup>
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();
</script>
