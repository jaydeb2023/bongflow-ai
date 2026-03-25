export function calculateGST(amount:number){
  const gst = amount * 0.18
  return { base: amount, gst, total: amount + gst }
}
