<template>
  <div class="row justify-around no-wrap footer-links">    
    <q-item class="column link-item justify-between items-center  q-pa-xs"
     v-for="(link, index) in linksList"
    :key="index"
    clickable
    tag="a"
    :to="link.href"
    exact
    :disable="!storeFirebase.user">
      <q-item-section avatar class="q-pa-none self-center ">
        <q-avatar v-if="link.src" rounded  class="q-mx-auto">
          <q-img  :src="link.src" class="absolute-center" width="38px" />
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
</template>

<script setup>
import { useFirebaseStore } from 'stores/firebase'
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
