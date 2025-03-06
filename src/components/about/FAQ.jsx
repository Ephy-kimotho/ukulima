import AccordionItem from "../common/AccordionItem";

const questions = [
  {
    question: " What is Ukulima?",
    answer:
      "Ukulima is an online platform that helps farmers access high-quality seeds, fertilizers, pesticides, and other essential farm inputs with ease.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our products, add your selected items to the cart, and proceed to checkout. Follow the payment instructions to complete your purchase.",
  },
  {
    question: " Can I return a product if it's defective?",
    answer:
      "Absolutely! If you receive a defective or incorrect item, you can request a return or replacement within a 2 days. Just go to the contact page and write  to us.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email, phone, or our live chat feature on the website. We're always here to help!",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes! We provide reliable delivery services to ensure your products reach you in time, no matter where you are.",
  },
];

function FAQ() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="mx-auto max-w-[350px]">
        <h2 className="text-mint font-semibold text-4xl md:text-5xl  font-quciksand flex justify-center">
          FAQs
        </h2>
        <div className="w-[60px] h-[5px] bg-mint rounded-lg mx-auto mt-2"></div>
      </div>

      <div className="bg-[#f0f0f0] p-6 w-11/12 mx-auto mt-10 rounded-2xl space-y-5">
        {questions.map((item, idx) => (
          <AccordionItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
