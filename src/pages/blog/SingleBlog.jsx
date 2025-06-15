import React from 'react';

export const SingleBlog = () => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          The Future of Web Development in 2024
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="mr-4">By Jane Doe</span>
          <span>Published on June 15, 2024</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
          alt="Web development on a laptop"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          The web development landscape continues to evolve at a rapid pace. In this article, 
          we'll explore the key trends shaping the industry this year.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. The Rise of AI Integration</h2>
        <p>
          Modern frameworks now offer built-in AI capabilities. Tools like GitHub Copilot 
          are becoming standard in developers' workflows, reducing boilerplate code and 
          accelerating development cycles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Serverless Architecture Maturity</h2>
        <p>
          Serverless computing has moved beyond just functions. Full-stack serverless 
          applications are now viable for production workloads with improved cold start 
          performance and better tooling.
        </p>

        <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg my-6">
          <h3 className="font-bold text-lg mb-2">Pro Tip</h3>
          <p>
            When adopting new technologies, always evaluate their long-term maintainability 
            rather than just initial productivity gains.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. WebAssembly Goes Mainstream</h2>
        <p>
          With major browsers now fully supporting WASM, we're seeing performance-critical 
          applications like video editors and CAD tools running directly in the browser.
        </p>

        {/* Conclusion */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Final Thoughts</h3>
          <p>
            While the fundamentals of web development remain constant, embracing these trends 
            can give developers and businesses a competitive edge. The key is to adopt new 
            technologies strategically rather than chasing every new trend.
          </p>
        </div>
      </div>

      {/* Author Bio */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-start">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Jane Doe"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">About the Author</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Jane Doe is a senior web developer with 10+ years of experience building 
              scalable web applications. She specializes in JavaScript frameworks and 
              modern web architecture.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
};