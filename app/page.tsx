'use client'

import { useState } from 'react'
import { Menu, MessageSquare, BookOpen, Flag } from 'lucide-react'
import Chat from './components/chat'
import Blog from './components/blog'
import Report from './components/report'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('chat')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <Chat />
      case 'blog':
        return <Blog />
      case 'report':
        return <Report />
      default:
        return <div>Select a function</div>
    }
  }

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Left Panel */}
      <div
        className={`bg-slate-800 text-white ${
          isMenuOpen ? 'w-64' : 'w-16'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="text-white">
            <Menu size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <ul>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === 'chat' ? 'bg-slate-700' : ''
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare size={24} className="inline-block mr-2" />
              {isMenuOpen && 'Chat'}
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === 'blog' ? 'bg-slate-700' : ''
              }`}
              onClick={() => setActiveTab('blog')}
            >
              <BookOpen size={24} className="inline-block mr-2" />
              {isMenuOpen && 'Blog'}
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === 'report' ? 'bg-slate-700' : ''
              }`}
              onClick={() => setActiveTab('report')}
            >
              <Flag size={24} className="inline-block mr-2" />
              {isMenuOpen && 'Report'}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-200 p-4">
          <h1 className="text-2xl font-bold text-slate-800">SafeSpace</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}