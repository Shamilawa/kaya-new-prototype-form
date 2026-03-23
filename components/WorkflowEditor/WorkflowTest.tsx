"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, Paperclip, Smile, ChevronLeft, Send } from "lucide-react";
import styles from "./WorkflowTest.module.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface WorkflowTestProps {
  onBack: () => void;
}

const WorkflowTest: React.FC<WorkflowTestProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const simulateStreamingResponse = async (userMessage: string) => {
    setIsStreaming(true);
    
    // Initial response structure
    const fullResponse = `Based on your request "${userMessage}", I have analyzed the workflow context. The current configuration is optimized for high-performance data processing. I can help you refine the variables or adjust the node logic if needed. What would you like to explore next?`;
    
    // Add empty assistant message
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
    
    let currentContent = "";
    const words = fullResponse.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 80 + Math.random() * 100));
        currentContent += (i === 0 ? "" : " ") + words[i];
        
        setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
                role: "assistant",
                content: currentContent,
            };
            return newMessages;
        });
    }
    
    setIsStreaming(false);
  };

  const handleSend = () => {
    if (!inputValue.trim() || isStreaming) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");
    
    // Simulate thinking time
    setTimeout(() => {
        simulateStreamingResponse(userMessage);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`${styles.bodyContent} m-4! p-0! ml-0!`}>
      <div className={styles.navHeader}>
        <div className={styles.breadcrumbsWrapper}>
          <div className={styles.badge}>
            <div className={styles.dot}>
              <div className={styles.dot2} />
            </div>
            <div className={styles.text}>Ready to Test</div>
          </div>
        </div>
        <button className={styles.backButton} onClick={onBack}>
          <ChevronLeft size={16} />
          <span>Back to Editor</span>
        </button>
      </div>
      <div className={`${styles.containerWrapper}`}>
        <div className={`${styles.container} ${messages.length > 0 ? styles.containerWithMessages : ""}`}>
          <div className={styles.content}>
            {messages.length === 0 ? (
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text2}>Start testing your Workflow</div>
                  <div className={styles.supportingText}>
                    Send a message below to test how your workflow responds. Each
                    test runs in real-time using your configured settings and
                    variables.
                  </div>
                </div>
            ) : (
                <div className={styles.messageList} ref={messageListRef}>
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`${styles.messageRow} ${msg.role === 'user' ? styles.userRow : styles.assistantRow}`}
                        >
                            <div className={`${styles.messageBubble} ${msg.role === 'user' ? styles.userBubble : styles.assistantBubble}`}>
                                {msg.content}
                                {isStreaming && index === messages.length - 1 && msg.role === 'assistant' && (
                                    <span className={styles.cursor} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            <div className={styles.messageInput}>
              <div className={styles.messageAction}>
                <div className={styles.textareaInputField}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.input}>
                      <textarea 
                        className={styles.messageInputTextarea}
                        placeholder="Type your message here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={1}
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.buttonsbuttonUtility}>
                  <Mic size={16} />
                </button>
                <div className={styles.actions}>
                  <div className={styles.utilities}>
                    <button className={styles.buttonsbuttonUtility2}>
                      <Paperclip size={16} />
                    </button>
                    <button className={styles.buttonsbuttonUtility2}>
                      <Smile size={16} />
                    </button>
                  </div>
                  <button 
                    className={styles.buttonsbutton}
                    onClick={handleSend}
                    disabled={isStreaming || !inputValue.trim()}
                  >
                    <div className={styles.text4}>
                        <Send size={18} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTest;
