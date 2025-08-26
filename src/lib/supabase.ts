import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  grade?: string;
  message?: string;
  status: 'new' | 'contacted' | 'enrolled' | 'not_interested';
  priority: 'low' | 'medium' | 'high';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactInquiryInsert {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  grade?: string;
  message?: string;
}

export interface ContactInquiryUpdate {
  status?: 'new' | 'contacted' | 'enrolled' | 'not_interested';
  priority?: 'low' | 'medium' | 'high';
  notes?: string;
}