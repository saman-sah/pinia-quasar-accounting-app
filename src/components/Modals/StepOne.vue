<template>
  <div class="q-pa-md full-width" id="modal_step_1">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
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

        <q-tab-panels v-model="tab" animated class="step_1_tab_panels" >
          <q-tab-panel name="expense">            
            <expenseTab 
            @step2="$emit('step2', $event)"
            :expenseItems="createData.expense ? createData.expense : {}"
            />
          </q-tab-panel>

          <q-tab-panel name="income">            
            <incomeTab 
            @step2="$emit('step2', $event)"
            :incomesItems="createData.incomes ? createData.incomes : {}"
            />
          </q-tab-panel>

          <q-tab-panel name="debt">
            <debtTab 
            @step2="$emit('step2', $event)"
            :debtsItems="createData.debts ? createData.debts : {}"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script setup>
  import expenseTab from './tabs/Expense.vue'
  import incomeTab from './tabs/Income.vue'
  import debtTab from './tabs/Debt.vue'
  import createData  from '../../data.json'
  // import { useAccountingStore } from 'stores/accounting'
  // import { storeToRefs } from 'pinia';
  import { ref } from 'vue'
  // const storeAccounting= useAccountingStore();
  const tab= ref('expense')
  // let income= ref('')
  // let expend= ref('')
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
  