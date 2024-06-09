import { createClient } from '@supabase/supabase-js';

const supabaseUrl =  "https://kkwmirokqampyltvjepo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrd21pcm9rcWFtcHlsdHZqZXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjAxMTQsImV4cCI6MjAzMTE5NjExNH0.5CDMuJ63NkYM7vlRNmC7lpQhVpGmT6JZe9jz5kROB58";

export const supabase = createClient(supabaseUrl, supabaseKey);
