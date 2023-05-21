<template>
  <div class="row justify-around no-wrap footer-links">    
    <q-item class="column link-item justify-center items-center"
     v-for="(link, index) in linksList"
    :key="index"
    clickable
    tag="a"
    :to="link.href">
      <q-item-section avatar class="q-pa-none q-px-sm">
        <q-avatar v-if="link.src" rounded>
          <img  :src="link.src" class="absolute-center">
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
      src: './assets/images/income.svg'
    },    
    {
      title: 'Expend',
      href: '/expend',
      src: './assets/images/save.svg'
    },
    {      
      icon: 'add'
    },
    {
      title: 'Debt',
      href: '/debt',
      src: './assets/images/wallet.svg'
    },
    {
      title: 'Income',
      href: '/income',
      src: './assets/images/income.svg'
    },
  ]
  
  function step2(params) {
    this.createNewStep2= true
    this.dataStep1= params;
    console.log('dataStep1');
    console.log(this.dataStep1);
  }
</script>
<style>
/* .footer-links {
  width:100%;
  overflow-x: auto;
} */
.link-item img {
  width: 35px !important;
  margin: auto;
}
</style>
