import React from "react";
import { shallow } from "enzyme";
import Burger from "./Burger";

describe("Burger", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Burger />);
    expect(wrapper).toMatchSnapshot();
  });
});
