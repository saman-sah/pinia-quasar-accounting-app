<template>
    <div class="q-pa-md full-width" id="modal_step_2">
        <q-card class="my-card ">
            <!-- Title Selected Item -->
            <q-card-section>
                <q-card class="my-card row justify-between items-center card-new-item" flat bordered>
                    <q-card-section class="q-py-xs">
                        <div class="text-h6">
                            {{ storeFirebase.dataStep1.data.title }}
                        </div>
                        <div class="text-caption text-grey">
                            {{ storeFirebase.dataStep1.type }}
                        </div>
                    </q-card-section>

                    <q-card-section class="q-py-xs">
                        <q-img
                            class="rounded-borders"
                            :src="storeFirebase.dataStep1.data.img"
                            style="width: 40px"
                        />
                    </q-card-section>
                </q-card>
            </q-card-section>

            <!-- Selected Time -->
            <q-card-section class="q-pt-none">
                <q-input v-model="storeFirebase.dataStep1.data.time" outlined label-color="secondary" mask="time" :rules="['time']" label="Time">
                    <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="storeFirebase.dataStep1.data.time" bordered>
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
                <q-input v-model="storeFirebase.dataStep1.data.date" label-color="secondary" mask="date" :rules="['date']" outlined label="Date">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="storeFirebase.dataStep1.data.date">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary"  />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </q-card-section>

            <q-card-section class="q-pt-none" v-if="storeFirebase.dataStep1.type== 'debt'">
                <q-input 
                bottom-slots 
                v-model="storeFirebase.dataStep1.data.name" 
                label-color="secondary" 
                label="Name" 
                outlined/>                                
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input 
                bottom-slots 
                v-model.number="storeFirebase.dataStep1.data.amount" 
                label-color="secondary" 
                label="Amount" 
                outlined />
            </q-card-section>
            <q-seperator />
            <q-card-section class="q-pt-none row justify-between">
                <q-btn 
                color="primary" 
                glossy 
                :label="storeFirebase.dataStep1.action" 
                @click="storeFirebase.createNewItem()" 
                v-close-popup/>
                <q-btn
                v-if="storeFirebase.dataStep1.action== 'Update'"
                color="secondary" 
                glossy 
                label="Delete" 
                @click="confirmDelete = true"
                />
            </q-card-section>
            
            
            <q-separator />
        </q-card>
        <q-dialog v-model="confirmDelete" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <q-avatar icon="delete" color="primary" text-color="white" />
                    <span class="q-ml-sm">Are you sure to delete this item?</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Confirm" color="primary" @click="storeFirebase.deleteItem()"  v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
    
</template>
<script setup>
    import { ref } from 'vue'
    import { useFirebaseStore } from 'stores/firebase'
    const storeFirebase= useFirebaseStore();
    if(storeFirebase.dataStep1.action == 'Create') {
        let currentTime= new Date();    
        var DD = String(currentTime.getDate()).padStart(2, '0');
        var MM = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
        var YYYY = currentTime.getFullYear();
        storeFirebase.dataStep1.data.time= currentTime.getHours() + ":" + currentTime.getMinutes();
        storeFirebase.dataStep1.data.date= YYYY +'/'+ MM +'/'+ DD;
    }
    const confirmDelete= ref(false)
</script>
<style>
.card-new-item {
    border: 3px solid #6619d1;
}
</style>
    