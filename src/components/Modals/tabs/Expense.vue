<template>
    <q-list >
        <q-item v-for="(item, index) in expenseItems"
        :key="index"
        clickable 
        v-ripple 
        class="column">
            <div class="row">
                <q-item-section avatar>
                    <q-avatar rounded class="img-icon-items main-item" size="50px">
                        <q-img
                        :src="item.src"
                        :ratio="1"
                        style="width: 30px"
                        />
                    </q-avatar>
                </q-item-section>
                <q-item-section class="text-h6">{{ item.title }}</q-item-section>
            </div>        
            <q-item v-for="subItem in item.subItems"
            :key="subItem.title+100"
            clickable v-ripple
            @click="$emit('step2', {type:'expense' , data: subItem})"
            v-close-popup>
                <q-item-section avatar>
                    <!-- <q-icon color="primary" :name="subItem.icon" /> -->
                    <q-avatar rounded class="img-icon-items nested-item" size="50px">
                        <q-img
                        :src="subItem.src"
                        :ratio="1"
                        style="width: 30px"
                        />
                    </q-avatar>
                </q-item-section>

                <q-item-section class="text-subtitle2">{{ subItem.title }}</q-item-section>
            </q-item>
        </q-item>
    </q-list>
</template>

<script setup>
    const props = defineProps({
        expenseItems: Object
    })
</script>

<style >
.img-icon-items {
    border-radius: 50%;
}
.img-icon-items.main-item {
    border:2px solid #ff6f00;    
}
.img-icon-items.nested-item {
    border: 1px solid #6619d1;    
}
</style>