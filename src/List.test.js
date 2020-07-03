import React from "react";
import { render, fireEvent } from "@testing-library/react";

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
  const controllItems = [
    { key: 1, data: "item 1" },
    { key: 2, data: "item 2" },
    { key: 3, data: "item 3" },
  ];
  const { getByText } = render(<List items={controllItems} />);
  expect(getByText("item 1")).toBeInTheDocument();
  expect(getByText("item 2")).toBeInTheDocument();
  expect(getByText("item 3")).toBeInTheDocument();
});

test("Every item mast contain a button", () => {
  const controllItems = [
    { key: 1, data: "item 1" },
    { key: 2, data: "item 2" },
  ];
  const { container } = render(<List items={controllItems} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
  <div
    class="ptm_list"
  >
    <ul
      class="ptm_list__items"
    >
      <li
        class="ptm_list__item"
      >
        <button
          class="ptm_list__button"
        >
          item 1
        </button>
      </li>
      <li
        class="ptm_list__item"
      >
        <button
          class="ptm_list__button"
        >
          item 2
        </button>
      </li>
    </ul>
  </div>
  `);
});

describe("click on itmem", () => {
  const controllItems = [
    { key: 1, data: "Press Item 1" },
    { key: 2, data: "Press Item 2" },
    { key: 3, data: "Press Item 3" },
  ];

  let resultValue;

  const { getByText } = render(
    <List items={controllItems} onSelect={(result) => (resultValue = result)} />
  );

  fireEvent.click(getByText(/Press Item 2/));

  test("must return an array", () => {
    expect(resultValue).toBeInstanceOf(Array);
  });

  test("must return an array with one item", () => {
    expect(resultValue).toHaveLength(1);
  });

  test("must return an array where item equal second element of controllItems", () => {
    expect(resultValue[0]).toEqual(controllItems[1]);
  });
});
