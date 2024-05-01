import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"

dotenv.config()

export const database = () => {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const db = createClient(supabaseUrl, supabaseKey)
  return db
}