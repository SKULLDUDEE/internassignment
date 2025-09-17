import * as yup from 'yup';

export const leadValidationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters and spaces'),
  
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters and spaces'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must not exceed 100 characters'),
  
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^[\+]?[1-9][\d]{0,15}$/,
      'Please enter a valid phone number'
    ),
  
  company: yup
    .string()
    .required('Company name is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters'),
  
  jobTitle: yup
    .string()
    .required('Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title must not exceed 100 characters'),
  
  leadSource: yup
    .string()
    .required('Please select a lead source'),
  
  budget: yup
    .string()
    .required('Please select a budget range'),
  
  timeline: yup
    .string()
    .required('Please select a timeline'),
  
  message: yup
    .string()
    .max(500, 'Message must not exceed 500 characters')
});