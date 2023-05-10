export var baseUrl = "";

if (process.env.Base_Url) {
  baseUrl = "http://localhost:3000";
}

if (process.env.VERCEL_URL) {
  baseUrl = `https://${process.env.VERCEL_URL}`;
}
