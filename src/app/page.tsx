import { client } from "@/sanity/lib/client";
import BlogCard from "@/app/componenets/blogcard";

interface Blog {
  caption: string;
  description: string;
  poster: string;
  slug: string;
}



const HomePage = async () => {
  const query = `*[_type == "blog"] {
    caption,
    description,
    "poster": poster.asset->url,
    "slug": slug.current,
  }`;

  const blogs = await client.fetch(query);



  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog:Blog) => (
          <BlogCard
            key={blog.slug}
            caption={blog.caption}
            description={blog.description}
            poster={blog.poster}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
