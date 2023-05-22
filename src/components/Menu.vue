<template>
  <div class="row justify-around no-wrap footer-links">    
    <q-item class="column link-item justify-center items-center"
     v-for="(link, index) in linksList"
    :key="index+link.title"
    clickable
    tag="a"
    :to="link.href">
      <q-item-section avatar class="q-pa-none q-px-sm">
        <q-avatar v-if="link.src" rounded>
          <q-img  :src="link.src" class="absolute-center" />
        </q-avatar>
        <q-btn v-else @click="createNewStep1 = true" 
        outline round 
        size="lg" color="white" 
        :icon="link.icon" />
      </q-item-section>
      <q-item-section v-if="link.title" class="text-overline">
        {{ link.title }}
      </q-item-section>
    </q-item>
  </div>
  <q-dialog v-model="createNewStep1">
    <CreateNewStep1 
    @step2="step2($event)"/>
  </q-dialog>
  <q-dialog v-model="createNewStep2">
    <CreateNewStep2 
    :dataStep1="dataStep1"/>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import CreateNewStep1 from './modals/CreateNewStep1.vue'
import CreateNewStep2 from './modals/CreateNewStep2.vue'
  const createNewStep1=ref(false)
  const createNewStep2=ref(false)
  const dataStep1=ref({})
  const linksList = [
    {
      title: 'Home',
      href: '/',
      src: './assets/icons/home-icon.png'
    },    
    {
      title: 'Expenses',
      href: '/expend',
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
  
  function step2(params) {
    this.createNewStep2= true
    this.dataStep1= params;
  }
</script>
<style>
.link-item img {
  /* width: 35px !important;
  margin: auto; */
}
</style>
