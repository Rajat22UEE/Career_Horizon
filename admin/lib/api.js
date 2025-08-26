// admin/lib/api.js
export async function apiFetch(endpoint, options = {}) {
  // Ensure /api is included in the base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  // Get token from localStorage (client-side only)
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    let errorMsg = "API request failed";
    try {
      const error = await res.json();
      errorMsg = error.message || errorMsg;
    } catch {
      // response was not JSON
    }
    throw new Error(errorMsg);
  }

  return res.json();
}

// ===== Admin APIs =====
export function createAdmin(data) {
  return apiFetch("/admins", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listAdmins() {
  return apiFetch("/admins");
}

export function deleteAdmin(id) {
  return apiFetch(`/admins/${id}`, { method: "DELETE" });
}

// ===== HR APIs =====
export function addHR(data) {
  return apiFetch("/hrs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listHR() {
  return apiFetch("/hrs");
}

export function deleteHR(id) {
  return apiFetch(`/hrs/${id}`, { method: "DELETE" });
}

export function updateHR(id, data) {
  return apiFetch(`/hrs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

// ===== Internship APIs =====
export function addInternship(data) {
  return apiFetch("/internships", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listInternships() {
  return apiFetch("/internships");
}

export function deleteInternship(id) {
  return apiFetch(`/internships/${id}`, { method: "DELETE" });
}

export function updateInternship(id, data) {
  return apiFetch(`/internships/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

// ===== Job APIs =====
export function addJob(data) {
  return apiFetch("/jobs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listJobs() {
  return apiFetch("/jobs");
}

export function deleteJob(id) {
  return apiFetch(`/jobs/${id}`, { method: "DELETE" });
}

export function updateJob(id, data) {
  return apiFetch(`/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
