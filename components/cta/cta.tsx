import React from 'react'
import { Button } from '../ui/button';

function CTA() {
  return (
    <>
      <section id="registration" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join ICLSMHA-2026?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of a transformative platform driving innovation and positive
            impact in healthcare worldwide!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              Submit Your Paper
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA
