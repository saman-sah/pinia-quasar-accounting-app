<template>
  <q-ajax-bar
    ref="bar"
    position="bottom"
    color="accent"
    size="10px"
    skip-hijack
  />
  <router-view />
</template>

<script setup>
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { useFirebaseStore } from 'stores/firebase'
  const storeFirebase= useFirebaseStore();
  const bar= ref(null)
  onBeforeMount(()=> {
    storeFirebase.handleAuthStateChange();    
  })
  onMounted(() => {
    storeFirebase.setBar(bar.value);
  })

</script>
