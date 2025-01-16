import { client } from "@/sanity/lib/client";
import { Blog } from "@/sanity/schemaTypes/types";
import Image from "next/image";
const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    caption,
    description,
    "poster": poster.asset->url,
    content,
    author,
    publishedDate,
    "slug": slug.current,
  }`;

  const blog: Blog | null = await client.fetch(query, { slug: params.slug });

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold">{blog.caption}</h1>
      <p className="text-gray-600 text-lg mt-4">{blog.author}</p>
      <p className="text-gray-500 mt-2">{blog.publishedDate && new Date(blog.publishedDate).toLocaleDateString()}</p>
      <Image
  src={blog.poster}
  alt={blog.caption}
  width={640} // Specify width
  height={256} // Specify height
  className="w-full h-64 object-cover mt-6 rounded-md"
/>
      <div className="mt-6">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
