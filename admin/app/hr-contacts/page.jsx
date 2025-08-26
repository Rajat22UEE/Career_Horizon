"use client";

import { useEffect, useState } from "react";
import { listHR, deleteHR, updateHR } from "../../lib/api";
import HRContactForm from "../../components/HRContactForm";
import Header from "../../components/Header";
import DashboardSidebar from "../../components/DashboardSidebar";

export default function HRContactsPage() {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [err, setErr] = useState("");

  const load = async () => {
    try {
      const data = await listHR();
      // ✅ FIX: pick `data.hrs` instead of assuming array
      if (Array.isArray(data)) {
        setItems(data);
      } else if (data?.hrs && Array.isArray(data.hrs)) {
        setItems(data.hrs);
      } else if (data?.data && Array.isArray(data.data)) {
        setItems(data.data);
      } else {
        setItems([]);
      }
    } catch (e) {
      console.error("Failed to load HR contacts:", e);
      setItems([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this HR contact?")) return;
    try {
      await deleteHR(id);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditForm({ ...item });
    setErr("");
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((f) => ({ ...f, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await updateHR(editId, editForm);
      setEditId(null);
      setEditForm({});
      await load();
    } catch (e2) {
      setErr(e2.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block">
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <h2 className="text-2xl font-bold text-black">HR Contacts</h2>

          {/* Form */}
          <HRContactForm onCreated={load} />

          {/* HR List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.length > 0 ? (
              items.map((h) => (
                <div
                  key={h._id}
                  className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-2"
                >
                  <p className="font-bold text-black">{h.hrName}</p>
                  <p className="text-black">{h.companyName}</p>
                  <p className="text-gray-500 text-sm mt-2">📞 {h.contact}</p>
                  <p className="text-gray-500 text-sm">✉️ {h.email}</p>

                  <div className="flex gap-2 mt-3">
                    <button
                      className="px-3 py-1 rounded bg-black text-white"
                      onClick={() => handleEdit(h)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-gray-200 text-black"
                      onClick={() => handleDelete(h._id)}
                    >
                      Delete
                    </button>
                  </div>

                  {/* Inline Edit Form */}
                  {editId === h._id && (
                    <form
                      onSubmit={handleEditSubmit}
                      className="mt-4 p-3 border rounded bg-gray-50"
                    >
                      {err && <p className="text-red-600 mb-2">{err}</p>}
                      <input
                        name="hrName"
                        value={editForm.hrName || ""}
                        onChange={handleEditChange}
                        placeholder="HR Name"
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
                        name="contact"
                        value={editForm.contact || ""}
                        onChange={handleEditChange}
                        placeholder="Contact"
                        className="mb-2 w-full border px-2 py-1 rounded"
                      />
                      <input
                        name="email"
                        value={editForm.email || ""}
                        onChange={handleEditChange}
                        placeholder="Email"
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
                            setEditForm({});
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
              <p className="text-gray-500">No HR contacts yet.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
