import { Lead } from '../types/Lead';

export const generateDemoLeads = (): Lead[] => {
  const demoLeads: Lead[] = [
    {
      id: 'demo-1',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@techcorp.com',
      phone: '+1-555-0123',
      company: 'TechCorp Solutions',
      jobTitle: 'Marketing Director',
      leadSource: 'Website',
      budget: '$25,000 - $50,000',
      timeline: 'Short-term (1-3 months)',
      message: 'Looking for a comprehensive digital marketing solution to boost our online presence.',
      status: 'qualified',
      createdAt: new Date('2024-01-15T10:30:00'),
      updatedAt: new Date('2024-01-16T14:20:00')
    },
    {
      id: 'demo-2',
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'm.chen@innovatestart.io',
      phone: '+1-555-0456',
      company: 'InnovateStart',
      jobTitle: 'CEO',
      leadSource: 'Referral',
      budget: '$50,000 - $100,000',
      timeline: 'Medium-term (3-6 months)',
      message: 'Startup looking for complete branding and web development package.',
      status: 'new',
      createdAt: new Date('2024-01-14T09:15:00'),
      updatedAt: new Date('2024-01-14T09:15:00')
    },
    {
      id: 'demo-3',
      firstName: 'Emily',
      lastName: 'Rodriguez',
      email: 'emily.r@globalretail.com',
      phone: '+1-555-0789',
      company: 'Global Retail Inc',
      jobTitle: 'Operations Manager',
      leadSource: 'Social Media',
      budget: '$10,000 - $25,000',
      timeline: 'Immediate (within 1 month)',
      message: 'Need e-commerce platform optimization for better customer experience.',
      status: 'contacted',
      createdAt: new Date('2024-01-13T16:45:00'),
      updatedAt: new Date('2024-01-15T11:30:00')
    }
  ];

  return demoLeads;
};

export const initializeDemoData = () => {
  const existingData = localStorage.getItem('lead_management_data');
  
  // Only add demo data if no data exists
  if (!existingData || JSON.parse(existingData).length === 0) {
    const demoLeads = generateDemoLeads();
    localStorage.setItem('lead_management_data', JSON.stringify(demoLeads));
  }
};