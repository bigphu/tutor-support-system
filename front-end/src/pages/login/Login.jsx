import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // We use the Context Hook here
import Button from '../../components/button/Button'; 

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from our Global Context

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 1. Call the login function from AuthContext
      await login(inputs);
      
      // 2. Redirect to Dashboard on success
      navigate('/home');
      
    } catch (err) {
      // Handle errors (e.g., "User not found" or "Wrong password")
      const msg = err.response?.data?.error || "Login failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Unified Grid Layout (Matches Register & MyLinks)
    <div className="col-span-full grid content-center justify-center min-h-[80vh]">
      
      {/* Card Container */}
      <div className="bg-white rounded-lg border border-[var(--color-border)] shadow-sm w-[400px] p-8 flex flex-col gap-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-primary text-2xl font-extrabold mb-2">Welcome Back</h1>
          <p className="text-secondary-accent text-sm">
            Please log in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full rounded-full border border-[var(--color-border)] px-4 py-2 outline-none focus:border-blue-500 transition"
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-full border border-[var(--color-border)] px-4 py-2 outline-none focus:border-blue-500 transition"
            onChange={handleChange}
            required
          />

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center font-medium bg-red-50 py-1 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-2">
             <Button type="primary" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
             </Button>
          </div>

        </form>

        {/* Register Link */}
        <div className="text-center text-sm text-secondary-accent">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-accent font-bold hover:underline">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;