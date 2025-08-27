export async function apiFetch(endpoint, options = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || "API request failed");
    }

    return res.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}

//
// ===== HR APIs (Read-only) =====
//
export async function listHRs() {
  const data = await apiFetch("/hrs", {
    method: "GET",
  });
  return data.hrs || []; // backend returns { success, hrs }
}

//
// ===== Jobs APIs (Read-only) =====
//
export async function listJobs() {
  const data = await apiFetch("/jobs", {
    method: "GET",
  });
  return data.jobs || []; // backend returns { success, jobs }
}

//
// ===== Internships APIs (Read-only) =====
//
export async function listInternships() {
  const data = await apiFetch("/internships", {
    method: "GET",
  });
  return data.internships || []; // backend returns { success, internships }
}
