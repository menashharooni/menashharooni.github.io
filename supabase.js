const SUPABASE_URL = "https://zrtzbzzyanfvovstxrgc.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpydHpienp5YW5mdm92c3R4cmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NjE2NTYsImV4cCI6MjA4NzAzNzY1Nn0.iJ9CO6h-EqOCWTLRrsgJx77n7kg5CzpQMhdqWOljNnE";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
