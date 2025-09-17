import { Lead } from '../types/Lead';

const STORAGE_KEY = 'lead_management_data';

export const storageUtils = {
  getLeads: (): Lead[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  saveLeads: (leads: Lead[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Lead => {
    const leads = storageUtils.getLeads();
    const newLead: Lead = {
      ...lead,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    leads.unshift(newLead);
    storageUtils.saveLeads(leads);
    return newLead;
  },

  updateLead: (id: string, updates: Partial<Lead>): Lead | null => {
    const leads = storageUtils.getLeads();
    const index = leads.findIndex(lead => lead.id === id);
    
    if (index === -1) return null;
    
    leads[index] = {
      ...leads[index],
      ...updates,
      updatedAt: new Date()
    };
    
    storageUtils.saveLeads(leads);
    return leads[index];
  },

  deleteLead: (id: string): boolean => {
    const leads = storageUtils.getLeads();
    const filteredLeads = leads.filter(lead => lead.id !== id);
    
    if (filteredLeads.length === leads.length) return false;
    
    storageUtils.saveLeads(filteredLeads);
    return true;
  }
};