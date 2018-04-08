import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../../components/Header";
import testStore from "../testStore";

test("should render Heder correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
