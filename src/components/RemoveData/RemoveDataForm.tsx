import React from 'react';

const RemoveDataForm = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto text-center px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Improve Your Data Privacy with <br />
          <span className="italic">Prior Auth Support AI</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
          Lorem ipsum dolor sit amet consectetur. Convallis at commodo semper facilisi volutpat aenean aliquam nisi.
          Urna egestas arcu vel cursus praesent nec nibh scelerisque. In urna sed orci odio enim. Tellus pellentesque in urna
          adipiscing gravida a vitae netus.
        </p>
        <form className="space-y-6 md:space-y-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-[600px] mx-auto px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
          />
          <div>
            <button
              type="submit"
              className="bg-black text-white text-sm md:text-lg px-8 md:px-16 py-3 md:py-6 rounded-full hover:bg-gray-800 transition-colors"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RemoveDataForm;
