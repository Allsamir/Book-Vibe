import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="font-work">
      <div className="rounded-2xl bg-slate-200 text-center w-full py-10 my-10">
        <h2 className="text-3xl text-black font-work font-bold">Contact</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.52192202919053!2d90.47952439081955!3d23.801544258037516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c85a95555555%3A0x3e238d73890200a3!2sBeraid%20Gono%20Patagar!5e0!3m2!1sen!2sbd!4v1711647167589!5m2!1sen!2sbd"
        className="w-full h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <p className="text-black text-base leading-10 my-12">
          <strong>Contact Us</strong> <br />
          Got a question, feedback, or just want to say hello? We'd love to hear
          from you! Customer Support: Our dedicated customer support team is
          here to assist you with any inquiries or concerns you may have.
          Whether it's help with an order, assistance with navigating our
          website, or general inquiries about our products and services, we're
          just a message away. Email: 123@gmail Phone: 01234567890 Business
          Inquiries: Interested in partnering with us, collaborating on
          projects, or exploring business opportunities? We're open to new
          ventures and collaborations that align with our mission and values.
          Get in touch with our team to discuss potential partnerships and
          opportunities. Email: 123@gmail Address: Bara Beraid, Badda, Dhaka
          Follow Us: Stay connected with us on social media for the latest
          updates, promotions, and book recommendations. Feedback: We value your
          feedback and strive to continuously improve our services. Share your
          thoughts, suggestions, or experiences with us, and help us serve you
          better. Whether you're reaching out for assistance, exploring
          collaboration opportunities, or sharing your feedback, we're here to
          listen and respond promptly. Get in touch with us today!
        </p>
      </div>
    </div>
  );
};

export default Contact;
