'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "psychologist" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: "user" }])
      setInputMessage("")
      // Here you would typically send the message to the server
      // and handle the psychologist's response
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 ${
                message.sender === "user"
                  ? "bg-slate-600 text-white"
                  : "bg-slate-200 text-slate-900"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 bg-slate-100">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-slate-300 focus:outline-none focus:border-slate-500"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-slate-600 text-white hover:bg-slate-700 focus:outline-none"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}