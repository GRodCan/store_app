import React from "react";
import { shallow } from "enzyme";
import Suppliers_list from "./Suppliers_list";

describe("Suppliers_list", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Suppliers_list />);
    expect(wrapper).toMatchSnapshot();
  });
});
