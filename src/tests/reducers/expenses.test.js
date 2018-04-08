import expensesReducer from "../../reducers/expenses";
import expenses from "../testStore";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expenses", () => {
  const expense = {
    description: "Some des",
    note: "",
    amount: 111,
    createdAt: 123123,
    id: "4"
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expenses", () => {
  const description = "New Descrition";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(description);
});
test("should edit an expenses", () => {
  const description = "New Descrition";
  const action = {
    type: "EDTI_EXPENSE",
    id: "-1",
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
