export async function GET() {
  const data = {
    message: "successfully get data",
    error: false,
    status: 200,
  };
  return new Response(JSON.stringify(data));
}
