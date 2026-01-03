import React, { useState } from 'react';
import { Lock, Unlock, X, Save, ShieldCheck } from 'lucide-react';
import { ResumeData } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
  data: ResumeData;
  onUpdateData: (newData: ResumeData) => void;
}

const AdminModal: React.FC<AdminModalProps> = ({ 
  isOpen, 
  onClose, 
  isAuthenticated, 
  onLogin, 
  onLogout,
  data,
  onUpdateData
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'experience'>('profile');
  const [formData, setFormData] = useState<ResumeData>(data);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would hit an API. 
    // For this simulation, we use a simple check.
    if (password === 'admin123') {
      onLogin();
      setError('');
      setPassword('');
    } else {
      setError('Invalid credentials. Access denied.');
    }
  };

  const handleSave = () => {
    onUpdateData(formData);
    alert('Changes saved successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-clay-background w-full max-w-4xl rounded-3xl shadow-clay-card p-6 md:p-8 max-h-[90vh] overflow-y-auto relative border-4 border-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full shadow-clay-btn active:shadow-clay-btn-active text-clay-text hover:text-clay-accent transition-colors"
        >
          <X size={24} />
        </button>

        {!isAuthenticated ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-clay-card p-8 rounded-full mb-6 shadow-clay-inset">
              <Lock size={48} className="text-clay-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-clay-text mb-2">Admin Access</h2>
            <p className="text-gray-500 mb-8 text-center max-w-md">
              Restricted area. Please verify your identity to manage portfolio content.
            </p>
            
            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 rounded-xl bg-clay-background shadow-clay-inset outline-none focus:ring-2 focus:ring-clay-primary border-none text-clay-text"
                />
              </div>
              {error && <p className="text-red-500 text-sm font-semibold text-center">{error}</p>}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-clay-primary text-white font-bold shadow-clay-btn active:shadow-clay-btn-active hover:bg-violet-500 transition-all flex items-center justify-center gap-2"
              >
                <Unlock size={20} />
                Authenticate
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-500" size={32} />
                <div>
                  <h2 className="text-2xl font-bold text-clay-text">CMS Dashboard</h2>
                  <p className="text-sm text-green-600 font-semibold">Secure Session Active</p>
                </div>
              </div>
              <button 
                onClick={onLogout}
                className="px-4 py-2 rounded-lg text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
              >
                Terminate Session
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar */}
              <div className="w-full md:w-64 space-y-2">
                {['profile', 'projects', 'experience'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`w-full text-left p-4 rounded-xl font-bold transition-all ${
                      activeTab === tab 
                        ? 'bg-clay-primary text-white shadow-clay-btn-active' 
                        : 'text-clay-text hover:bg-white hover:shadow-clay-btn'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="flex-1 bg-white/50 rounded-2xl p-6 shadow-clay-inset min-h-[400px]">
                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-500 mb-1">Full Name</label>
                      <input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 rounded-lg bg-clay-background shadow-clay-inset outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-500 mb-1">Role Title</label>
                      <input 
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full p-3 rounded-lg bg-clay-background shadow-clay-inset outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-500 mb-1">Professional Summary</label>
                      <textarea 
                        value={formData.summary}
                        onChange={(e) => setFormData({...formData, summary: e.target.value})}
                        className="w-full p-3 rounded-lg bg-clay-background shadow-clay-inset outline-none h-32 resize-none"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-6">
                    {formData.projects.map((proj, idx) => (
                      <div key={proj.id} className="p-4 bg-clay-background rounded-xl shadow-clay-card">
                        <input 
                          value={proj.title}
                          onChange={(e) => {
                            const newProjects = [...formData.projects];
                            newProjects[idx] = { ...proj, title: e.target.value };
                            setFormData({...formData, projects: newProjects});
                          }}
                          className="w-full p-2 mb-2 font-bold bg-transparent border-b border-gray-300 outline-none"
                        />
                         <textarea 
                          value={proj.description}
                          onChange={(e) => {
                            const newProjects = [...formData.projects];
                            newProjects[idx] = { ...proj, description: e.target.value };
                            setFormData({...formData, projects: newProjects});
                          }}
                          className="w-full p-2 text-sm bg-transparent outline-none h-20 resize-none"
                        />
                      </div>
                    ))}
                    <button className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 text-gray-400 font-bold hover:border-clay-primary hover:text-clay-primary transition-colors">
                      + Add New Project
                    </button>
                  </div>
                )}

                {/* Simplified for demo purposes */}
                {activeTab === 'experience' && (
                  <div className="text-center py-10 text-gray-500">
                    <p>Experience editor is locked in demo mode.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleSave}
                className="py-3 px-8 rounded-xl bg-green-500 text-white font-bold shadow-clay-btn active:shadow-clay-btn-active hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
