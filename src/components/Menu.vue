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
        <q-btn v-else @click="createNew = true" 
        outline round 
        size="lg" color="white" 
        :icon="link.icon" />
      </q-item-section>
      <q-item-section v-if="link.title" class="text-overline">
        {{ link.title }}
      </q-item-section>
    </q-item>
  </div>
  <q-dialog v-model="createNew">
    <CreateNew />
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import CreateNew from './Modals/CreateNew.vue'
  const createNew=ref(false)
  const linksList = [
    {
      title: 'Income',
      href: '/income',
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
      title: 'Wallet',
      href: '/expend',
      src: './assets/images/wallet.svg'
    },
    {
      title: 'Pos',
      href: '/expend',
      src: './assets/images/pos.svg'
    },
  ]
 
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
