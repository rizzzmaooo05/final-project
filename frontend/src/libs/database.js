import { createClient } from "@supabase/supabase-js"

export const database = () => {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const db = createClient(supabaseUrl, supabaseKey)
  return db
}