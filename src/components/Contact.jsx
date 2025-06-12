import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { motion, useInView } from 'framer-motion';

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1bec1e31-f1d4-4099-ab61-5ee9087820e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message was sent successfully!",
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <section
      id='contact'
      className='w-full min-h-screen flex flex-col items-center justify-center bg-black px-4'
      ref={ref}
    >
      {/* Header */}
      <motion.div
        className='text-center mb-10'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact Me</h2>
        <p className="text-gray-300">Get in touch with me</p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        className="w-full md:w-[45%] border-2 border-slate-800 p-6 rounded-2xl shadow-lg"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0.2}
      >
        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div className="flex-1" variants={fadeUp} custom={0.3}>
              <label className="font-semibold text-white block mb-1">First Name</label>
              <input type="text" name="name" required className="w-full p-2 rounded bg-zinc-700 text-white" />
            </motion.div>
            <motion.div className="flex-1" variants={fadeUp} custom={0.4}>
              <label className="font-semibold text-white block mb-1">Last Name</label>
              <input type="text" name="lastName" required className="w-full p-2 rounded bg-zinc-700 text-white" />
            </motion.div>
          </div>

          {/* Email */}
          <motion.div variants={fadeUp} custom={0.5}>
            <label className="font-semibold text-white block mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 rounded bg-zinc-700 text-white" />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp} custom={0.6}>
            <label className="font-semibold text-white block mb-1">Message</label>
            <textarea name="message" className="w-full p-2 rounded bg-zinc-700 text-white h-28 resize-none" />
          </motion.div>

          {/* Button */}
          <motion.div className="text-center" variants={fadeUp} custom={0.7}>
            <button
              type="submit"
              className="text-white border-2 border-slate-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-6 py-2.5 transition-transform"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
