// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://owybazivcemtwbqpqcqy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93eWJheml2Y2VtdHdicXBxY3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NTQ1NzcsImV4cCI6MjA1MDMzMDU3N30.DnC_I9hSFC3MKLHk9I-3dN2jQlTHWO3S7G6w1hLoWTc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);