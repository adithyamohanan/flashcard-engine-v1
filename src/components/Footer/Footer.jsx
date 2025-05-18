
function Footer() {
  return (
    <footer className="w-full h-30 bg-[#5c4bb3] text-white py-4">
      <div className="container mx-auto text-center mt-5">
        <p>&copy; 2025 Adithya Mohanan. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://www.linkedin.com/in/adithyamohanan/" className="text-orange-400">
            LinkedIn
          </a>{' '}
          and{' '}
          <a href="https://github.com/adithyamohanan" className="text-orange-400">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;