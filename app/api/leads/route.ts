import { supabase } from '@/lib/supabaseClient'

export async function POST(req:Request){
  const body = await req.json()
  const { data, error } = await supabase.from('leads').insert([body])
  if(error) return Response.json({error},{status:500})
  return Response.json(data)
}
