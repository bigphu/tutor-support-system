import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import Button from '../../components/button/Button'; 
import avatar from "../../assets/avatar.png"; // Use your avatar if needed for visuals

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // CRITICAL: Prevents page reload
    
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    console.log("Submitting registration..."); // Debug Log 1

    try {
      const response = await authService.register({
        username: formData.username,
        password: formData.password,
        role: role
      });
      
      console.log("Registration success:", response); // Debug Log 2
      
      // Force redirect
      navigate('/login');
      
    } catch (err) {
      console.error("Registration error:", err); // Debug Log 3
      // Handle different error structures
      const msg = err.response?.data || err.message || "Registration failed";
      setError(typeof msg === 'object' ? JSON.stringify(msg) : msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    // We use the exact classes from MyLinks to ensure it fits the grid
    <div className="col-span-full grid content-center justify-center min-h-[80vh]">
      
      <div className="bg-white rounded-lg border border-[var(--color-border)] shadow-sm w-[400px] p-8 flex flex-col gap-6">
        
        <div className="text-center">
          <h1 className="text-primary text-2xl font-extrabold mb-2">Create Account</h1>
        </div>

        {/* Role Selector */}
        <div className="flex w-full gap-4">
            <div 
                onClick={() => setRole('student')}
                className={`flex-1 cursor-pointer rounded-lg border px-4 py-2 text-center transition-all duration-200
                    ${role === 'student' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200'}`}
            >
                Student
            </div>
            <div 
                onClick={() => setRole('tutor')}
                className={`flex-1 cursor-pointer rounded-lg border px-4 py-2 text-center transition-all duration-200
                    ${role === 'tutor' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200'}`}
            >
                Tutor
            </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text" name="username" placeholder="Username"
            className="w-full rounded-full border border-[var(--color-border)] px-4 py-2 outline-none"
            onChange={handleChange} required
          />
          <input
            type="password" name="password" placeholder="Password"
            className="w-full rounded-full border border-[var(--color-border)] px-4 py-2 outline-none"
            onChange={handleChange} required
          />
          <input
            type="password" name="confirmPassword" placeholder="Confirm Password"
            className="w-full rounded-full border border-[var(--color-border)] px-4 py-2 outline-none"
            onChange={handleChange} required
          />

          {error && <div className="text-red-500 text-sm text-center font-medium bg-red-50 py-1 rounded">{error}</div>}

          <div className="flex justify-center mt-2">
             <Button type="primary" disabled={loading}>
                {loading ? 'Processing...' : 'Register'}
             </Button>
          </div>
        </form>

        <div className="text-center text-sm">
          Already have an account? <Link to="/login" className="font-bold hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;