import articles from "./articles";

describe("articles reducer", () => {
  it("should handle initial state", () => {
    expect(articles(undefined, {})).toEqual([]);
  });

  it("should handle ADD_ARTICLE as expected", () => {
    expect(
      articles([], {
        type: "ADD_ARTICLE",
        text: "A sample Article",
        id: 0
      })
    ).toEqual([
      {
        text: "A sample Article",
        read: false,
        id: 0
      }
    ]);
  });
});
