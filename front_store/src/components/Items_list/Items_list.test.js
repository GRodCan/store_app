import React from "react";
import { shallow } from "enzyme";
import Items_list from "./Items_list";

describe("Items_list", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Items_list />);
    expect(wrapper).toMatchSnapshot();
  });
});
