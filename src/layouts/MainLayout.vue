<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
      <!-- btn toggle menu sidebar -->
        <q-btn @click="toggleLeftDrawer"
        flat dense round icon="menu" aria-label="Menu"
        />
        <!-- heading title link to home -->
        <q-item clickable tag="a" to="/">
          <q-item-section>
            <q-item-label class="q-color-white">Accounting App</q-item-label>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>
    <q-footer elevated>
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
