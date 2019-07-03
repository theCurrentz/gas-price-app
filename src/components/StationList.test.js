import React from "react";
import ReactTestRenderer from "react-test-renderer";
import StationList from "./StationList";
import Prompt from "./Prompt";

describe("StationList", () => {
  test("that it renders the prompt", () => {
    const renderer = ReactTestRenderer.create(
      <StationList selectedDistance={15} />
    );
    const testInstance = renderer.root;
    expect(testInstance.findByType(Prompt)).toBeTruthy();
  });
});
