const { checkURL } = require("../client/js/checkURL");

test("checkURL() function is defined", () => {
  expect(checkURL).toBeDefined();
});

test("checkURL() should be a function", () => {
  expect(typeof checkURL).toBe("function");
});

test("checkURL should retrieve false on wrong URL", () => {
  expect(checkURL("https://mohamedwsalah.com/")).toBe(true);
});

test("checkURL should retrieve true on Right URL", () => {
  expect(checkURL("http:NotAURL")).toBe(false);
});
