// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Errore configurazione Supabase: Manca URL o Key");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Funzione helper per login semplice
export async function loginWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  } catch (e: any) {
    toast.error(`Errore login: ${e.message}`);
  }
}

export async function signUpWithGoogle() {
    // Implementazione hook login con provider Google
}
