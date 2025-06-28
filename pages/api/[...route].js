export default async function handler(req, res) {
  const { route } = req.query;
  const backendUrl = `http://localhost:8000/api/${route.join('/')}`;

  try {
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Authorization': req.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
