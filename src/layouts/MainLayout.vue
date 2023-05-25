<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-secondary row justify-between items-center bg-dark q-px-lg q-py-md">
      <div class="logo">
      <!-- btn toggle menu sidebar -->
        <strong>Accounting App</strong>
      </div>
      <div v-if="storeFirebase.user" class="user">
        <q-btn-dropdown
        v-if="storeFirebase.userInfo"
        split
        color="primary"
        push
        glossy
        no-caps
        icon="account_box"
        :label="storeFirebase.userInfo.name"
        @click="onMainClick"
        >
          <q-list>
            <q-item clickable v-close-popup @click="storeFirebase.logOut()">
              <q-item-section avatar>
                <q-avatar icon="logout" color="secondary" text-color="white" size="sm" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
