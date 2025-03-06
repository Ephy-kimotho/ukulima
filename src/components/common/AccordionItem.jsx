/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  const handleAction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="shadow-lg">
      <div
        className={`${
          isOpen ? "bg-tangerine rounded-t-lg" : "bg-white rounded-lg"
        } py-3 flex justify-between items-center font-quciksand cursor-pointer`}
        onClick={handleAction}
      >
        <p
          className={`${
            isOpen ? "text-white" : "text-black "
          } font-bold  pl-4 text-base md:text-lg`}
        >
          {question}
        </p>
        <button className="pr-4">
          {isOpen ? (
            <ChevronUp size="24" color="#fff" />
          ) : (
            <ChevronDown size="24" color="#000" />
          )}
        </button>
      </div>
      <div
        className={`bg-white text-night overflow-hidden  ${
          isOpen ? "text-opacity-100 rounded-b-lg" : "text-opacity-0"
        } transition-all duration-300`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className=" text-base md:max-w-[90%] md:text-lg p-4">{answer}</p>
      </div>
    </article>
  );
}

export default AccordionItem;
