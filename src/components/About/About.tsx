import React from "react";

const About: React.FC = () => {
  return (
    <div className="font-work">
      <div className="rounded-2xl bg-slate-200 text-center w-full py-10 my-10">
        <h2 className="text-3xl text-black font-work font-bold">About</h2>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <p className="text-black text-base leading-10">
          Welcome to, <strong>Book Vibe!</strong> we're passionate about
          connecting readers with the books they love. Whether you're an avid
          reader, a casual bookworm, or searching for the perfect gift, we've
          got you covered. Our mission is simple: to provide an extensive
          collection of books across genres, catering to all ages and interests.
          From timeless classics to the latest bestsellers, our curated
          selection ensures there's something for everyone. What sets us apart
          is our commitment to exceptional customer service and user experience.
          We strive to make your book-buying journey seamless, offering easy
          navigation, secure transactions, and prompt delivery to your doorstep.
          Join our community of book lovers and embark on a literary adventure
          with <strong>Book Vibe!</strong>. Discover your next favorite read
          today!
        </p>
      </div>
    </div>
  );
};

export default About;
