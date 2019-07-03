import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Selector from "./Select";

describe("Selector", () => {
  const setSelectedDistance = jest.fn();
  const renderer = ReactTestRenderer.create(
    <Selector setSelectedDistance={setSelectedDistance} />
  );
  const testInstance = renderer.root;

  test("that it renders 8 mile options", () => {
    expect(testInstance.children[0].props.children.length).toBe(8);
  });

  test("that it invokes the setSelectedDistance function prop onChange", () => {
    testInstance.children[0].props.onChange({
      target: { value: 25 }
    });
    expect(setSelectedDistance).toHaveBeenCalledWith(25);
  });
});
