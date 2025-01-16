import Image from 'next/image';

const About = () => {
  return (
    <div className="pt-20 px-8 pb-12"> {/* Added bottom padding for space below the component */}
      <div className="flex items-center gap-8 p-8 bg-gray-50">
        <Image
          src="/profile.jpg" // Image from public folder
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1> {/* Margin below heading */}
          <p className="text-lg">I am a passionate web developer with a strong interest in creating user-friendly websites. My goal is to deliver intuitive, responsive designs that enhance user experience.</p>
          
          {/* Additional lines for blog description */}
          <p className="text-lg mt-4">On this blog, I share my web development journey, tutorials, and insights on the latest trends in the tech world. Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
