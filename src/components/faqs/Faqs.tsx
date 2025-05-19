"use client";

import { useState } from "react";
import { HeadingType } from "@/types/types";
import Heading from "../heading/Heading";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What are your opening hours?",
    answer:
      "We’re open every day from 10:00 AM to 10:00 PM. Whether you’re craving lunch, dinner, or a late-night snack, we’re here to serve you!",
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Yes, we do! Our menu includes a variety of vegetarian and vegan-friendly options, such as veggie burgers, fresh salads, and plant-based sides.",
  },
  {
    question: "Can I place an order online?",
    answer:
      "Absolutely! You can order directly through our website or mobile app for pickup or delivery. It’s fast, easy, and convenient!",
  },
  {
    question: "Do you accommodate food allergies?",
    answer:
      "We take food allergies seriously and are happy to help! Please inform our staff of any allergies when ordering, and we’ll do our best to accommodate your needs.",
  },
];

export default function Faqs() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqHeading: HeadingType = {
    text: "Common",
    featuredText: "Questions",
  };

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="px-5 md:px-8">
          <div className="flex flex-col gap-8">
            <div className="max-w-3xl mx-auto">
              <Heading {...faqHeading} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {faqs.map((faq, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                  <div
                    key={index}
                    className="faq-container"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="font-semibold text-lg flex justify-between items-center">
                      <h5 className="mb-0 text-3xl">{faq.question}</h5>
                      <span
                        className={`faq-status ${
                          isOpen ? " faq-status-open" : ""
                        }`}
                        aria-label={isOpen ? "Collapse" : "Expand"}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`faq-answer-wrapper ${
                        isOpen ? "faq-answer-open" : ""
                      }`}
                    >
                      <span className="text-lg">{faq.answer}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
