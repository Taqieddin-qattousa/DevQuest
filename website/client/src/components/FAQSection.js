// /src/components/FAQSection.js
import React from 'react';
import 'styles/FAQSection.css';

const FAQSection = () => {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Can't find the answer you're looking for? Visit our FAQ page.</p>
      <button className="faq-btn">Visit FAQ</button>
    </section>
  );
};

export default FAQSection;
