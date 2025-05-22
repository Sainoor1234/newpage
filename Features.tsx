import React from 'react';
import { Shield, Zap, BarChart, Users, Globe, Lock } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    title: 'Lightning Fast',
    description: 'Our solutions are optimized for performance, ensuring minimal load times and maximum efficiency.',
    color: 'blue'
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    title: 'Highly Secure',
    description: 'Enterprise-grade security with end-to-end encryption and advanced threat protection.',
    color: 'purple'
  },
  {
    icon: <BarChart className="h-6 w-6 text-teal-500" />,
    title: 'Actionable Analytics',
    description: 'Gain valuable insights with our comprehensive analytics and reporting tools.',
    color: 'teal'
  },
  {
    icon: <Users className="h-6 w-6 text-amber-500" />,
    title: 'Team Collaboration',
    description: 'Streamline teamwork with our collaborative tools designed for modern workspaces.',
    color: 'amber'
  },
  {
    icon: <Globe className="h-6 w-6 text-green-500" />,
    title: 'Global Scale',
    description: 'Scale your operations globally with our distributed infrastructure and localization support.',
    color: 'green'
  },
  {
    icon: <Lock className="h-6 w-6 text-red-500" />,
    title: 'Compliance Ready',
    description: 'Stay compliant with industry regulations and standards with our built-in compliance tools.',
    color: 'red'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform offers a comprehensive suite of tools designed to streamline your operations
            and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;