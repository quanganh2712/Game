import clientPromise from "@/lib/mongodb";

const validCategories = ["bug report", "suggestion", "content issue", "other"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, subject, description } = body;

    // validate
    if (!validCategories.includes(category)) {
      return Response.json({ error: "Invalid category" }, { status: 400 });
    }

    if (!subject || !description) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise();
    const db = client.db("game-wiki");

    const result = await db.collection("feedback").insertOne({
      category,
      subject,
      description,
      status: "unread",
      createdAt: new Date(),
    });

    // 🔔 DISCORD WEBHOOK (SAFE + CLEAN)
    const discordRes = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `📩 **NEW FEEDBACK**

🗂 **Category:** ${category}

📝 **Subject:** ${subject || "No subject"}

💬 **Description:**
${description.slice(0, 800)}`
      }),
    });

    // debug (rất nên giữ)
    console.log("Discord status:", discordRes.status);

    return Response.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Feedback API error:", err);
    return Response.json({ success: false });
  }
}
