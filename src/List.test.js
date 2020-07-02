import React from "react";
import { render } from "@testing-library/react";

import List from "./List";

test('Display empty component with class "ptm_list"', () => {
  const { container } = render(<List />);
  expect(container.firstChild).toMatchInlineSnapshot(
    `
    <div
      class="ptm_list"
    >
      <ul
        class="ptm_list__items"
      />
    </div>
    `
  );
});

test("Show list items from data", () => {
  const controlItems = [
    { key: 1, data: "item 1" },
    { key: 2, data: "item 2" },
    { key: 3, data: "item 3" },
  ];
  const { getByText } = render(<List items={controlItems} />);
  expect(getByText("item 1")).toBeInTheDocument();
  expect(getByText("item 2")).toBeInTheDocument();
  expect(getByText("item 3")).toBeInTheDocument();
});
