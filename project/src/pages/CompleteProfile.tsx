import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useAuthStore } from '../store/authStore';
import { Upload, Loader2 } from 'lucide-react';

const ROLES = [
  'Producer',
  'Vocalist',
  'Rapper',
  'Guitarist',
  'Bassist',
  'Drummer',
  'DJ',
  'Sound Engineer',
  'Songwriter',
  'Composer'
];

export function CompleteProfile() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    artistName: '',
    role: '',
    spotify: '',
    instagram: '',
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setUser(user ? { ...user, profilePhoto: reader.result as string } : null);
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser(user ? {
      ...user,
      ...formData,
    } : null);
    
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-8 backdrop-blur-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Complete Your Artist Profile</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Photo Upload */}
        <div className="text-center">
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-purple-500/50 rounded-xl p-8 cursor-pointer hover:border-purple-500 transition-colors"
          >
            <input {...getInputProps()} />
            {user?.profilePhoto ? (
              <img
                src={user.profilePhoto}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
            ) : (
              <div className="text-center">
                <Upload className="w-12 h-12 mx-auto text-purple-500 mb-2" />
                <p className="text-sm text-gray-400">
                  {isDragActive
                    ? 'Drop your photo here'
                    : 'Drag & drop your profile photo or click to select'}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Surname</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Artist Name</label>
          <input
            type="text"
            value={formData.artistName}
            onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Primary Role</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
          >
            <option value="" className="bg-gray-900">Select your role</option>
            {ROLES.map((role) => (
              <option key={role} value={role} className="bg-gray-900">
                {role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Spotify Profile URL (optional)</label>
          <input
            type="url"
            value={formData.spotify}
            onChange={(e) => setFormData({ ...formData, spotify: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Instagram Profile URL (optional)</label>
          <input
            type="url"
            value={formData.instagram}
            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Setting up your profile...
            </>
          ) : (
            'Complete Profile'
          )}
        </button>
      </form>
    </div>
  );
}