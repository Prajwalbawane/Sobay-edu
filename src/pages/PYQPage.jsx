import React from 'react';

export default function PYQs() {
  const pyqList = [
    {
      title: "Police Bharti 2023",
      subject: "General Knowledge",
      year: "2023",
      link: "#",
    },
    {
      title: "ZP Exam 2022",
      subject: "Math & Reasoning",
      year: "2022",
      link: "#",
    },
    {
      title: "Forest Guard 2021",
      subject: "Science",
      year: "2021",
      link: "#",
    },
    {
      title: "TET 2020",
      subject: "Educational Psychology",
      year: "2020",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Previous Year Questions (PYQs)</h2>
        <p className="text-gray-600 mb-10">
          Practice with real exam papers from previous years. Boost your preparation by solving authentic MSQs.
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2">
        {pyqList.map((pyq, index) => (
          <a
            key={index}
            href={pyq.link}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-violet-600">{pyq.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{pyq.subject}</p>
            <p className="text-sm text-gray-400">{pyq.year}</p>
            <div className="mt-4 text-violet-600 font-medium text-sm">View Paper →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
