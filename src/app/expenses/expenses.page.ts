import { Component, OnInit } from "@angular/core";
import { IExpense } from "../add-expense/add-expense.page";
import { get } from "../services/storage.service";

@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.page.html",
  styleUrls: ["./expenses.page.scss"],
})
export class ExpensesPage implements OnInit {
  expenses: IExpense[] = [];
  constructor() {}

  async ngOnInit() {
    this.expenses = (await get("expenses")) || [];
    console.log(this.expenses);
  }
}
