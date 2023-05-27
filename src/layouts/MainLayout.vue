<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-secondary row justify-between items-center bg-dark q-px-lg q-py-sm">
      <div class="search">  
        <q-input
        v-model="storeFirebase.searchedTxt" 
        label-color="secondary" 
        placeholder="Search" 
        color="secondary"
        text-color="secondary"
        dense>
        <template v-slot:prepend>
          <q-icon color="secondary" name="search" />
        </template>
        </q-input>
      </div>
      <div v-if="storeFirebase.user" class="user">
        <q-btn-dropdown
        v-if="storeFirebase.userInfo"
        size="sm"
        split
        color="primary"
        push
        glossy
        no-caps
        icon="account_box"
        :label="storeFirebase.userInfo.name"
        @click="onMainClick"
        >
          <q-list>
            <q-item clickable v-close-popup @click="storeFirebase.logOut()">
              <q-item-section avatar>
                <q-avatar icon="logout" color="secondary" text-color="white" size="sm" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-header>

    <q-footer elevated class="bg-dark">
        <q-toolbar>
          <q-toolbar-title><nav-menu/></q-toolbar-title>
        </q-toolbar>
    </q-footer>
    
    <q-dialog v-model="storeFirebase.showModalStep1">
      <StepOneModal 
      @step2="storeFirebase.step2($event)"/>
    </q-dialog>
    <q-dialog v-model="storeFirebase.showModalStep2">
      <StepTwoModal/>
    </q-dialog>
    <q-page-container>        
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import navMenu from 'components/Menu.vue'
import StepOneModal from '../components/modals/steps/StepOne.vue'
import StepTwoModal from '../components/modals/steps/StepTwo.vue'
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();
</script>
<style>
.search input{
  color: #ff6f00;
}
</style>
