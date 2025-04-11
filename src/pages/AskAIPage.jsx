import React, { useState } from 'react'
import { PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function AskAIPage() {
  const [question, setQuestion] = useState('')
  const [responses, setResponses] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!question.trim()) return

    const newResponse = {
      user: question,
      bot: "I'm still learning! But here's a helpful response related to: " + question,
    }

    setResponses((prev) => [newResponse, ...prev])
    setQuestion('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-6 border">
        <div className="flex items-center space-x-3 mb-6">
          <SparklesIcon className="h-8 w-8 text-violet-600" />
          <h1 className="text-3xl font-bold text-gray-800">Ask AI Assistant</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Ask me anything about study, exam, or tech..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-full"
          >
            <PaperAirplaneIcon className="h-5 w-5 rotate-45" />
          </button>
        </form>

        <div className="space-y-4">
          {responses.map((res, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-sm text-violet-600 font-semibold mb-1">You:</p>
              <p className="text-gray-800 mb-2">{res.user}</p>
              <p className="text-sm text-green-600 font-semibold mb-1">Sobay AI:</p>
              <p className="text-gray-700">{res.bot}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
