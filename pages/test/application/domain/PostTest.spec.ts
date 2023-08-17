import Post from "./../../../application/domain/model/post";

test("should create a post successfully", () => {
  const post = new Post(
    "1234",
    "post title",
    "this is a test content post",
    "tester"
  );

  expect("1234").toEqual(post.getId());
  expect("post title").toEqual(post.getTitle());
  expect("this is a test content post").toEqual(post.getContent());
  expect("tester").toEqual(post.getAuthor());
});
