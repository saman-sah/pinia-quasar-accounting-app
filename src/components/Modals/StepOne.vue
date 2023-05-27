<template>
  <div class="q-pa-md full-width" id="modal_step_1">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="storeFirebase.selectedTab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="expense" label="Expense" />
          <q-tab name="income" label="Income" />
          <q-tab name="debt" label="Debt" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="storeFirebase.selectedTab" animated class="step_1_tab_panels" >
          <q-tab-panel name="expense">            
            <expenseTab 
            @step2="$emit('step2', $event)"
            :expenseItems=" {}"
            />
          </q-tab-panel>

          <q-tab-panel name="income">            
            <incomeTab 
            @step2="$emit('step2', $event)"
            :incomesItems="{}"
            />
          </q-tab-panel>

          <q-tab-panel name="debt">
            <debtTab 
            @step2="$emit('step2', $event)"
            :debtsItems="{}"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script setup>
  import expenseTab from '../../components/modals/tabs/Expense.vue'
  import incomeTab from '../../components/modals/tabs/Income.vue'
  import debtTab from '../../components/modals/tabs/Debt.vue'
  // import createData  from '../../../public/assets/data.json'
  import { useFirebaseStore } from 'stores/firebase'
  const storeFirebase= useFirebaseStore();
</script>
<style>
  .inputs-section {
    width: 100% !important
  }
  #modal_step_1 {
    overflow: hidden;
  }
  #modal_step_1 .step_1_tab_panels {
    height: 80vh;
    scrollbar-width: thin;
  }
  #modal_step_1 .step_1_tab_panels>.q-panel {
    scrollbar-width: thin;
  }
  #modal_step_1 .step_1_tab_panels>.q-panel::-webkit-scrollbar {
    width: 6px;
    scrollbar-color: #6619d1
  }
  #modal_step_1 .step_1_tab_panels>.q-panel::-webkit-scrollbar-track {
    background: #ff6f00;
    border-radius: 50px;
  }
  #modal_step_1 .step_1_tab_panels>.q-panel::-webkit-scrollbar-thumb {
    background-color: #ff6f00;
    border-radius: 50px;
    border: 3px solid #6619d1;
  }
</style>
  