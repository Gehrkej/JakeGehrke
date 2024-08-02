import React, { useEffect, useRef } from 'react'
import "./contact.css";
import {motion, useAnimation } from 'framer-motion'
const Contact = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1 }
                    });
                }
            },
            {
                threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);


    return (
    <section id="contact">
      <h5>Want to Get in touch?</h5>
      <h2>Contact Me:</h2>

      <motion.div className="container contact__container"
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={controls}>
        <div className="experience__frontend">
          <h3>My Contact Information</h3>
          <div className="contact__content">
            <article className="contact__details">
              <div>
                <h4>Email:</h4>
                <small className="text-light">jake.d.gehrke@gmail.com</small>
              </div>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
