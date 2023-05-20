<template>
    <div class="q-pa-md full-width">
        <q-card class="my-card">
            <!-- Title Selected Item -->
            <q-card-section>
                <q-chip class="full-width">
                    <q-avatar  text-color="white" size="lg">
                        <img :src="dataStep1.data.src">
                    </q-avatar>
                    {{ dataStep1.data.title }}
                </q-chip>
            </q-card-section>
            <!-- Selected Time -->
            <q-card-section class="q-pt-none">
                <q-chip class="full-width">
                    <q-avatar  text-color="white" size="lg">
                        <q-btn icon="access_time" round color="primary">
                            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="dataItem.time">
                                <div class="row items-center justify-between q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                </div>
                                </q-time>
                            </q-popup-proxy>
                        </q-btn>
                    </q-avatar>
                    {{ dataItem.time }}
                </q-chip>

            </q-card-section>
            <!-- Selected Date -->
            <q-card-section class="q-pt-none">
                <q-chip class="full-width">
                    <q-avatar text-color="white" size="lg">
                        <q-btn icon="event" round color="primary">
                            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="dataItem.date">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-btn>
                    </q-avatar>
                    {{ dataItem.date }}
                </q-chip>

            </q-card-section>
            <q-card-section class="q-pt-none">
                <q-input
                v-model.number="dataItem.amount"
                type="number"
                outlined
                />
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
            <!-- <q-btn v-close-popup flat color="primary" label="Reserve" /> -->
                <q-btn 
                color="primary" 
                label="Create" 
                @click="create()"
                v-close-popup/>
            </q-card-actions>
        </q-card>
        </div>
</template>
<script setup>
import { defineProps,reactive, toRefs } from "vue"
    let currentTime= new Date();
    const props = defineProps({
        dataStep1: Object,
    })
    const { dataStep1 }= toRefs(props)
    let currentDate= currentTime.toUTCString().slice(5, 16);
    const dataItem= reactive({
        time: currentTime.getHours() + ":" + currentTime.getMinutes(),
        date: currentDate,     
        amount: 0   
    })
    function create() {
        console.log('creat this.dataItem');
        this.dataItem.title= this.dataStep1.data.title
        console.log(this.dataStep1.type);
        console.log(this.dataItem);
    }
</script>
<style>
</style>
    