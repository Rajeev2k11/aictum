"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Which blockchain-based services are provided by Aictum?",
            answer: "Aictum provides a wide range of blockchain-based services, including smart contract development, decentralized application (dApp) creation, blockchain consulting, and tailored blockchain development solutions designed to meet the needs of various industries."
        },
        {
            question: "How can businesses benefit from investing in Web3 development?",
            answer: "By investing in Web3 development, businesses can leverage decentralized, secure, and transparent solutions that transform customer engagement, enhance data ownership, streamline operations, and unlock new revenue opportunities."
        },
        {
            question: "How can Generative AI solutions boost the growth of my business?",
            answer: "Generative AI solutions boost business growth by automating content creation, enhancing customer experiences, optimizing workflows, and driving innovation—helping your business stay ahead in a competitive market."
        },
        {
            question: "Is integrating AI or ML the right approach for my project?",
            answer: "Integrating AI or ML is ideal for projects requiring data analysis, pattern recognition, automation, or prediction. Our experts evaluate your specific needs to recommend the most effective solution."
        },
        {
            question: "How much time does Aictum need to deliver a custom software solution?",
            answer: "The time required depends on the complexity of the project—simple apps may take 4–8 weeks, while more advanced solutions can span several months. Aictum provides accurate timelines after analyzing your specific requirements."
        },
        {
            question: "Does Aictum  support starting small and scaling as needed?",
            answer: "Absolutely! Aictum  supports starting with a Minimum Viable Product (MVP) to validate your idea, with the flexibility to scale based on user feedback and evolving business goals."
        }
    ];

    return (
        <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7]">
            <div className="max-w-6xl mx-auto w-full"> {/* Increased max-width */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-900">Frequently Asked Questions</h1>
                
                <div className="bg-[#141418] backdrop-blur-sm rounded-xl shadow-2xl p-6 w-full border border-gray-700/50">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 last:mb-0 overflow-hidden">
                            <button
                                className={`w-full text-left py-4 px-6 rounded-lg transition-all duration-300 flex justify-between items-center ${
                                    activeIndex === index 
                                        ? 'bg-gray-800/80 text-white' 
                                        : 'bg-gray-800/50 text-white hover:bg-gray-800/70'
                                } border border-gray-700/50`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-medium text-lg md:text-xl">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="h-6 w-6 transition-transform duration-300 text-purple-500" />
                                ) : (
                                    <Plus className="h-6 w-6 transition-transform duration-300 text-purple-500" />
                                )}
                            </button>
                            
                            <div 
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    activeIndex === index 
                                        ? 'max-h-[500px] opacity-100 mt-3' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 bg-gray-800/60 text-gray-100 rounded-lg border border-gray-700/30 text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;