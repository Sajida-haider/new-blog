import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {     
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
    

          <Image
            src="/logo.jpg"  // Removed extra space before the slash
            alt="Crypto Blog Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold ml-3">Crypto Blog</h1>
 

        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/">blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;





