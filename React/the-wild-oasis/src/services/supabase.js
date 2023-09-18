import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tchleiwscgbadzlunclo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaGxlaXdzY2diYWR6bHVuY2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4OTc5OTEsImV4cCI6MjAwODQ3Mzk5MX0.qXWQI3UfCS-TxRZkJCrydhzBccy8wzDEtIRsiemJ4TY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
