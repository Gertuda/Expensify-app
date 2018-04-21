import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../testStore";

test("should render AddExpensePage correctly", () => {
  const startAddExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage addExpense={startAddExpense} history={history} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  const startAddExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
