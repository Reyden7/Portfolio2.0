export const dynamic = "force-dynamic";

export async function POST(request) {
  const { password } = await request.json();
  const isValid =
    Boolean(process.env.ADMIN_PASSWORD) && password === process.env.ADMIN_PASSWORD;

  if (!isValid) {
    return Response.json({ message: "AccÃ¨s refusÃ©" }, { status: 401 });
  }

  return Response.json({ success: true });
}
