<template>
    <div class="text-h6">expense</div>
    <q-list >
        <q-item v-for="(item, index) in expenseItems"
        :key="index"
        clickable 
        v-ripple 
        class="column">
            <div class="row">
                <q-item-section avatar>
                    <q-avatar rounded class="img-icon-items bg-blue">
                        <q-img
                        :src="item.src"
                        :ratio="1"
                        style="width: 20px"
                        />
                    </q-avatar>
                </q-item-section>
                <q-item-section>{{ item.title }}</q-item-section>
            </div>        
            <q-item v-for="subItem in item.subItems"
            :key="subItem.title+100"
            clickable v-ripple
            @click="$emit('step2', {type:'expense' , data: subItem})"
            v-close-popup>
                <q-item-section avatar>
                    <!-- <q-icon color="primary" :name="subItem.icon" /> -->
                    <q-avatar rounded class="img-icon-items bg-red">
                        <q-img
                        :src="subItem.src"
                        :ratio="1"
                        style="width: 20px"
                        />
                    </q-avatar>
                </q-item-section>

                <q-item-section>{{ subItem.title }}</q-item-section>
            </q-item>
        </q-item>
    </q-list>
</template>

<script setup>
    const props = defineProps({
        expenseItems: Object
    })
</script>

<style>
.img-icon-items {
    border-radius: 50%;
    border: 1px solid #ccc;
    
}
</style>