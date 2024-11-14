import React from 'react';
import { Layout } from './components/Layout';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Welcome to Your App</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This minimal starter template includes everything you need to build modern React applications.
            Powered by Vite, React, TypeScript, and Tailwind CSS.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="group px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

const features = [
  {
    title: 'React + TypeScript',
    description: 'Type-safe development with modern React features and hooks.',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development.',
  },
  {
    title: 'Vite',
    description: 'Lightning fast build tool with instant HMR.',
  },
  {
    title: 'ESLint',
    description: 'Code quality and consistency built-in.',
  },
  {
    title: 'Production Ready',
    description: 'Optimized build setup for deployment.',
  },
  {
    title: 'Developer Experience',
    description: 'Hot reload, type checking, and modern tooling.',
  },
]

export default App;