import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efktoowuedoipllrdoyq.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3Rvb3d1ZWRvaXBsbHJkb3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0Mjk0NzIsImV4cCI6MjAwMTAwNTQ3Mn0.w9DFFtfi8TZojfMJ82bcwVTybbpiNtafypXGAsXLg3k'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)