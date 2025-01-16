import React from "react";
import Image from "next/image";
interface BlogCardProps {
  caption: string;
  description: string;
  poster: string;
  slug: string;
}

const BlogCard = ({ caption, description, poster, slug }: BlogCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <Image
  src={poster} // Sanity se image URL
  alt={caption} // Alt text for the image
  width={640} // Specify the width of the image
  height={192} // Specify the height of the image
  className="w-full h-48 object-cover" // Tailwind classes for styling
/>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{caption}</h2>
        <p className="text-gray-600 mt-2">{description.slice(0, 100)}...</p>
        <a href={`/blog/${slug}`} className="text-blue-500 mt-4 inline-block hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
