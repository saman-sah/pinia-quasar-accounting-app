<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-secondary row justify-between bg-dark q-px-lg q-py-md">
      <div class="logo">
      <!-- btn toggle menu sidebar -->
        <strong>Accounting App</strong>
      </div>
      <div v-if="storeFirebase.user" class="user">
        user
        <q-btn @click="storeFirebase.logOut()" color="primary">logout</q-btn>
      </div>
    </q-header>

    <q-footer elevated class="bg-dark">
        <q-toolbar>
          <q-toolbar-title><nav-menu/></q-toolbar-title>
        </q-toolbar>
    </q-footer>
    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import navMenu from 'components/Menu.vue'
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();

</script>
