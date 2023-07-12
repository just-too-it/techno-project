import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with mods all true", () => {
    const expected = "someClass hovered bordered";
    expect(classNames("someClass", { hovered: true, bordered: true })).toBe(
      expected
    );
  });

  test("with mods true and false", () => {
    const expected = "someClass bordered";
    expect(classNames("someClass", { hovered: false, bordered: true })).toBe(
      expected
    );
  });

  test("with mods true and underfined", () => {
    const expected = "someClass bordered";
    expect(
      classNames("someClass", { hovered: undefined, bordered: true })
    ).toBe(expected);
  });

  test("with additional", () => {
    const expected = "someClass someClass1 someClass2 bordered";
    expect(
      classNames("someClass", { hovered: false, bordered: true }, [
        "someClass1",
        "someClass2",
      ])
    ).toBe(expected);
  });
});
