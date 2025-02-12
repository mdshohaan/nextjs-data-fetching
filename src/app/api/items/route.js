export async function GET() {
  const data = {
    message: "successfully get data",
    error: false,
    status: 200,
  };
  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  const postedData = await request.json(); 
 return Response.json(postedData)
}
