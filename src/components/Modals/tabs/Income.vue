<template>
    <div class="text-h6">Incomes</div>
    <q-list >
        <q-item v-for="(item, index) in incomesItems"
        :key="index"
        clickable 
        v-ripple 
        class="column"
        @click="$emit('step2', {type: 'income', data: item, action: 'Create'})"
        v-close-popup>
            <div class="row">
                <q-item-section avatar>
                    <q-avatar rounded class="img-icon-items main-item">
                        <q-img
                        :src="item.img"
                        :ratio="1"
                        style="width: 20px"
                        />
                    </q-avatar>
                </q-item-section>
                <q-item-section>{{ item.title }}</q-item-section>
            </div>
        </q-item>
    </q-list>
</template>

<script setup>
import { onMounted } from 'vue'
    const props = defineProps({
        incomesItems: Object
    })
    onMounted(() => {
        // console.log('this.expenseItems');
        // console.log(this.expenseItems);
    })

</script>
