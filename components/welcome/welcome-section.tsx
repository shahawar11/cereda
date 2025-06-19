import Image from 'next/image';
import React from 'react'

const WelcomeSection = () => {
  return (
    <div className="w-full bg-emerald-50 p-8">
      <div className="flex flex-col justify-center md:justify-start space-y-2 text-gray-800 dark:text-gray-300 max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl pb-4 xl:text-3xl text-blue-900 dark:text-white">
          Welcome to ICLSMHA-2026
        </h1>
        <div className="flex flex-col gap-y-8 md:gap-y-0 justify-center md:flex-row md:justify-between items-center">
          <div className="w-full md:w-1/2">
            <p className="leading-relaxed">
              We are delighted to invite{" "}
              <span className="font-medium">
                researchers, academicians, healthcare professionals,
              </span>
              and <span className="font-medium">industry experts</span> from
              around the globe to join us at ICLSMHA-2026, where innovation
              meets collaboration. This international platform is designed to
              foster dialogue, share cutting-edge research, and explore
              interdisciplinary strategies that shape the future of health and
              life sciences.
            </p>

            <p className="leading-relaxed">
              <strong>ICLSMHA-2026</strong> serves as a dynamic hub for
              scholars, healthcare practitioners, and industry experts to come
              together, exchange knowledge, and foster cross-sector
              collaboration.
            </p>

            <p className="leading-relaxed">
              This conference is committed to addressing pressing global health
              issues by embracing innovative, multidisciplinary approaches
              across biotechnology, public health, environmental science, and
              medical research. Engage with thought leaders, present
              groundbreaking work, and be part of transformative conversations
              that inspire progress in healthcare.
            </p>

            <p className="leading-relaxed">
              Let us come together to bridge scientific discovery and practical
              application in advancing health, sustainability, and global
              wellbeing.
            </p>
          </div>
          <div>
            <Image
              src="/crowd2.jpg"
              alt=""
              width={500}
              height={600}
              className="hover:scale-105 transform transition-transform duration-300 ease-in-out rounded-md"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection
