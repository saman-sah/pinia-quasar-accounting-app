import { defineStore } from 'pinia';
import db  from '../db.json'
import _ from 'lodash'
import axios from 'axios'
export const useAccountingStore = defineStore('accounting', {
  state: () => ({
    saman: db.users.saman,
    base_url: 'http://localhost:3000/',
  }),
  getters: {
    sortedItems: (state) => {
      return state.saman= _.sortBy(state.saman, function(item){
        return new Date(item.date)
      }).reverse()
    } ,
    getSortedItems:(state)=> {
      let dates=[];
      let items={}
      state.saman.forEach(element => {
        dates.push(element.date)
      });
      dates=_.sortBy(dates, (date)=> { return new Date(date)})
      let datesUnique= [...new Set(dates)];
      datesUnique.forEach(date => {
        items[date]=[];
      });
      let subTotal=0
      state.saman.forEach(item => {
        datesUnique.forEach(date => {                    
          if(item.date== date) {        
            items[date].push(item)
          }
        });
      });
      return items
    },
    total:(state)=> {
      let total=0
      state.saman.forEach(item => {
        total+=item.amount
      });
      return total
    }
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
    getDataTest() {
      axios.get('http://localhost:3000/users',{
        headers: {
          Accept: "application/json",
        }
      })
      .then(res=> {
        console.log('ressssssss');
        console.log(res.data);
      })
    },
    postDataTest() {
      axios.get('http://localhost:3000/users/saman',{      
          id: 1,
          type: "expense",
          title: "new",
          amount: 550,
          time: "21: 30",
          date: "23 May 2021"
      })
      .then(res=> {
        console.log('ressssssss');
        console.log(res);
      })
    }
  },
});
