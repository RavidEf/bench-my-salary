'use client';
import './chat.css';
// import { useChat } from 'ai/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Robot from '../../public/images/ai-bot.png';
import RobotTalk from '../../public/images/chatbot-talk.png';
import Close from '../../public/images/close-icon.png';
import devAvatar from '../../public/images/gamer-avatar.png';

// import userAvatar from '../../public/images/man-avatar.png';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const toggle = () => {
    setChatOpen(!chatOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      {
        id: Date.now(),
        role: 'user',
        content: input,
      },
      { id: Date.now() + 1, role: 'assistant', content: '' },
    ];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Fetch streaming response
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });

    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();
    let responseContent = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      responseContent += textDecoder.decode(value);
      // eslint-disable-next-line no-loop-func
      setMessages((prev) =>
        prev.map(
          (msg) =>
            msg.role === 'assistant' && msg.content === '' // Identify the placeholder
              ? { ...msg, content: responseContent } // Update content
              : msg, // Leave other messages untouched
        ),
      );
    }
    setIsLoading(false);
  };

  const renderResponse = () => {
    return (
      <div ref={chatContainerRef} className="response-container">
        {messages.map((msg, index) => (
          <div key={`msg-${msg.id}`}>
            <div>
              {index % 2 ? (
                <p className="msg-left">
                  <Image
                    className="avatar"
                    alt="avatar"
                    src={msg.role === 'assistant' ? Robot : devAvatar}
                    width={30}
                    height={30}
                  />
                  <span>{msg.content}</span>
                </p>
              ) : (
                <p className="msg-right">
                  <Image
                    className="avatar"
                    alt="avatar"
                    src={msg.role === 'assistant' ? Robot : devAvatar}
                    width={30}
                    height={30}
                  />
                  <span>{msg.content}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="chat-container">
      <div
        style={{
          display: chatOpen ? 'block' : 'none',
          width: '100%',
          height: '500px',
          backgroundColor: '#fff',
          borderRadius: '20px',
        }}
      >
        <div className="headline-chat">
          <p>Dev Career AI Bot</p>
          <p>
            <Image
              src={Close}
              alt="close-icon-chat"
              width={15}
              height={15}
              className="close-btn-chat"
              onClick={toggle}
            />
          </p>
        </div>
        {renderResponse()}

        <form onSubmit={handleSubmit} className="mainFormChat">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button className="chat-btn" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="div-btns-assis">
        <button className="assisBtn" onClick={toggle}>
          <Image
            src={RobotTalk}
            alt="close-icon-chat"
            width={35}
            height={35}
            className="hi"
            onClick={toggle}
          />
        </button>
      </div>
    </section>
  );
}
