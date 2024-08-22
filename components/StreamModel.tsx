import React, { useState } from 'react';

const StreamModel: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStreamModel = async () => {
    setLoading(true);
    setResult('');
    setError(null);

    try {
      const response = await fetch('/api/stream-model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let resultText = '';

      const readStream = async () => {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          resultText += decoder.decode(value, { stream: true });
          setResult((prev) => prev + resultText);
        }
      };

      await readStream();
    } catch (err) {
      setError('An error occurred while streaming the model.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Stream Model</h2>
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
            onClick={handleStreamModel}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              'Stream Model'
            )}
          </button>
        </div>
        <div className="p-4 border-t border-gray-200">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex flex-col space-y-4">
            {result && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-800">{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamModel;
