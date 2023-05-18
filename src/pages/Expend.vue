<template>
    <q-page class="q-pa-md row justify-between content-between">
        <q-list class="col-12" separator>
            <q-item v-for="n in 10" class="row justify-between col">
                <q-item-section>
                    <q-item-label>22/2/2023</q-item-label>
                    <q-item-label caption lines="2">Description for this item</q-item-label>
                </q-item-section>

                <q-item-section side top>
                    <q-item-label>- 500,000</q-item-label>
                </q-item-section>
            </q-item>            
        </q-list>
    </q-page>
</template>

<script setup>
import { useAccountingStore } from 'stores/accounting'
import { storeToRefs } from 'pinia';
const storeAccounting= useAccountingStore();
</script>
