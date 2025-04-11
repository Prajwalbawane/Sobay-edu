import React from 'react'
import logo from '../assets/sobaylogo.png'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-8 space-y-6 border">
        <div className="flex flex-col items-center space-y-3">
          <img src={logo} alt="Sobay Logo" className="h-16 w-16 rounded-full" />
          <h2 className="text-2xl font-bold text-violet-600">Welcome to Sobay</h2>
          <p className="text-sm text-gray-500">Login to access your dashboard</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-xl hover:bg-violet-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account? <a href="#" className="text-violet-600 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  )
}
