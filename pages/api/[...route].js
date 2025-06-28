// /pages/api/proxy/[...path].js
export default async function handler(req, res) {
  const { path } = req.query;
  const backendUrl = process.env.BACKEND_URL || "https://primetower.onrender.com";
  const targetUrl = `${backendUrl}/${path.join("/")}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        ...(req.headers.authorization && { Authorization: req.headers.authorization }),
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).json({ error: "Proxy failed", detail: err.message });
  }
}
