<template>
  <router-view />
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    // get status
    console.log($q.dark.isActive) // true, false

    // get configured status
    console.log($q.dark.mode) // "auto", true, false

    // set status
    $q.dark.set(true) // or false or "auto"

    // toggle
    $q.dark.toggle()
    }
  }
</script>
