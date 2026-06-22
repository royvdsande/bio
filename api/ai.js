// Vercel serverless function: /api/ai
// Gebruikt OPENAI_API_KEY uit de environment variables (server-side, veilig).
// Zonder env var -> { needKey: true }, zodat de frontend terugvalt op een
// lokaal opgeslagen API-key in de browser.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Gebruik POST." });
    return;
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    // Geen server-side sleutel ingesteld -> frontend gebruikt de lokale key.
    res.status(200).json({ needKey: true });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const messages = body.messages;
    const model = body.model || "gpt-4o-mini";
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(200).json({ error: "Geen berichten meegegeven." });
      return;
    }

    const payload = {
      model,
      messages,
      temperature: typeof body.temperature === "number" ? body.temperature : 0.4,
    };
    if (body.json) payload.response_format = { type: "json_object" };
    if (typeof body.max_tokens === "number") payload.max_tokens = body.max_tokens;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + key,
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json();
    if (!r.ok) {
      res.status(200).json({ error: (data.error && data.error.message) || ("OpenAI fout " + r.status) });
      return;
    }
    res.status(200).json({ content: data.choices[0].message.content });
  } catch (e) {
    res.status(200).json({ error: e.message || "Onbekende serverfout." });
  }
}
