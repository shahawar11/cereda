import React from "react";

export function KeyHighlightsGrid() {
  return (
    <div className="max-w-6xl px-8 mx-auto">
      <div className="flex flex-col justify-center space-y-2 text-gray-800 dark:text-gray-300 max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl pb-4 xl:text-3xl text-blue-900 dark:text-white">
          Key Highlights of ICLSMHA
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
          >
            {/* Icon/Number Badge */}
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
              <span className="text-white font-bold text-lg">{index + 1}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300 capitalize">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Renowned keynote speakers",
    description:
      "Listen to inspiring talks from global leaders in life sciences, healthcare, biotechnology and multidisciplinary health approaches.",
    link: "#",
  },
  {
    title: "Research paper presentations",
    description:
      "Present and discuss your latest research findings in life sciences and healthcare with an international audience of experts and practitioners.",
    link: "#",
  },
  {
    title: "Workshops & panel discussions",
    description:
      "Participate in engaging sessions led by industry leaders, healthcare professionals and academic experts focusing on translational research and practical applications.",
    link: "#",
  },
  {
    title: "Networking opportunities",
    description:
      "Connect with researchers, healthcare professionals, biotechnology experts and industry leaders to build collaborations and expand your professional network across multiple disciplines.",
    link: "#",
  },
  {
    title: "Multidisciplinary collaboration",
    description:
      "Engage in cross-sector collaboration opportunities spanning biotechnology, public health, environmental science, clinical research and allied health disciplines.",
    link: "#",
  },
  {
    title: "CERADA excellence awards",
    description:
      "Celebrate outstanding contributions with our prestigious awards recognizing excellence in life sciences research, healthcare innovation and multidisciplinary approaches to health and wellbeing.",
    link: "#",
  },
];
