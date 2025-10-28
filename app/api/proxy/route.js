export async function POST(req) {
  // Allow CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    const body = await req.json();

    const response = await fetch("https://script.google.com/macros/s/AKfycby4b0nVTb8p6t6Hs5oUTJYuGlEZaPIB1gx9rClGtcP0Cuu7t7qD1sOiqrG8K3EvzEKt/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const text = await response.text();
    return new Response(text, { status: 200, headers });
  } catch (error) {
    return new Response("Error: " + error.message, { status: 500, headers });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
