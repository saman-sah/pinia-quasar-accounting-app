<template>
    <div class="q-pa-md full-width" id="modal_step_2">
        <q-card class="my-card ">
            <!-- Title Selected Item -->
            <q-card-section>
                <q-card class="my-card row justify-between items-center card-new-item" flat bordered>
                    <q-card-section class="q-py-xs">
                        <div class="text-h6">
                            {{ dataStep1.data.title }}
                        </div>
                        <div class="text-caption text-grey">
                            {{ dataStep1.type }}
                        </div>
                    </q-card-section>

                    <q-card-section class="q-py-xs">
                        <q-img
                            class="rounded-borders"
                            :src="dataStep1.data.src"
                            style="width: 40px"
                        />
                    </q-card-section>
                </q-card>
            </q-card-section>

            <!-- Selected Time -->
            <q-card-section class="q-pt-none">
                <q-input v-model="dataItem.time" outlined label-color="secondary" mask="time" :rules="['time']" label="Time">
                    <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="dataItem.time" bordered>
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" />
                                    </div>
                                </q-time>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </q-card-section>

            <!-- Selected Date -->
            <q-card-section class="q-pt-none">
                <q-input v-model="dataItem.date" label-color="secondary" mask="date" :rules="['date']" outlined label="Date">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="dataItem.date">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary"  />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </q-card-section>

            <q-card-section class="q-pt-none" v-if="dataStep1.type== 'debt'">
                <q-input bottom-slots v-model="dataItem.name" label-color="secondary" label="Name" outlined>
                    
                </q-input>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input bottom-slots v-model.number="dataItem.amount" label-color="secondary" label="Amount" outlined>
                    <template v-slot:append>
                        <q-btn 
                        round 
                        dense 
                        flat 
                        icon="send" 
                        @click="create()" 
                        v-close-popup
                        />
                    </template>
                </q-input>
            </q-card-section>

            <q-separator />
        </q-card>
    </div>
</template>
<script setup>
import { reactive, toRefs } from "vue"
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();
    let currentTime= new Date();
    const { dataStep1 }= toRefs(props)
    const props =defineProps({
        dataStep1: {
            type: Object,
        }
    })
    var DD = String(currentTime.getDate()).padStart(2, '0');
    var MM = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    var YYYY = currentTime.getFullYear();
    const dataItem= reactive({
        time: currentTime.getHours() + ":" + currentTime.getMinutes(),
        date: YYYY +'/'+ MM +'/'+ DD,     
        amount: 0,
        name: '',
        title: props.dataStep1.data.title ? props.dataStep1.data.title : '',
        type: props.dataStep1.type ? props.dataStep1.type : '',
        img: props.dataStep1.data.src ? props.dataStep1.data.src : ''
    })
    function create() {
        storeFirebase.createNewItem(this.dataItem);
    }
</script>
<style>
.card-new-item {
    border: 3px solid #6619d1;
}
</style>
    