<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useFirebaseStore } from 'stores/firebase'
const storeFirebase= useFirebaseStore();
onBeforeMount(()=> {
  storeFirebase.handleAuthStateChange();
})
</script>
