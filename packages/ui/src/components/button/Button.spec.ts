import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "./Button.vue";

describe("Button", () => {
  it("renders slot text", () => {
    const wrapper = mount(Button, {
      slots: { default: "Submit" }
    });
    expect(wrapper.text()).toContain("Submit");
  });

  it("supports variant class", () => {
    const wrapper = mount(Button, {
      props: { variant: "destructive" },
      slots: { default: "Delete" }
    });
    expect(wrapper.classes().join(" ")).toContain("bg-[rgb(var(--drift-destructive))]");
  });
});
