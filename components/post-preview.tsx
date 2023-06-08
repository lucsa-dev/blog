import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import { motion } from "framer-motion";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage slug={slug} title={title} src={coverImage} />
        )}
      </div>
      <motion.h3
        className="text-3xl mb-3 leading-snug transition-colors hover:text-pink-600"
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </motion.h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
};

export default PostPreview;
