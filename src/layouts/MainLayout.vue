<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-secondary">
      <q-toolbar class="bg-dark">
      <!-- btn toggle menu sidebar -->
        <strong>Accounting App</strong>
      </q-toolbar>
    </q-header>
    <q-footer elevated class="bg-dark">
        <q-toolbar>
          <q-toolbar-title><nav-menu/></q-toolbar-title>
        </q-toolbar>
      </q-footer>
    
    
    <q-drawer v-model="leftDrawerOpen"
    show-if-above
    bordered
    ></q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Menu from 'components/Menu.vue'



export default defineComponent({
  components: {
    'nav-menu':Menu
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
