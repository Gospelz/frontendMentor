// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import mentor from "../assets/two-handsome-dark-skinned-executives-having-thoughtful-serious-facial-expression.jpg";

function Home() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${mentor})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>
        <header className="relative z-10 bg-gray-900 bg-opacity-80 flex items-center justify-between px-6 py-4">
          <h3 className="text-white font-semibold text-2xl">Mentorship</h3>
          <nav>
            <a
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition"
            >
              Login
            </a>
            <a
              href="/admin-login"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Login as Admin
            </a>
          </nav>
        </header>
        <h1 className="text-white font-thin text-6xl z-10 relative text-center mt-20">
          Welcome to the Mentorship Program
        </h1>
        <p className="text-white font-light text-xl z-10 relative text-center mt-8 mx-30 ">
          Join us in fostering growth and learning through mentorship. Whether
          you're an experienced professional eager to guide others, or someone
          seeking a mentor to unlock your full potential, our platform is built
          for you. Connect, grow, and thrive within a community that values
          purpose-driven relationships.
        </p>
        <div className="z-10 relative flex justify-center mt-8 space-x-4">
          <a
            href="/find-mentor"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Find a Mentor
          </a>
          <a
            href="/become-mentor"
            className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
          >
            Become a Mentor
          </a>
        </div>
      </div>
      {/* How It Works Section */}
      <section className="z-10 relative bg-blue-500 bg-opacity-80 py-8 px-6 mt-16 rounded shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
          How It Works
        </h2>
        <ul className="text-lg text-gray-800 space-y-2 list-disc list-inside">
          <li>Sign up as a mentor or mentee.</li>
          <li>Create your profile and set your goals.</li>
          <li>Connect with others and start your mentorship journey.</li>
        </ul>
      </section>
      {/* Footer */}
      <footer className="z-10 relative bg-gray-900 text-white py-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>
            &copy; {new Date().getFullYear()} Mentorship Platform. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
