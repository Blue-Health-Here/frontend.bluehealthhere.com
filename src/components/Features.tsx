import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, FilePlus, Edit } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-12 h-12 text-black-600" />, // Adjusted icon size
      title: "Progress Notes Analyzer",
      description: "Streamline your medical documentation with AI-powered analysis.",
      link: '/progress-notes-analyzer'
    },
    {
      icon: <FilePlus className="w-12 h-12 text-black-600" />,
      title: "Generate Letter of Medical Necessity",
      description: "Quickly create accurate letters to support insurance claims.",
      link: '/medical-necessity-letter'
    },
    {
      icon: <Edit className="w-12 h-12 text-black-600" />,
      title: "Generate Appeal Letter",
      description: "Easily craft appeal letters for denied health insurance claims.",
      link: '/appeal-letter'
    },
    {
      icon: <Edit className="w-12 h-12 text-black-600" />,
      title: "Prior Authorization Approval Criteria",
      description: "Easily search PA criteria for specific medication and insurance.",
      link: '/search-criteria'
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-md flex flex-col items-center text-center">
              <div className="mb-4 md:mb-6">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-4">
                {feature.title} 
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                {feature.description}
              </p>
              <Link to={feature.link}>
                <button className="bg-black text-white text-sm md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-3 transition-colors">
                  Try it
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
