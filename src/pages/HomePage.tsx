import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white p-4">
      <div className="max-w-4xl mx-auto my-20 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Page de test</h1>
        <p className="text-xl text-white text-center mb-8">Si vous pouvez voir ce texte, le rendu fonctionne correctement.</p>
        <div className="bg-blue-600 text-white font-bold py-4 px-6 rounded-full text-center">
          Ceci est un bouton test
        </div>
      </div>
    </div>
  );
};

export default HomePage;
