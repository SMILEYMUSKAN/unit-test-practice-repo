import forEach from "./ForEach";

describe("Testing forEach function", () => {
  it("The mock function was called twice", () => {
    var mockCallBack = jest.fn((value) => {
      console.log("Return Value", value);
      return value + 10;
    });
    forEach([10, 60], mockCallBack);
    expect(mockCallBack.mock.calls).toHaveLength(2);
  });

  it("The first argument of the first call to the function was 10", () => {
    var mockCallBack = jest.fn((value) => {
      console.log("Return value", value);
      return value + 10;
    });

    forEach([10, 50], mockCallBack);
    expect(mockCallBack.mock.calls[0][0]).toBe(10);
  });

  it("The first argument of the second call to the function was 50", () => {
    var mockCallBack = jest.fn((value) => {
      console.log("Return value", value);
      return value + 10;
    });

    forEach([10, 50], mockCallBack);
    expect(mockCallBack.mock.calls[1][0]).toBe(50);
  });

  it("The return value of the first call to the function was 50", () => {
    var mockCallBack = jest.fn((value) => {
      console.log("Return value", value);
      return value + 10;
    });

    forEach([40, 70], mockCallBack);
    expect(mockCallBack.mock.results[0].value).toBe(50);
  });

  it("The return value of the second call to the function was 310", () => {
    var mockCallBack = jest.fn((value) => {
      console.log("Return value", value);
      return value + 10;
    });

    forEach([100, 300], mockCallBack);
    expect(mockCallBack.mock.results[1].value).toBe(310);
  });
});
