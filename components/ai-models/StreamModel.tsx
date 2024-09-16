import { useState, FormEvent } from 'react';
import axios from 'axios';

// Define interface for the prompt input
interface PromptInput {
  prompt: string;
}

// Define interface for the result returned by the Replicate API
interface ReplicateResponse {
  result: string | null;
  error: string | null;
}

// Define interface for errors
interface ReplicateError {
  error: string;
}

export default function ReplicateInterface() {
  // State variables
  const [prompt, setPrompt] = useState<PromptInput>({ prompt: '' });
  const [response, setResponse] = useState<ReplicateResponse>({ result: null, error: null });
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send prompt input to API
      const res = await axios.post<ReplicateResponse>('/api/replicate', prompt);

      // Set the response result
      setResponse({ result: res.data.result, error: null });
    } catch (err) {
      // Handle error in case of failure
      const error = (err as ReplicateError).error || 'An error occurred';
      setResponse({ result: null, error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="replicate-interface">
      <h1>AI Problem Solver</h1>
      
      {/* Form to submit prompt */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt.prompt}
          onChange={(e) => setPrompt({ prompt: e.target.value })}
          placeholder="Enter your prompt here"
          required
          className="input-field"
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {/* Render response or error */}
      {loading && <p>Loading...</p>}
      {response.error && <p className="error">{response.error}</p>}
      {response.result && (
        <div className="result">
          <h2>Response:</h2>
          <pre>{JSON.stringify(response.result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
