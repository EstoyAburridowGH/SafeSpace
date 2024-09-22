'use client'

import { useState } from 'react'

export default function Report() {
  const [report, setReport] = useState({
    description: "",
    location: "",
    date: "",
    isAnonymous: true,
    name: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Report submitted:", report)
    // Here you would typically send the report to the server
    // and handle the response
    alert("Report submitted successfully")
    setReport({ description: "", location: "", date: "", isAnonymous: true, name: "" })
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Reporte Anónimo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block mb-1 text-slate-800">Descripción</label>
          <textarea
            id="description"
            value={report.description}
            onChange={(e) => setReport({ ...report, description: e.target.value })}
            className="w-full p-2 border border-slate-300 h-32 text-slate-800"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1 text-slate-800">Lugar</label>
          <input
            type="text"
            id="location"
            value={report.location}
            onChange={(e) => setReport({ ...report, location: e.target.value })}
            className="w-full p-2 border border-slate-300 text-slate-800"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 text-slate-800">Fecha</label>
          <input
            type="date"
            id="date"
            value={report.date}
            onChange={(e) => setReport({ ...report, date: e.target.value })}
            className="w-full p-2 border border-slate-300 text-slate-800"
            required
          />
        </div>
        <div>
        </div>
        <button type="submit" className="px-4 py-2 bg-slate-600 text-white hover:bg-slate-700">
          Subir reporte
        </button>
      </form>
    </div>
  )
}