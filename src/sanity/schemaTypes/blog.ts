const blogSchema = {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true, // For selecting focus area of the image
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'content',
      type: 'text', // Use text type for the main body/content
      title: 'Content',
      description: 'Main content of the blog post',
    },
    {
      name: 'author',
      type: 'string', // Add author name
      title: 'Author',
    },
    {
      name: 'publishedDate',
      type: 'datetime', // Store the published date of the post
      title: 'Published Date',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'caption',
        maxLength: 200, 
      },
    },
  ],
};

export default blogSchema;
