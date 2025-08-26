"use client";

import { useEffect, useState } from "react";
import { listJobs, deleteJob, updateJob } from "../../lib/api";
import JobForm from "../../components/JobForm";
import Header from "../../components/Header";
import DashboardSidebar from "../../components/DashboardSidebar";

export default function JobsPage() {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [err, setErr] = useState("");

  // Load jobs
  const load = async () => {
    try {
      const data = await listJobs();
      // Normalize → expect array
      if (Array.isArray(data)) {
        setItems(data);
      } else if (data?.jobs && Array.isArray(data.jobs)) {
        setItems(data.jobs);
      } else {
        setItems([]);
      }
    } catch (e) {
      console.error("Error loading jobs:", e);
      setItems([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this job?")) return;
    try {
      await deleteJob(id);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  // Start edit
  const handleEdit = (item) => {
    setEditId(item._id);
    setEditForm({ ...item });
    setErr("");
  };

  // Edit form change
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    if (name === "requiredSkills") {
      setEditForm((f) => ({
        ...f,
        requiredSkills: value.split(",").map((s) => s.trim()).filter(Boolean),
      }));
    } else {
      setEditForm((f) => ({ ...f, [name]: value }));
    }
  };

  // Save edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await updateJob(editId, editForm);
      setEditId(null);
      setEditForm(null);
      await load();
    } catch (e2) {
      console.error("Update failed:", e2);
      setErr(e2.message || "Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <DashboardSidebar />
        </div>
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <h2 className="text-2xl font-bold text-black">Jobs</h2>

          {/* Job Create Form */}
          <JobForm onCreated={load} />

          {/* Jobs List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.length > 0 ? (
              items.map((j) => (
                <div
                  key={j._id}
                  className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-2"
                >
                  <p className="font-bold text-black">{j.jobTitle}</p>
                  <p className="text-black">
                    {j.companyName} • {j.jobType}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {j.location} • {j.salary || j.stipend}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {(j.requiredSkills || []).join(", ")}
                  </p>
                  {j.applyLink && (
                    <p className="text-gray-500 text-sm mt-2">
                      Apply:{" "}
                      <a
                        href={j.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-black"
                      >
                        {j.applyLink}
                      </a>
                    </p>
                  )}
                  <div className="flex gap-2 mt-3">
                    <button
                      className="px-3 py-1 rounded bg-black text-white"
                      onClick={() => handleEdit(j)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-gray-200 text-black"
                      onClick={() => handleDelete(j._id)}
                    >
                      Delete
                    </button>
                  </div>

                  {/* Edit Form */}
                  {editId === j._id && (
                    <form
                      onSubmit={handleEditSubmit}
                      className="mt-4 p-3 border rounded bg-gray-50"
                    >
                      {err && <p className="text-red-600 mb-2">{err}</p>}
                      <input
                        name="jobTitle"
                        value={editForm.jobTitle || ""}
                        onChange={handleEditChange}
                        placeholder="Title"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="companyName"
                        value={editForm.companyName || ""}
                        onChange={handleEditChange}
                        placeholder="Company"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="location"
                        value={editForm.location || ""}
                        onChange={handleEditChange}
                        placeholder="Location"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="salary"
                        value={editForm.salary || ""}
                        onChange={handleEditChange}
                        placeholder="Salary"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="jobType"
                        value={editForm.jobType || ""}
                        onChange={handleEditChange}
                        placeholder="Type"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="requiredSkills"
                        value={(editForm.requiredSkills || []).join(", ")}
                        onChange={handleEditChange}
                        placeholder="Skills (comma separated)"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <textarea
                        name="description"
                        value={editForm.description || ""}
                        onChange={handleEditChange}
                        placeholder="Description"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="applyLink"
                        value={editForm.applyLink || ""}
                        onChange={handleEditChange}
                        placeholder="Apply Link (URL)"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          type="submit"
                          className="px-3 py-1 rounded bg-black text-white"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1 rounded bg-gray-200 text-black"
                          onClick={() => {
                            setEditId(null);
                            setEditForm(null);
                            setErr("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No jobs yet.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
