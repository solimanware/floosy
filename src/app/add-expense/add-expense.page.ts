import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get, set } from '../services/storage.service';
export interface IExpense {
  name: string;
  amount: number;
  date: string;
  category: string;
  subCategory: string;
  notes: string;
}
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})


  export class AddExpensePage implements OnInit {
  expense: IExpense = {
    name: '',
    amount: 0,
    date: '',
    category: '',
    subCategory: '',
    notes: ''
  };
  constructor(public router: Router) { }

  ngOnInit() {
  }
  addExpense(){
    console.log("add expense", this.expense);
    get("expenses").then(expenses => {
      if(expenses){
        expenses.push(this.expense);
      }
      else{
        expenses = [this.expense];
      }
      set("expenses", expenses);
    });
    //go back to home page
    this.router.navigateByUrl("/tabs/home");

  }


}
