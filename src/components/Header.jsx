import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

 // ✅ apna logo yaha import karo
 import logo from '../assets/sobaylogo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'MSQ Test', href: '/msq-test' },
  { name: 'Notes', href: '/notes' },
  { name: 'PYQs', href: '/pyqpage' },
  { name: 'Ask AI', href: '/ask-ai' },
  { name: 'Daily Test', href: '/daily-test' },
  { name: 'LogIn', href: '/login' },
]

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Logo and Title */}
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Sobay Logo" className="h-25 w-40 rounded-full" />
                {/* <span className="text-xl font-bold text-violet-600">Sobay</span> */}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-800 hover:text-violet-600 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Login Button */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/login" className="text-sm text-gray-600 hover:text-violet-600">
                  Log in →
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <Disclosure.Button className="text-gray-900 hover:text-violet-600">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className="md:hidden px-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-800 hover:text-violet-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block text-sm text-gray-600 hover:text-violet-600"
            >
              Log in →
            </Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
