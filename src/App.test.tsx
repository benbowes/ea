import { input } from "./input";
import { getOutput } from "./transformData";

test("Given expected input, output is as expected", () => {
  expect(getOutput(input)).toMatchSnapshot();
});
