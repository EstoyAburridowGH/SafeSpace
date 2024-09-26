import React, { useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([
    // Puedes descomentar y añadir posts de ejemplo aquí si lo deseas
    // { id: 1, title: "My Journey", content: "This is my story...", author: "Jane Doe", isAnonymous: false },
    // { id: 2, title: "Overcoming Challenges", content: "I want to share...", author: "Anonymous", isAnonymous: true },
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "", author: "", isAnonymous: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
    setNewPost({ title: "", content: "", author: "", isAnonymous: false });
    // Aquí típicamente enviarías el nuevo post al servidor
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Blogs</h2>
      {posts.map((post) => (
        <div key={post.id} className="border border-slate-300 p-4">
          <h3 className="text-xl font-semibold text-slate-800">{post.title}</h3>
          <p className="mt-2 text-slate-800">{post.content}</p>
          <p className="mt-2 text-sm text-slate-600">
            Escrito por: {post.isAnonymous ? "Anónimo" : post.author}
          </p>
        </div>
      ))}
      <h2 className="text-2xl font-bold mt-8 text-slate-800">Crea un nuevo blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Título"
          className="w-full p-2 border border-slate-300 text-slate-800"
          required
        />
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          placeholder="Contenido"
          className="w-full p-2 border border-slate-300 h-32 text-slate-800"
          required
        />
        <label className="flex items-center text-slate-800">
          <input
            type="checkbox"
            checked={newPost.isAnonymous}
            onChange={(e) => setNewPost({ ...newPost, isAnonymous: e.target.checked })}
            className="mr-2"
          />
          Publicar anónimamente
        </label>
        <input
          type="text"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          placeholder="Tu nombre"
          className="w-full p-2 border border-slate-300 text-slate-800"
          disabled={newPost.isAnonymous}
          required
        />
        <button type="submit" className="px-4 py-2 bg-slate-600 text-white hover:bg-slate-700">
          Enviar blog
        </button>
      </form>
    </div>
  );
}
