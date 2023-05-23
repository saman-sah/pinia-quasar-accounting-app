import { defineStore } from 'pinia';
import _ from 'lodash'
export const useAccountingStore = defineStore('accounting', {
  state: () => ({
  }),
  getters: {
    // total:(state)=> {
    //   let total=0
    //   state.saman.forEach(item => {
    //     total+=item.amount
    //   });
    //   return total
    // },
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
