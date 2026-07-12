import { useState } from 'react';
import axios from 'axios';

function SimpleRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await axios.post('/api/simple-users/register', { name, email });
      setMessage(res.data.message);
      setName('');
      setEmail('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Simple User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} 
        />
        <input 
          placeholder="Email" 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} 
        />
        <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          {loading ? 'Submitting...' : 'Register'}
        </button>
      </form>
      {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default SimpleRegister;
