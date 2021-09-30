const { handleSubmit } = require("../client/js/handleFormSubmit");

test(" handleSubmit() function is defined", () => {
  expect(handleSubmit).toBeDefined();
});

test("handleSubmit() should be a function", () => {
  expect(typeof handleSubmit).toBe("function");
});
