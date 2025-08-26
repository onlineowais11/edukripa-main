/*
  # Contact Inquiries Management System

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required) - Student/parent name
      - `email` (text, required) - Contact email
      - `phone` (text, optional) - Phone number
      - `subject` (text, optional) - Subject of interest
      - `grade` (text, optional) - Student grade/level
      - `message` (text, optional) - Additional message
      - `status` (text, default 'new') - Inquiry status
      - `priority` (text, default 'medium') - Priority level
      - `notes` (text, optional) - Admin notes
      - `created_at` (timestamp) - When inquiry was submitted
      - `updated_at` (timestamp) - Last update time

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for authenticated users to read all inquiries
    - Add policy for authenticated users to update inquiries
    - Add policy for anonymous users to insert new inquiries

  3. Indexes
    - Index on email for quick lookups
    - Index on status for filtering
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text DEFAULT '',
  grade text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'not_interested')),
  priority text DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert new inquiries (for contact form)
CREATE POLICY "Anyone can submit inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all inquiries (for admin)
CREATE POLICY "Authenticated users can read all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update inquiries (for admin)
CREATE POLICY "Authenticated users can update inquiries"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_priority ON contact_inquiries(priority);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_contact_inquiries_updated_at
  BEFORE UPDATE ON contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();