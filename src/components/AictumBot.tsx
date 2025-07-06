"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  options?: (string | { text: string; action: () => void })[];
}

const AictumBot = () => {
  const initialMessages: Message[] = [
    {
      id: 1,
      text: "Welcome to Aictum AI Support! I'm here to help you with our services. Please select an option below:",
      sender: "bot",
      timestamp: new Date(),
      options: [
        "Our Services",
        "Customer Support",
        "Company Information",
        "Career Opportunities",
        "Contact Sales",
      ],
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBotRef = useRef<HTMLDivElement>(null);

  // Reset messages when opening the chat
  useEffect(() => {
    if (isOpen) {
      setMessages(initialMessages);
      scrollToBottom();
    }
  }, [isOpen]);

  // Handle clicks outside the chat to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatBotRef.current &&
        !chatBotRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".chat-toggle-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user's selection
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: option,
        sender: "user",
        timestamp: new Date(),
      },
    ]);

    // Bot's response based on selection
    setTimeout(() => {
      let botResponse = "";
      let options: (string | { text: string; action: () => void })[] = [];

      switch (option) {
        case "Our Services":
          botResponse = `Aictum provides comprehensive technology solutions:\n\n• AI & Machine Learning: Custom models with 95% accuracy\n• Blockchain: Secure decentralized applications\n• Cloud Solutions: 30% cost optimization guarantee\n• Cybersecurity: 24/7 threat monitoring\n\nPlease select one of the options below:`;
          options = [
            "AI & Machine Learning",
            "Blockchain Development",
            "Cloud Solutions",
            "Cybersecurity Services",
            "IT Consulting",
            "Back to main menu",
          ];
          break;

        case "AI & Machine Learning":
          botResponse = `Our AI Services:\n\n• Custom AI Development: Tailored solutions for your business needs\n• Predictive Analytics: 85% accurate forecasting models\n• NLP Solutions: Support for 10+ languages\n• Computer Vision: Defect detection with 99% accuracy\n\nPlease select one of the options below:`;
          options = [
            "Schedule Consultation",
            "More AI Services",
            "Back to services",
            "Main menu",
          ];
          break;

        case "Blockchain Development":
          botResponse = `Blockchain Solutions:\n\n• Smart Contracts: Audited by leading security firms\n• DApp Development: 100% uptime guarantee\n• Tokenization: Secure asset digitization\n• NFT Marketplaces: Built 15+ successful platforms\n\nPlease select one of the options below:`;
          options = [
            "Blockchain Consultation",
            "Back to services",
            "Main menu",
          ];
          break;

        case "Customer Support":
          botResponse = `Customer Support Services:\n\n• 24/7 Availability: Average response time <10 minutes\n• Multilingual Support: English, Hindi, Spanish\n• Dedicated Account Managers: For enterprise clients\n• SLA Guarantee: 99.9% uptime\n\nPlease select one of the options below:`;
          options = [
            "Account Help",
            "Technical Support",
            "Billing Questions",
            "Report an Issue",
            "Back to main menu",
          ];
          break;

        case "Technical Support":
          botResponse = `Technical Support Options:\n\n• Software Issues: Resolved within 4 business hours\n• Hardware Compatibility: Certified for all major platforms\n• API Support: Dedicated integration specialists\n• Urgent Requests: Priority escalation available\n\nPlease select one of the options below:`;
          options = [
            "Software Problem",
            "Hardware Issue",
            "Connectivity",
            "Urgent Support",
            "Back to support",
          ];
          break;

        case "Urgent Support":
          botResponse = `Urgent Support Process:\n\n• Immediate Response: <5 minute callback guarantee\n• Dedicated Engineer: Assigned until resolution\n• Status Updates: Every 30 minutes\n• Post-Incident Report: Detailed analysis provided\n\nPlease select one of the options below:`;
          options = ["Schedule Now", "Back to support", "Main menu"];
          break;

        case "Company Information":
          botResponse = `About Aictum:\n\n• Founded: 2018 by industry veterans\n• Employees: 500+ across 5 countries\n• Clients: 200+ Fortune 500 companies\n• Certifications: ISO 27001, SOC 2 Type II\n\nPlease select one of the options below:`;
          options = [
            "About Us",
            "Our Team",
            "Case Studies",
            "Partnerships",
            "Back to main menu",
          ];
          break;

        case "Career Opportunities":
          botResponse = `Career Options:\n\n• Competitive Salaries: Top 10% industry benchmark\n• Remote Work: 100% flexible options\n• Learning Budget: $5,000/year for certifications\n• Growth Path: Clear promotion framework\n\nPlease select one of the options below:`;
          options = [
            "View Openings",
            "Application Process",
            "Internships",
            "Back to main menu",
          ];
          break;

        case "Contact Sales":
          botResponse = `Sales Consultation:\n\n• Free Assessment: No-obligation 30-minute call\n• Custom Proposals: Tailored within 2 business days\n• Pilot Programs: Risk-free testing available\n• Enterprise Packages: Volume discounts\n\nPlease select one of the options below:`;
          options = ["Schedule Meeting", "Request Quote", "Back to main menu"];
          break;

        case "Schedule Consultation":
        case "Blockchain Consultation":
        case "Schedule Meeting":
        case "Schedule Now":
          botResponse = `Scheduling Options:\n\n• Availability: Monday-Friday, 9AM-9PM EST\n• Meeting Types: Demo, Strategy, Technical Deep Dive\n• Duration: 30/60 minute slots available\n• Confirmation: Instant calendar invite\n\nPlease select one of the options below:`;
          options = [
            {
              text: "Open Calendly",
              action: () =>
                window.open("https://calendly.com/team-aictum", "_blank"), // Updated link
            },
            "Back to previous",
            "Main menu",
          ];
          break;

        case "Account Help":
          botResponse = `Account Support:\n\n• Password Reset: Instant email/SMS verification\n• 2FA Management: Multiple methods supported\n• Profile Updates: Real-time changes\n• Access Control: Granular permission settings\n\nPlease select one of the options below:`;
          options = ["Reset Password", "Update Profile", "Back to support"];
          break;

        case "Billing Questions":
          botResponse = `Billing Information:\n\n• Invoices: Available in multiple formats\n• Payment Methods: Credit card, bank transfer, UPI\n• Tax Compliance: GST, VAT, and international\n• Receipts: Automatically archived for 7 years\n\nPlease select one of the options below:`;
          options = ["View Invoice", "Payment Issues", "Back to support"];
          break;

        case "Report an Issue":
          botResponse = `Issue Reporting:\n\n• Ticket System: Real-time tracking\n• Priority Levels: Critical/High/Medium/Low\n• Escalation Path: Direct to engineering if needed\n• Resolution ETA: Provided upon submission\n\nPlease select one of the options below:`;
          options = ["Submit Ticket", "Check Status", "Back to support"];
          break;

        default:
          botResponse = `Additional Assistance:\n\n• Our support team is available 24/7\n• Average response time: <15 minutes\n• Comprehensive knowledge base available\n• Live chat with experts\n\nPlease select one of the options below:`;
          options = ["Back to previous", "Main menu"];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
          options: options.map((opt) => (typeof opt === "string" ? opt : opt)),
        },
      ]);
    }, 500);
  };

  const handleBackToMenu = () => {
    setMessages(initialMessages);
  };

  // AI Bot Icon SVG
  const BotIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className="h-10 w-10 text-purple-600"
    >
      <g>
        <circle cx="32" cy="32" r="30" fill="#E0E7FF" />
        <rect x="16" y="20" width="32" height="28" rx="10" fill="#4F46E5" />
        <circle cx="24" cy="34" r="3" fill="#FFF" />
        <circle cx="40" cy="34" r="3" fill="#FFF" />
        <rect x="28" y="40" width="8" height="2" rx="1" fill="#FFF" />
        <line
          x1="32"
          y1="12"
          x2="32"
          y2="20"
          stroke="#4F46E5"
          strokeWidth="2"
        />
        <circle cx="32" cy="10" r="2" fill="#4F46E5" />
      </g>
    </svg>
  );

  return (
    <div className="fixed right-6 bottom-6 z-50" ref={chatBotRef}>
      {isOpen ? (
        <div className="flex h-[500px] w-80 flex-col rounded-t-lg border border-gray-200 bg-white shadow-lg">
          {/* Chat header */}
          <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <BotIcon />
              </div>
              <span className="font-bold">Aictum AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${message.sender === "bot" ? "text-left" : "text-right"}`}
              >
                <div
                  className={`inline-block max-w-[80%] rounded-lg p-3 ${message.sender === "bot" ? "border border-gray-200 bg-white text-gray-800 shadow-sm" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"}`}
                >
                  {message.text.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {message.options && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.options.map((option, idx) => {
                      if (typeof option === "object") {
                        return (
                          <button
                            key={idx}
                            onClick={option.action}
                            className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 text-xs text-blue-800 shadow-sm hover:from-blue-200 hover:to-purple-200"
                          >
                            {option.text}
                          </button>
                        );
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            if (option === "Back to previous") {
                              setMessages((prev) => prev.slice(0, -2));
                            } else if (option === "Main menu") {
                              handleBackToMenu();
                            } else if (option === "Close chat") {
                              setIsOpen(false);
                            } else {
                              handleOptionClick(option);
                            }
                          }}
                          className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 text-xs text-blue-800 shadow-sm hover:from-blue-200 hover:to-purple-200"
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="chat-toggle-button rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700"
        >
          <BotIcon />
        </button>
      )}
    </div>
  );
};

export default AictumBot;


