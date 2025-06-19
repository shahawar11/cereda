import React from "react";

const Purpose = () => {
  return (
    <div className="w-full bg-gray-50 p-8">
      <div className="flex flex-col justify-center space-y-2 text-gray-800 dark:text-gray-300 max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl pb-4 xl:text-3xl text-blue-900 dark:text-white">
          Purpose of the Conference
        </h1>

        <div className="w-full space-y-6">
          <p className="leading-relaxed text-base lg:text-lg">
            The purpose of the International Conference on Life Sciences and
            Multidisciplinary Healthcare Approaches (ICLSMHA-2026) is to provide
            a global platform for researchers, educators, healthcare
            professionals and industry leaders to come together and explore
            innovative, cross-disciplinary solutions to today&apos;s most pressing
            health and life science challenges.
          </p>

          <div>
            <p className="leading-relaxed text-base lg:text-lg mb-4">
              This conference seeks to:
            </p>

            <ul className="space-y-4 text-gray-800 dark:text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="leading-relaxed text-base lg:text-lg">
                  Foster collaboration across diverse fields such as
                  biotechnology, medicine, public health, environmental science
                  and allied health disciplines.
                </span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="leading-relaxed text-base lg:text-lg">
                  Promote knowledge exchange by showcasing cutting-edge
                  research, emerging technologies and best practices in
                  healthcare and life sciences.
                </span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="leading-relaxed text-base lg:text-lg">
                  Encourage translational research that bridges the gap between
                  scientific discovery and clinical or community application.
                </span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="leading-relaxed text-base lg:text-lg">
                  Support sustainable health strategies that contribute to
                  global wellbeing, resilience and equity.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
