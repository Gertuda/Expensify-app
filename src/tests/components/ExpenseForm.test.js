import React from "react";
import { shallow } from "enzyme";
import expenses from "../testStore";
import ExpenseForm from "../../components/ExpenseForm";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseFrom with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
