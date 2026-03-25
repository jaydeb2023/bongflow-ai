import { calculateGST } from '@/lib/gst'

export async function POST(req:Request){
  const { amount } = await req.json()
  const gst = calculateGST(amount)
  return Response.json(gst)
}
