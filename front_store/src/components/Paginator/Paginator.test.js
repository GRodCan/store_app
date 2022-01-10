import React from "react";
import { shallow } from "enzyme";
import Paginator from "./Paginator";

describe("Paginator", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Paginator />);
    expect(wrapper).toMatchSnapshot();
  });
});
