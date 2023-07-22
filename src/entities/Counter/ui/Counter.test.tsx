import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { userEvent } from '@storybook/testing-library';
import { Counter } from "./Counter";

describe("Counter", () => {
  test("render", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("increment", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const incrementBtn = screen.getByTestId("increment");
    userEvent.click(incrementBtn)
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const decrementBtn = screen.getByTestId("decrement");
    userEvent.click(decrementBtn)
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
