import React from "react";

const ContactUs = () => {
  return (
    <>
      <h2 className="font-bold mb-10">ContactUs</h2>
      <h4>This is Contact Us Page</h4>
      <form>
        <input
          className="border-red-200 border-2"
          type="text"
          placeholder="name"
        />
        <input
          className="border-red-200 border-2"
          type="text"
          placeholder="contact"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactUs;
