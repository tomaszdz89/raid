import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://leczxvkddngeuxdzsfjq.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlY3p4dmtkZG5nZXV4ZHpzZmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzc0OTEsImV4cCI6MjAxNDg1MzQ5MX0.1-eXqUXbElaFXXRAmp2ikr_DW8rK7r5-Cx6KpBAJFVE'

export const supabase = createClient(supabaseUrl, supabaseKey)
