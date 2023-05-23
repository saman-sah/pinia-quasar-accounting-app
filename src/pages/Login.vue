<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
            <q-card>
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
            >
                <q-tab name="login" label="Login" />
                <q-tab name="register" label="Register" />
            </q-tabs>
  
            <q-separator />
  
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login">
                    <q-input outlined v-model="formData.email" label="Email"  />
                    <q-input outlined v-model="formData.password" label="Password" class="q-my-md"/>
                    <div class="row justify-end">
                        <q-btn color="primary" label="Login" @click="storeFirebase.login(formData)"/>
                    </div>
                </q-tab-panel>
  
                <q-tab-panel name="register">
                    <q-input outlined v-model="formData.name" label="Name"  />
                    <q-input outlined v-model="formData.email" label="Email"  class="q-my-md"/>
                    <q-input outlined v-model="formData.password" label="Password" class="q-mb-md"/>
                    <div class="row justify-end">
                        <q-btn color="primary" label="Register" @click="storeFirebase.register(formData)"/>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
      </div>
    </div>
  </template>

<script setup>
import { reactive, ref } from "vue";
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();
const tab=ref('login')
const formData= reactive({
    name: '',
    email: '',
    password:''
})
</script>

<style>

</style>