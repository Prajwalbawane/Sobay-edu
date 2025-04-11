import React from "react";
import {
  CheckCircleIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

// Features Data
const features = [
  {
    title: "MSQ Test",
    icon: <CheckCircleIcon className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Notes",
    icon: <DocumentTextIcon className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "PYQs",
    icon: <ClipboardDocumentIcon className="w-10 h-10 text-amber-800" />,
  },
  {
    title: "Ask AI",
    icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Daily Test",
    icon: <CalendarDaysIcon className="w-10 h-10 text-orange-400" />,
  },
];

// Feature Card
function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Blush Sparks */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white text-center py-24 px-4">
        {/* Red Spark */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full opacity-70 blur-3xl z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 0, 0, 0.5) 10%, rgba(255, 0, 0, 0) 70%)",
          }}
        ></div>

        {/* Blue Spark */}
        <div
          className="absolute top-[40%] left-[75%] w-[30vw] h-[30vw] rounded-full opacity-70 blur-sm z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 255, 0.5) 10%, rgba(0, 0, 255, 0) 70%)",
          }}
        ></div>

        <div className="relative z-10">
          <p className="text-sm text-violet-600 font-semibold mb-4">
            Empowering students across Maharashtra.{" "}
            <a href="#" className="underline">
              Explore Courses →
            </a>
          </p>
          \
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="text-violet-600">Learn</span>{" "}
            <span className="text-orange-500">Smarter</span> with <br />
            <span className="text-blue-600">Sobay Education</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Sobay Education helps you crack competitive exams with
            expert-curated notes, MSQ tests, previous year papers, and
            AI-powered learning tools — all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold text-gray-700 hover:text-violet-600"
            >
              See Features →
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Features
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
