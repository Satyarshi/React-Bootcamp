import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zhforjngpfxhqzoxkgbu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZm9yam5ncGZ4aHF6b3hrZ2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODQ4ODIsImV4cCI6MjAzMDA2MDg4Mn0.H5myMku530mkpvLi9eRIgYhMq1w1jKrJr1PnRHY4NJc"
);

export default supabase;
