const Footer = () => {
    const currentDateTime = new Date();
    const currentYear = currentDateTime.getFullYear();
    const currentDate = currentDateTime.toLocaleDateString();  // Current Date (formatted)
    const currentTime = currentDateTime.toLocaleTimeString();  // Current Time (formatted)
  
    return (
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; {currentYear} Crypto Blog. All rights reserved.</p>
        <p>Current Date: {currentDate}</p>
        <p>Current Time: {currentTime}</p>
      </footer>
    );
  };
  
  export default Footer;
  
  