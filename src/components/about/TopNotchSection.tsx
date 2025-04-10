import { Link } from 'react-router-dom';

const TopNotchSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Prior Auth Support AI Providing Top Notch
          <span className="italic block mt-2 md:mt-4">Healthcare assistance</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
          Lorem ipsum dolor sit amet consectetur. Convallis at commodo semper facilisi volutpat aenean aliquam nisi. Urna egestas arcu vel cursus praesent nec nibh scelerisque. In urna sed orci odio enim. Tellus pellentesque in urna adipiscing gravida a vitae netus.
        </p>
        <Link to="/contact-us">
          <button className="bg-black text-white text-sm md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TopNotchSection;
