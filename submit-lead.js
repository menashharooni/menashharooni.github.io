import { createClient } from "@supabase/supabase-js";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, phone, business, plan, email, message } =
      JSON.parse(event.body || "{}");

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Insert into your existing table: public.profiles
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ name, phone, business, plan, email, message }])
      .select()
      .single();

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, data }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: e.message || String(e) }),
    };
  }
}
