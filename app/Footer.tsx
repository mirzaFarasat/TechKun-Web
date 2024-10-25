
export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} TechKun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
