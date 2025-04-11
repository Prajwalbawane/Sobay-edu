import React from 'react'

const DailyTest = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-violet-600 mb-6 text-center">📅 Daily Test</h1>

        <p className="text-gray-700 text-center mb-8">
          Practice daily to stay ahead in your exam preparation. New questions updated every day!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Sample Test Card 1 */}
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Day 1: Maharashtra GK</h2>
            <p className="text-gray-600 text-sm mb-4">20 Questions · 20 mins</p>
            <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">
              Start Test
            </button>
          </div>

          {/* Sample Test Card 2 */}
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Day 2: Police Bharti Reasoning</h2>
            <p className="text-gray-600 text-sm mb-4">25 Questions · 25 mins</p>
            <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">
              Start Test
            </button>
          </div>

          {/* Add more tests here if needed */}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">New tests will be added daily. Stay consistent! 💪</p>
        </div>
      </div>
    </div>
  )
}

export default DailyTest
