<template>
    <q-page class="q-pa-sm column ">
        <q-card class="my-card q-mb-md" v-for="item in expenses" 
            :key="item.title">
            <q-card-section 
            class="bg-grey-8 text-white q-pa-sm row justify-between">
                <div class="date">          
                    <div class="text-subtitle2">{{ item.date }}</div>
                </div>
                <div class="time">
                    {{ item.time }}
                </div>
            </q-card-section>
        
            <q-card-actions class=" bg-blue-grey-3 row justify-between q-pa-none q-pr-sm" >
                <div class="left row items-center">
                    <q-avatar>
                        <q-img :src="item.img" width="25px" />
                    </q-avatar>
                    <div class="title">
                        {{ item.title }}
                    </div>
                </div>
                <div class="right">
                    00.00
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
