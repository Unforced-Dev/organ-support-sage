// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tkeaumclruhogwsjzzsj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZWF1bWNscnVob2d3c2p6enNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjMwOTIsImV4cCI6MjA1ODQzOTA5Mn0.kMhdAgptOnv0mLnTj9_2LIj32bbz4JKU_T6I5lYUasg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);