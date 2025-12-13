"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu } from './Icons';
import { sendMessageToGemini } from '../../services/geminiService';
import { ChatMessage, Language } from '../types';

interface ChatWidgetProps {
  lang: Language;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: lang === 'ru' 
        ? 'Привет! Я AI-ассистент Hypertrade. Спросите меня о комиссиях, маршрутизации или как начать торговлю.'
        : 'Hello! I am the Hypertrade AI Assistant. Ask me about fees, routing, or how to start trading.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset welcome message on lang change
  useEffect(() => {
    setMessages([{
      role: 'model',
      text: lang === 'ru' 
        ? 'Привет! Я AI-ассистент Hypertrade. Спросите меня о комиссиях, маршрутизации или как начать торговлю.'
        : lang === 'ja'
        ? 'こんにちは！Hypertrade AIアシスタントです。手数料や取引方法についてご質問ください。'
        : 'Hello! I am the Hypertrade AI Assistant. Ask me about fees, routing, or how to start trading.',
      timestamp: new Date()
    }]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Pass the current language to the service
      const responseText = await sendMessageToGemini(userMsg.text, lang);
      
      const botMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass-panel rounded-2xl flex flex-col shadow-2xl border border-hyper-accent/20 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-hyper-800/80 p-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-semibold text-white">Hypertrade AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-hyper-900/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-hyper-secondary text-white rounded-br-none' 
                      : 'bg-hyper-700 text-gray-100 rounded-bl-none border border-gray-600'
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ 
                    __html: msg.text
                      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                      .replace(/\n/g, '<br/>') 
                  }} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-hyper-700 p-3 rounded-lg rounded-bl-none flex gap-2 items-center">
                  <div className="w-2 h-2 bg-hyper-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-hyper-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-hyper-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-hyper-800/80 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'ru' ? "Спросите о Hypertrade..." : "Ask about Hypertrade..."}
                className="flex-1 bg-hyper-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-hyper-accent transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-hyper-accent text-hyper-900 p-2 rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-hyper-secondary hover:bg-violet-600 text-white p-4 rounded-full shadow-lg shadow-purple-900/40 transition-all hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <Cpu size={24} />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap font-medium pr-1">{lang === 'ru' ? 'AI Помощник' : 'AI Assistant'}</span>}
      </button>
    </div>
  );
};
