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
      title: 'Free Shipping',
      description: 'Free shipping all over the US',
      delay: 0,
    },
    {
      icon: ShieldCheck,
      title: '100% Satisfaction',
      description: 'Free shipping all over the US',
      delay: 100,
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Free shipping all over the US',
      delay: 200,
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Free shipping all over the US',
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