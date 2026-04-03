import { MessageCircle, X, Globe, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

type Language = 'en' | 'hi';

type Message = {
  type: 'bot' | 'user';
  text: string;
  timestamp: number;
};

type QuickReply = {
  id: string;
  label_en: string;
  label_hi: string;
};

type ChatState = {
  state_id: string;
  messages: {
    en: string[];
    hi: string[];
  };
  quick_replies?: QuickReply[];
  input_enabled?: boolean;
  action_type?: 'link' | 'contact';
  action_data?: string;
};

// Chatbot Configuration
const chatConfig = {
  bot_name: "Ask Lakhil",
  max_visible_messages: 5,
  entry_state: "welcome",
  states: {
    welcome: {
      state_id: "welcome",
      messages: {
        en: [
          "👋 Hi! I'm the Akhilt.",
          "I'm here to help you learn about our work and how you can get involved."
        ],
        hi: [
          "👋 नमस्ते! मैं LRWF Assistant हूँ।",
          "मैं आपको हमारे काम और जुड़ने के तरीकों के बारे में बताने के लिए यहाँ हूँ।"
        ]
      },
      quick_replies: [
        { id: "programs", label_en: "📘 Our Programs", label_hi: "📘 हमारे कार्यक्रम" },
        { id: "volunteer", label_en: "🤝 Volunteer", label_hi: "🤝 स्वयंसेवक बनें" },
        { id: "donate", label_en: "💖 Donate", label_hi: "💖 दान करें" },
        { id: "impact", label_en: "📊 Our Impact", label_hi: "📊 हमारा प्रभाव" },
        { id: "ask_question", label_en: "❓ Ask a Question", label_hi: "❓ प्रश्न पूछें" }
      ]
    },
    programs: {
      state_id: "programs",
      messages: {
        en: ["We work at the grassroots through these programs 👇"],
        hi: ["हम जमीनी स्तर पर इन कार्यक्रमों के माध्यम से काम करते हैं 👇"]
      },
      quick_replies: [
        { id: "digital_education", label_en: "💻 Digital Education", label_hi: "💻 डिजिटल शिक्षा" },
        { id: "career_awareness", label_en: "🎯 Career Awareness", label_hi: "🎯 करियर मार्गदर्शन" },
        { id: "cyber_safety", label_en: "🔐 Cyber Safety", label_hi: "🔐 साइबर सुरक्षा" },
        { id: "welcome", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    digital_education: {
      state_id: "digital_education",
      messages: {
        en: ["We teach basic computer skills, internet usage, and digital tools to students from government schools and villages."],
        hi: ["हम सरकारी स्कूलों और गाँवों के छात्रों को कंप्यूटर की बुनियादी जानकारी, इंटरनेट और डिजिटल टूल्स सिखाते हैं।"]
      },
      quick_replies: [
        { id: "volunteer", label_en: "🙋 Volunteer", label_hi: "🙋 स्वयंसेवक बनें" },
        { id: "impact", label_en: "📸 See Impact", label_hi: "📸 प्रभाव देखें" },
        { id: "programs", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    career_awareness: {
      state_id: "career_awareness",
      messages: {
        en: ["We guide students to understand career options, exams, and skills—especially where guidance is limited."],
        hi: ["हम छात्रों को करियर विकल्प, परीक्षा और कौशल समझने में मार्गदर्शन देते हैं—खासकर जहाँ मार्गदर्शन सीमित है।"]
      },
      quick_replies: [
        { id: "volunteer", label_en: "🙋 Volunteer", label_hi: "🙋 स्वयंसेवक बनें" },
        { id: "impact", label_en: "📸 See Impact", label_hi: "📸 प्रभाव देखें" },
        { id: "programs", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    cyber_safety: {
      state_id: "cyber_safety",
      messages: {
        en: ["We spread awareness about cyber fraud, online safety, and responsible digital behavior in schools and villages."],
        hi: ["हम स्कूलों और गाँवों में साइबर धोखाधड़ी, ऑनलाइन सुरक्षा और जिम्मेदार डिजिटल व्यवहार के बारे में जागरूकता फैलाते हैं।"]
      },
      quick_replies: [
        { id: "volunteer", label_en: "🙋 Volunteer", label_hi: "🙋 स्वयंसेवक बनें" },
        { id: "impact", label_en: "📸 See Impact", label_hi: "📸 प्रभाव देखें" },
        { id: "programs", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    volunteer: {
      state_id: "volunteer",
      messages: {
        en: [
          "Volunteers are the backbone of our foundation 💚",
          "How would you like to help?"
        ],
        hi: [
          "स्वयंसेवक हमारे फाउंडेशन की रीढ़ हैं 💚",
          "आप किस तरह मदद करना चाहेंगे?"
        ]
      },
      quick_replies: [
        { id: "teach", label_en: "👨‍🏫 Teaching", label_hi: "👨‍🏫 शिक्षण" },
        { id: "tech_support", label_en: "💻 Tech / Design", label_hi: "💻 टेक / डिजाइन" },
        { id: "apply_volunteer", label_en: "📝 Apply Now", label_hi: "📝 आवेदन करें" },
        { id: "welcome", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    teach: {
      state_id: "teach",
      messages: {
        en: [
          "You can teach students, guide them academically, or mentor them for career choices.",
          "We welcome students, professionals, and working individuals."
        ],
        hi: [
          "आप छात्रों को पढ़ा सकते हैं, उन्हें शैक्षिक रूप से मार्गदर्शन दे सकते हैं, या करियर विकल्पों के लिए मार्गदर्शन कर सकते हैं।",
          "हम छात्रों, पेशेवरों और काम करने वाले व्यक्तियों का स्वागत करते हैं।"
        ]
      },
      quick_replies: [
        { id: "apply_volunteer", label_en: "📝 Apply Now", label_hi: "📝 आवेदन करें" },
        { id: "volunteer", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    tech_support: {
      state_id: "tech_support",
      messages: {
        en: [
          "Help us with website development, design, social media, or tech support.",
          "Your skills can amplify our impact!"
        ],
        hi: [
          "वेबसाइट विकास, डिज़ाइन, सोशल मीडिया या तकनीकी सहायता में हमारी मदद करें।",
          "आपके कौशल हमारे प्रभाव को बढ़ा सकते हैं!"
        ]
      },
      quick_replies: [
        { id: "apply_volunteer", label_en: "📝 Apply Now", label_hi: "📝 आवेदन करें" },
        { id: "volunteer", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    apply_volunteer: {
      state_id: "apply_volunteer",
      messages: {
        en: [
          "Great! Please click below to fill out the volunteer form.",
          "Our team will reach out to you soon."
        ],
        hi: [
          "बहुत बढ़िया! कृपया स्वयंसेवक फॉर्म भरने के लिए नीचे क्लिक करें।",
          "हमारी टीम जल्द ही आपसे संपर्क करेगी।"
        ]
      },
      quick_replies: [
        { id: "volunteer_page", label_en: "📝 Open Volunteer Form", label_hi: "📝 फॉर्म खोलें" },
        { id: "contact", label_en: "📧 Contact Details", label_hi: "📧 संपर्क विवरण" },
        { id: "welcome", label_en: "⬅️ Main Menu", label_hi: "⬅️ मुख्य मेनू" }
      ]
    },
    donate: {
      state_id: "donate",
      messages: {
        en: ["Your support helps us reach more children 🙏"],
        hi: ["आपका सहयोग हमें और बच्चों तक पहुँचने में मदद करता है 🙏"]
      },
      quick_replies: [
        { id: "donate_now", label_en: "💳 Donate Now", label_hi: "💳 अभी दान करें" },
        { id: "tax_benefits", label_en: "📄 Tax Benefits", label_hi: "📄 कर लाभ" },
        { id: "welcome", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    donate_now: {
      state_id: "donate_now",
      messages: {
        en: [
          "Every contribution—big or small—creates impact.",
          "Contact us for donation details."
        ],
        hi: [
          "हर योगदान—बड़ा या छोटा—प्रभाव बनाता है।",
          "दान विवरण के लिए हमसे संपर्क करें।"
        ]
      },
      quick_replies: [
        { id: "contact", label_en: "📧 Get Details", label_hi: "📧 विवरण प्राप्त करें" },
        { id: "donate", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    tax_benefits: {
      state_id: "tax_benefits",
      messages: {
        en: [
          "Donations to Lakhil Raj Welfare Foundation may be eligible for tax benefits as per applicable laws.",
          "For official receipts, please contact our team."
        ],
        hi: [
          "लखिल राज वेलफेयर फाउंडेशन को दान लागू कानूनों के अनुसार कर लाभ के लिए पात्र हो सकता है।",
          "आधिकारिक रसीद के लिए, कृपया हमारी टीम से संपर्क करें।"
        ]
      },
      quick_replies: [
        { id: "contact", label_en: "📩 Contact Us", label_hi: "📩 संपर्क करें" },
        { id: "donate", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    impact: {
      state_id: "impact",
      messages: {
        en: [
          "Here's what we've achieved together 🌱",
          "🎓 1000+ students supported",
          "🤝 50+ volunteers",
          "🏫 Multiple villages reached"
        ],
        hi: [
          "हमने साथ मिलकर यह हासिल किया है 🌱",
          "🎓 1000+ छात्रों की सहायता",
          "🤝 50+ स्वयंसेवक",
          "🏫 कई गाँवों तक पहुँच"
        ]
      },
      quick_replies: [
        { id: "volunteer", label_en: "🤝 Join Us", label_hi: "🤝 जुड़ें" },
        { id: "donate", label_en: "💖 Donate", label_hi: "💖 दान करें" },
        { id: "welcome", label_en: "⬅️ Back", label_hi: "⬅️ वापस" }
      ]
    },
    ask_question: {
      state_id: "ask_question",
      messages: {
        en: ["Please type your question below 😊"],
        hi: ["कृपया अपना प्रश्न नीचे लि��ें 😊"]
      },
      input_enabled: true
    },
    fallback: {
      state_id: "fallback",
      messages: {
        en: [
          "I may not have that information yet.",
          "Would you like to contact our team?"
        ],
        hi: [
          "मुझे इस प्रश्न की जानकारी अभी नहीं है।",
          "क्या आप हमारी टीम से संपर्क करना चाहेंगे?"
        ]
      },
      quick_replies: [
        { id: "contact", label_en: "📩 Contact Us", label_hi: "📩 संपर्क करें" },
        { id: "welcome", label_en: "⬅️ Main Menu", label_hi: "⬅️ मुख्य मेनू" }
      ]
    },
    contact: {
      state_id: "contact",
      messages: {
        en: [
          "You can reach us here 👇",
          "📧 Email: tech.lakhilraj@gmail.com",
          "📞 Phone: +91 94677 63541"
        ],
        hi: [
          "आप हमसे यहाँ संपर्क कर सकते हैं 👇",
          "📧 ईमेल: tech.lakhilraj@gmail.com",
          "📞 फोन: +91 94677 63541"
        ]
      },
      quick_replies: [
        { id: "welcome", label_en: "⬅️ Main Menu", label_hi: "⬅️ मुख्य मेनू" }
      ]
    }
  } as Record<string, ChatState>
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [currentState, setCurrentState] = useState<string>(chatConfig.entry_state);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Initialize chat when opened
  const handleOpen = () => {
    if (!isOpen && messages.length === 0) {
      const welcomeState = chatConfig.states[chatConfig.entry_state];
      setTimeout(() => {
        addBotMessages(welcomeState.messages[language]);
      }, 300);
    }
    setIsOpen(!isOpen);
  };

  // Add bot messages with typing effect
  const addBotMessages = (texts: string[]) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const newMessages = texts.map(text => ({
        type: 'bot' as const,
        text,
        timestamp: Date.now()
      }));
      setMessages(prev => [...prev, ...newMessages]);
      setIsTyping(false);
    }, 600);
  };

  // Add user message
  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      type: 'user',
      text,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMessage]);
  };

  // Handle state transition
  const handleStateTransition = (stateId: string) => {
    const newState = chatConfig.states[stateId];
    if (!newState) {
      console.error(`State ${stateId} not found`);
      return;
    }

    setCurrentState(stateId);
    addBotMessages(newState.messages[language]);
  };

  // Handle button click
  const handleButtonClick = (stateId: string, buttonLabel: string) => {
    // Special handling for volunteer_page link
    if (stateId === 'volunteer_page') {
      addUserMessage(buttonLabel);
      window.location.href = '/volunteer';
      return;
    }

    // Add user message showing what they clicked
    addUserMessage(buttonLabel);
    
    // Transition to new state
    setTimeout(() => {
      handleStateTransition(stateId);
    }, 400);
  };

  // Handle text input (for ask_question state)
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Detect language from input (simple check)
    const hindiPattern = /[\u0900-\u097F]/;
    const detectedLang = hindiPattern.test(inputValue) ? 'hi' : 'en';
    if (detectedLang !== language) {
      setLanguage(detectedLang);
    }

    // Add user message
    addUserMessage(inputValue);
    setInputValue('');

    // Simulate bot response (fallback)
    setTimeout(() => {
      handleStateTransition('fallback');
    }, 600);
  };

  // Toggle language
  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
  };

  // Get current state config
  const currentStateConfig = chatConfig.states[currentState];

  return (
    <>
      {/* Floating Button with Pulse Animation */}
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-[#1E7A6E] text-white rounded-full shadow-lg hover:bg-[#176b60] hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Open chat"
      >
        <div className={`absolute inset-0 rounded-full bg-[#1E7A6E] animate-ping opacity-20 ${isOpen ? 'hidden' : ''}`}></div>
        <div className="relative transition-transform duration-300 group-hover:rotate-12">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </button>

      {/* Chat Modal with Slide-up Animation */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[calc(100vw-2rem)] sm:w-[400px] max-w-[400px] h-[70vh] sm:h-[500px] max-h-[600px] bg-white rounded-[16px] shadow-2xl z-50 flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1E7A6E] to-[#176b60] text-white p-4 rounded-t-[16px] flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-[16px] md:text-[18px] font-['Poppins',sans-serif]">
                {chatConfig.bot_name}
              </h3>
              <p className="text-[11px] md:text-[12px] text-white/80 font-['Inter',sans-serif]">
                {language === 'en' ? "We're here to help!" : "हम मदद के लिए यहाँ हैं!"}
              </p>
            </div>
            
            {/* Language Toggle with Flip Animation */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-[12px] transition-all duration-300 hover:scale-105"
              aria-label="Toggle language"
            >
              <Globe size={14} className="animate-in spin-in duration-300" />
              <span className="font-semibold">{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-[#F9FAFB] to-white"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.timestamp}-${index}`}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-${message.type === 'user' ? 'right' : 'left'}-2 duration-300`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 md:px-4 md:py-2.5 rounded-[12px] text-[13px] md:text-[14px] leading-relaxed shadow-sm transition-all duration-200 hover:shadow-md ${
                    message.type === 'user'
                      ? 'bg-[#1E7A6E] text-white rounded-br-none'
                      : 'bg-white text-[#111827] rounded-bl-none border border-[#E5E7EB]'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-white border border-[#E5E7EB] px-4 py-3 rounded-[12px] rounded-bl-none shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-[#1E7A6E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#1E7A6E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#1E7A6E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Reply Buttons with Stagger Animation */}
            {!isTyping && currentStateConfig?.quick_replies && (
              <div className="space-y-2 pt-2">
                {currentStateConfig.quick_replies.map((reply, index) => (
                  <button
                    key={`${reply.id}-${index}`}
                    onClick={() => handleButtonClick(
                      reply.id, 
                      language === 'en' ? reply.label_en : reply.label_hi
                    )}
                    className="w-full text-left px-3 py-2.5 bg-white text-[#1E7A6E] rounded-lg text-[12px] md:text-[13px] hover:bg-[#E9F5F1] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-[#1E7A6E]/20 shadow-sm font-['Inter',sans-serif] animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {language === 'en' ? reply.label_en : reply.label_hi}
                  </button>
                
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - Only show if input is enabled */}
          {currentStateConfig?.input_enabled && (
            <div className="p-3 md:p-4 border-t border-[#E5E7EB] bg-white rounded-b-[16px] animate-in slide-in-from-bottom duration-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={language === 'en' ? "Type your question..." : "अपना प्रश्न लिखें..."}
                  className="flex-1 px-3 py-2 md:px-4 md:py-2.5 border border-[#E5E7EB] rounded-lg text-[13px] md:text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] focus:border-transparent transition-all font-['Inter',sans-serif]"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#1E7A6E] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg hover:bg-[#176b60] hover:scale-105 active:scale-95 transition-all duration-200 text-[13px] md:text-[14px] font-semibold flex items-center gap-1.5"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}