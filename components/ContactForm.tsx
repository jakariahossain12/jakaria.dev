"use client"

import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export const ContactForm = () => {
      const form = useRef<HTMLFormElement>(null);

   const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;


    emailjs
      .sendForm(
        "service_kiqh52p",
        "template_h3d5zrv",
        form.current,
        "h6Hc2Ji_IpwZo6Ecf"
      )
      .then(
        () => {
          toast.success("Message sent!");
        },
        (error) => {
          toast.error("Failed to send message.", error.message);
        }
      );
  };
  return (
    <>
  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full  px-4 py-2 bg-[#00b280] border border-[#007055] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007055]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-[#00b280] border border-[#007055] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007055]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-[#00b280] border border-[#007055] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007055]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#5dfeca] hover:bg-[#00b280] rounded-lg font-medium transition duration-300"
                >
                  Send Message
                </button>
              </form>
    </>
  )
}
