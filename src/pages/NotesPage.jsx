import React from 'react'
import { BookOpenIcon } from '@heroicons/react/24/solid'

const notesData = [
  {
    subject: 'Mathematics',
    topic: 'Probability & Statistics',
    fileUrl: '#',
  },
  {
    subject: 'Computer Science',
    topic: 'Operating Systems',
    fileUrl: '#',
  },
  {
    subject: 'Artificial Intelligence',
    topic: 'Search Algorithms',
    fileUrl: '#',
  },
  {
    subject: 'DBMS',
    topic: 'Normalization',
    fileUrl: '#',
  },
]

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-violet-600 mb-10">
        📚 Subject Notes
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {notesData.map((note, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border-l-4 border-violet-600"
          >
            <div className="flex items-center space-x-4 mb-4">
              <BookOpenIcon className="h-8 w-8 text-violet-600" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{note.subject}</h2>
                <p className="text-sm text-gray-600">{note.topic}</p>
              </div>
            </div>
            <a
              href={note.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-violet-700"
            >
              View Note
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
