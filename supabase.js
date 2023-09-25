import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lsuyqagbwpmaqwephlsa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzdXlxYWdid3BtYXF3ZXBobHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyMjA0NDcsImV4cCI6MjAwNzc5NjQ0N30.imx0VvW3QPT66Xo3p-lLcy5-5-5x-GA7DDpGQVv98mE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
