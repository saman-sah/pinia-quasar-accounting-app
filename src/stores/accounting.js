import { defineStore } from 'pinia';

export const useAccountingStore = defineStore('accounting', {
  state: () => ({
    total: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    incomeExpend(payload) {
      console.log(payload);
      if(payload.title === 'income') {
        this.total +=payload.action
        this.total.toFixed(2)
      }else {
        this.total -=payload.action
        this.total.toFixed(2)
      }      
    },
  },
});
