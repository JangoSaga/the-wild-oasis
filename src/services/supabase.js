import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qdttappnybevrpwldmpa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdHRhcHBueWJldnJwd2xkbXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNTY4MzEsImV4cCI6MjA0OTczMjgzMX0.bfMbOAQCQfMy5nr5-Z2EiIVDoYCbxso71NXgEhfKhCk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
