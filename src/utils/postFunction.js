const POST_SUPABASE = async (type, body) => {
    const URL_SUPABASE = `https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/${
    type}`;
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA";
  try {
    const options = {
      method: "POST",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return fetch(URL_SUPABASE, options);
  } catch (e) {
    return e;
  }
};

export default POST_SUPABASE
