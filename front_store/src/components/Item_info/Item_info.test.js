import React from "react";
import { shallow } from "enzyme";
import Item_info from "./Item_info";

describe("Item_info", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Item_info />);
    expect(wrapper).toMatchSnapshot();
  });
});
