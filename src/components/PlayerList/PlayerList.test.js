import React from "react";
import { render } from "@testing-library/react";
import PlayerList from "./PlayerList";

describe("PlayerList tests", () => {
  it("should render", () => {
    expect(render(<PlayerList />)).toBeTruthy();
  });
});
