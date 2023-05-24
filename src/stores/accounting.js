import { defineStore } from 'pinia';
import _ from 'lodash'
export const useAccountingStore = defineStore('accounting', {
  state: () => ({
  }),
  getters: {
    
    // getIncomes:(state)=> {
    //   const filteredList = state.saman.filter((item) => item.type === "income")
    //   console.log(filteredList);
    //   return filteredList
    // },
    // getExpense:(state)=> {
    //   const filteredList = state.saman.filter((item) => item.type === "expense")
    //   console.log(filteredList);
    //   return filteredList
    // },
    // getDebts:(state)=> {
    //   const filteredList = state.saman.filter((item) => item.type === "debt")
    //   console.log(filteredList);
    //   return filteredList
    // }
  },
  actions: {
  },
});
