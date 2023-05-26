<template>
  <div class="row justify-around no-wrap footer-links">    
    <q-item class="column link-item justify-center items-center q-py-sm"
     v-for="(link, index) in linksList"
    :key="index"
    clickable
    tag="a"
    :to="link.href"
    exact>
      <q-item-section avatar class="q-pa-none q-px-sm">
        <q-avatar v-if="link.src" rounded >
          <q-img  :src="link.src" class="absolute-center" width="32px" />
        </q-avatar>
        <q-btn v-else @click="storeFirebase.showModalStep1 = true" 
        outline round 
        size="lg" color="white" 
        :icon="link.icon" />
      </q-item-section>
      <q-item-section v-if="link.title" class="text-caption">
        {{ link.title }}
      </q-item-section>
    </q-item>
  </div>
  <q-dialog v-model="storeFirebase.showModalStep1">
    <CreateNewStep1 
    @step2="storeFirebase.step2($event)"/>
  </q-dialog>
  <q-dialog v-model="storeFirebase.showModalStep2">
    <CreateNewStep2/>
  </q-dialog>
</template>

<script setup>
import { useFirebaseStore } from 'stores/firebase'
import CreateNewStep1 from './modals/CreateNewStep1.vue'
import CreateNewStep2 from './modals/CreateNewStep2.vue'
const storeFirebase= useFirebaseStore();
  const linksList = [
    {
      title: 'Home',
      href: '/',
      src: './assets/icons/home-icon.png'
    },    
    {
      title: 'Expenses',
      href: '/expense',
      src: './assets/icons/menu-expenses.png'
    },
    {      
      icon: 'add'
    },
    {
      title: 'Debt',
      href: '/debt',
      src: './assets/icons/lend.png'
    },
    {
      title: 'Incomes',
      href: '/income',
      src: './assets/icons/other-income.png'
    },
  ]
  
</script>
<style>
.link-item img {
  /* width: 35px !important;
  margin: auto; */
}
</style>
