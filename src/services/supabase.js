import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://javujelesrozjplngwhp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphdnVqZWxlc3JvempwbG5nd2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyOTM3MzIsImV4cCI6MjAwODg2OTczMn0.UQ31mnUJiifrzOFfSriL19hEK6K3tiTYXOPFMx-lZr0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
