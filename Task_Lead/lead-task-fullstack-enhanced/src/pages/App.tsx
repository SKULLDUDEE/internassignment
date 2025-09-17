import React, { useState, useEffect } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import LeadStats from "../components/LeadStats";
import { Lead } from "../types/Lead";
import { storageUtils } from "../utils/storage";
import { initializeDemoData } from "../utils/demoData";

const App = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activeTab, setActiveTab] = useState<'form' | 'list'>('form');

  useEffect(() => {
    initializeDemoData();
    loadLeads();
  }, []);

  const loadLeads = () => {
    const storedLeads = storageUtils.getLeads();
    setLeads(storedLeads);
  };

  const handleLeadAdded = () => {
    loadLeads();
    setActiveTab('list');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lead Management System</h1>
                <p className="text-sm text-gray-600">Capture and manage your business leads efficiently</p>
              </div>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('form')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'form'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Add Lead
              </button>
              <button
                onClick={() => setActiveTab('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'list'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                View Leads ({leads.length})
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics - Always visible */}
        <LeadStats leads={leads} />

        {/* Tab Content */}
        {activeTab === 'form' ? (
          <LeadForm onLeadAdded={handleLeadAdded} />
        ) : (
          <LeadList leads={leads} onLeadsUpdate={loadLeads} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>© 2024 Lead Management System. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;