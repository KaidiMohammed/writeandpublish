import PostAdditionalInfo from "@/src/_core/application/domain/model/postAdditionalInfo";
import Post from "../../../application/domain/model/post";

test("should create a post successfully", () => {
  const post = new Post(
    "post title",
    "this is a test content post",
    "tester",
    new PostAdditionalInfo(new Date("2023-11-5"), new Date("2023-11-6"), "path-to-profile-picture")
  );

  // expect("1234").toEqual(post.getId());
  expect("post title").toEqual(post.getTitle());
  expect("this is a test content post").toEqual(post.getContent());
  expect("tester").toEqual(post.getAuthor());
  expect(new Date("2023-11-5")).toEqual(post.getAdditionalInfo().getPublishDate())
  expect(new Date("2023-11-6")).toEqual(post.getAdditionalInfo().getUpdateDate())
  expect("path-to-profile-picture").toEqual(post.getAdditionalInfo().getAuthorProfilePicture())
});
