import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Input from "./Input.vue";

describe("Input", () => {
  it("emits model update on input", async () => {
    const wrapper = mount(Input);
    const input = wrapper.get("input");
    await input.setValue("hello");
    expect(wrapper.emitted()["update:modelValue"]?.[0]).toEqual(["hello"]);
  });
});
