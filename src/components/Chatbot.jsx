import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Kamu adalah asisten virtual CivicVoice bernama "CivicBot". 
CivicVoice adalah platform partisipasi publik yang memiliki fitur:

1. DASHBOARD - Menampilkan ringkasan partisipasi publik, Public Sentiment Analysis, National Vibe Check, Top Issues, Response Time, dan Engagement Rate.
2. FORUM - Tempat diskusi isu publik. User bisa membuat post baru dan berinteraksi dengan post lain. Kategori: Infrastructure, Healthcare, Education, Environment, Transportation.
3. LAPOR (Complaints) - User bisa melaporkan isu/pengaduan dan memantau statusnya (baru, diproses, selesai, ditolak).
4. VOTING - User bisa memberikan suara untuk kandidat atau isu tertentu.
5. LOGIN/REGISTER - User harus login untuk mengakses semua fitur.

Tugasmu:
- Bantu user memahami cara menggunakan fitur-fitur di atas
- Jawab pertanyaan seputar CivicVoice dengan ramah dan jelas
- Gunakan bahasa Indonesia yang santai namun profesional
- Jika ditanya di luar topik CivicVoice, arahkan kembali ke topik platform
- Berikan jawaban yang singkat, padat, dan mudah dipahami

Jangan menjawab pertanyaan yang tidak berkaitan dengan CivicVoice.`;

export default function Chatbot() {
    console.log("Chatbot rendered!");
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Halo! 👋 Saya CivicBot, asisten virtualmu di CivicVoice. Ada yang bisa saya bantu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: SYSTEM_PROMPT, });
      
      const validHistory = [];
const historyMessages = messages.filter((_, i) => i !== 0);

for (let i = 0; i < historyMessages.length - 1; i++) {
  validHistory.push({
    role: historyMessages[i].role === "assistant" ? "model" : "user",
    parts: [{ text: historyMessages[i].text }],
  });
}

const chat = model.startChat({
  history: validHistory,

});

      await new Promise(resolve => setTimeout(resolve, 2000));
      const result = await chat.sendMessage(userMessage);
      const responseText = result.response.text();

      setMessages((prev) => [...prev, { role: "assistant", text: responseText }]);
    } catch (error) {
      if (error.message?.includes('429')) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Mohon tunggu sebentar, server sedang sibuk. Coba lagi dalam beberapa detik ya! ⏳" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Maaf, terjadi kesalahan. Silakan coba lagi." },
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          zIndex: 9999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 99, 235, 0.5)',
        }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '170px',
          right: '24px',
          zIndex: 9999,
          width: '360px',
          backgroundColor: '#0f1f3d',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: '#1d4ed8',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px',
            }}>C</div>
            <div>
              <p style={{ color: 'white', fontWeight: '600', fontSize: '14px', margin: 0 }}>CivicBot</p>
              <p style={{ color: '#bfdbfe', fontSize: '12px', margin: 0 }}>Asisten CivicVoice</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '320px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '8px 12px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  backgroundColor: msg.role === 'user' ? '#2563eb' : 'rgba(255,255,255,0.1)',
                  color: msg.role === 'user' ? 'white' : '#bfdbfe',
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '8px 12px',
                  borderRadius: '16px 16px 16px 4px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#bfdbfe',
                  fontSize: '14px',
                }}>
                  Mengetik...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ketik pesan..."
              style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '8px 12px',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                backgroundColor: input.trim() && !isLoading ? '#2563eb' : '#1e3a6e',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '8px 12px',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
