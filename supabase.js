import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://bxvnvjhaolgrmanvrnhc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4dm52amhhb2xncm1hbnZybmhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTQ1NzQsImV4cCI6MjA2Nzg3MDU3NH0.GnaOLIjasFvO0p7Smo6V_4eG2jAe31HdwUMf8Sg8rVg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);