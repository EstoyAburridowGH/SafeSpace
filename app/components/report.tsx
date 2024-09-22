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
      <h2 className="text-2xl font-bold mb-4">Anonymous Reporting</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block mb-1">Description of the incident:</label>
          <textarea
            id="description"
            value={report.description}
            onChange={(e) => setReport({ ...report, description: e.target.value })}
            className="w-full p-2 border border-slate-300 h-32"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1">Location:</label>
          <input
            type="text"
            id="location"
            value={report.location}
            onChange={(e) => setReport({ ...report, location: e.target.value })}
            className="w-full p-2 border border-slate-300"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1">Date of incident:</label>
          <input
            type="date"
            id="date"
            value={report.date}
            onChange={(e) => setReport({ ...report, date: e.target.value })}
            className="w-full p-2 border border-slate-300"
            required
          />
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={report.isAnonymous}
              onChange={(e) => setReport({ ...report, isAnonymous: e.target.checked })}
              className="mr-2"
            />
            Submit Anonymously
          </label>
        </div>
        {!report.isAnonymous && (
          <div>
            <label htmlFor="name" className="block mb-1">Your Name:</label>
            <input
              type="text"
              id="name"
              value={report.name}
              onChange={(e) => setReport({ ...report, name: e.target.value })}
              className="w-full p-2 border border-slate-300"
            />
          </div>
        )}
        <button type="submit" className="px-4 py-2 bg-slate-600 text-white hover:bg-slate-700">
          Submit Report
        </button>
      </form>
    </div>
  )
}