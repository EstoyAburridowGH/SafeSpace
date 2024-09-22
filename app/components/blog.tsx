'use client'

import { useState } from 'react'

interface BlogPost {
  id: number
  title: string
  content: string
  author: string
  isAnonymous: boolean
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([
    { id: 1, title: "My Journey", content: "This is my story...", author: "Jane Doe", isAnonymous: false },
    { id: 2, title: "Overcoming Challenges", content: "I want to share...", author: "Anonymous", isAnonymous: true },
  ])
  const [newPost, setNewPost] = useState({ title: "", content: "", author: "", isAnonymous: false })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPosts([...posts, { ...newPost, id: posts.length + 1 }])
    setNewPost({ title: "", content: "", author: "", isAnonymous: false })
    // Here you would typically send the new post to the server
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="border border-slate-300 p-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="mt-2">{post.content}</p>
          <p className="mt-2 text-sm text-slate-600">
            Posted by: {post.isAnonymous ? "Anonymous" : post.author}
          </p>
        </div>
      ))}
      <h2 className="text-2xl font-bold mt-8">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
          className="w-full p-2 border border-slate-300"
          required
        />
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          placeholder="Content"
          className="w-full p-2 border border-slate-300 h-32"
          required
        />
        <input
          type="text"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          placeholder="Your Name (leave blank for anonymous)"
          className="w-full p-2 border border-slate-300"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={newPost.isAnonymous}
            onChange={(e) => setNewPost({ ...newPost, isAnonymous: e.target.checked })}
            className="mr-2"
          />
          Post Anonymously
        </label>
        <button type="submit" className="px-4 py-2 bg-slate-600 text-white hover:bg-slate-700">
          Submit Post
        </button>
      </form>
    </div>
  )
}