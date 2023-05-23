<template>
    <q-page class="q-pa-md column ">
        <div class="total q-mb-md">
            <q-banner dense inline-actions class="text-white bg-secondary" rounded>
                <span class="text-h6">Total</span>
                <template v-slot:action>
                    <span class="text-h6">{{ (storeAccounting.total).toFixed(2) }}</span>
                </template>
            </q-banner>
        </div>
        <q-card class="my-card q-mb-md" v-for="item in expenses" 
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
import { useAccountingStore } from 'stores/accounting'
import { onMounted, ref } from 'vue';
const storeAccounting= useAccountingStore();
const expenses=ref(null)
onMounted(() => {
    expenses.value=storeAccounting.getExpense
})
</script>
