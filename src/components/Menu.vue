<template>
  <div class="q-pa-md row justify-around q-gutter-md">
    <q-card class="my-card col-4" v-for="link in linksList">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-section>
        <div class="text-subtitle3">by John Doe</div>
      </q-card-section>
    </q-card>
    </div>
  <!-- <q-item
    clickable
    tag="a"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item> -->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const linksList = [
      {
        title: 'Income',
        icon: 'school',
        link: '/income'
      },
      {
        title: 'Expend',
        icon: 'code',
        link: '/expend'
      },
    ]
    return {
      linksList
    }
  }
})
</script>
