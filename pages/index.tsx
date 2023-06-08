import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import LayoutBlog from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <LayoutBlog>
        <Container>
          <Intro />
          <MoreStories posts={allPosts} />
        </Container>
      </LayoutBlog>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
