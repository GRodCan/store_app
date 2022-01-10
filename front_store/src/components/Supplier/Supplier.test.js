import React from "react";
import { shallow } from "enzyme";
import Supplier from "./Supplier";

describe("Supplier", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Supplier />);
    expect(wrapper).toMatchSnapshot();
  });
});
