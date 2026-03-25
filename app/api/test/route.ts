import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise();
    const db = client.db("game-wiki");

    // test insert
    await db.collection("test").insertOne({
      msg: "MongoDB connected!",
      createdAt: new Date()
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
  return new Response("API OK");

}