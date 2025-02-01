import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Truck, ShieldCheck, CreditCard, HeadphonesIcon } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="flex flex-col items-center p-6 transition-transform duration-300 rounded-lg ThemeColor sm:flex-row sm:items-start hover:scale-105"
  >
    <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full ThemeColor sm:mb-0 sm:mr-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="text-center sm:text-left">
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: Truck,
      title: 'Brands Promotion',
      description: 'Impowering The Local Brands',
      delay: 0,
    },
    {
      icon: ShieldCheck,
      title: 'Rate Transparency',
      description: 'No Manipulation In Cost Rate',
      delay: 100,
    },
    {
      icon: CreditCard,
      title: 'Customer Relief',
      description: 'All Brands Under One Roof',
      delay: 200,
    },
    {
      icon: HeadphonesIcon,
      title: 'Customer Support',
      description: 'Providing Trustworthy Service',
      delay: 300,
    },
  ];

  return (
    <div className="w-full px-4 py-12 mx-auto ">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;