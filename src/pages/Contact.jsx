import React from "react";

const Contact = () => (
    <div className="p-8 bg-purpleHeart text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-black text-white rounded"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-black text-white rounded"
            />
            <textarea
                placeholder="Your Message"
                className="w-full p-2 bg-black text-white rounded"
                rows="4"
            ></textarea>
            <button className="bg-gold text-black py-2 px-4 rounded">Send Message</button>
        </form>
    </div>
);

export default Contact;