import React, { useState } from 'react';

const RunModel: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRunModel = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/run-model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to run model');
      }

      const data = await response.json();
      setResult(data.output);
    } catch (err) {
      setError('An error occurred while running the model.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Chat with the Model</h2>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <textarea
            className="w-full p-2 border rounded-lg resize-none mb-4"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
          />
          <button
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
            onClick={handleRunModel}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              'Send'
            )}
          </button>
        </div>
        <div className="p-4 border-t border-gray-200">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {result && (
            <div className="flex flex-col space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-800">{result}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RunModel;
