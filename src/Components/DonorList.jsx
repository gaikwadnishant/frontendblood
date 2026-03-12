import React, { useEffect, useState } from "react";
import axios from "axios";
import { getErrorMessage } from "../api/http";

const baseURL = import.meta.env.VITE_API_URL || "https://bloodbackend-5gdj.onrender.com";

export const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    UserName: "",
    UserMail: "",
    UserDOB: "",
    UserBloodGroup: "",
  });

  const fetchDonors = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://bloodbackend-5gdj.onrender.com/user/all`);
      const list = res?.data?.List ?? [];
      setDonors(list);
    } catch (err) {
      setError(getErrorMessage(err, "Failed to load donors"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const startEdit = (donor) => {
    setEditingId(donor._id);
    setEditForm({
      UserName: donor.UserName,
      UserMail: donor.UserMail,
      UserDOB: donor.UserDOB?.slice(0, 10) ?? "",
      UserBloodGroup: donor.UserBloodGroup,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({
      UserName: "",
      UserMail: "",
      UserDOB: "",
      UserBloodGroup: "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveEdit = async (id) => {
    try {
      setError("");
      await axios.post(`https://bloodbackend-5gdj.onrender.com/user/update`, {
        Id: id,
        ...editForm,
      });
      await fetchDonors();
      cancelEdit();
    } catch (err) {
      setError(getErrorMessage(err, "Failed to update donor"));
    }
  };

  const deleteDonor = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donor?")) {
      return;
    }

    try {
      setError("");
      await axios.post(`https://bloodbackend-5gdj.onrender.com/user/delete`, { Id: id });
      setDonors((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      setError(getErrorMessage(err, "Failed to delete donor"));
    }
  };

  return (
    <div className="min-h-screen w-full bg-red-50 p-10">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
        Donor List
      </h1>

      {error ? (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg">
          {error}
        </div>
      ) : null}

      {loading ? (
        <p className="text-center text-gray-600">Loading donors...</p>
      ) : donors.length === 0 ? (
        <p className="text-center text-gray-600">No donors found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">DOB</th>
                <th className="py-3 px-4">Blood Group</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {donors.map((donor) => {
                const isEditing = editingId === donor._id;
                return (
                  <tr
                    key={donor._id}
                    className="text-center border-b hover:bg-red-100"
                  >
                    <td className="py-3 px-2">
                      {isEditing ? (
                        <input
                          type="text"
                          name="UserName"
                          value={editForm.UserName}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        donor.UserName
                      )}
                    </td>
                    <td className="py-3 px-2">
                      {isEditing ? (
                        <input
                          type="email"
                          name="UserMail"
                          value={editForm.UserMail}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        donor.UserMail
                      )}
                    </td>
                    <td className="py-3 px-2">
                      {isEditing ? (
                        <input
                          type="date"
                          name="UserDOB"
                          value={editForm.UserDOB}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        donor.UserDOB?.slice(0, 10)
                      )}
                    </td>
                    <td className="py-3 px-2">
                      {isEditing ? (
                        <select
                          name="UserBloodGroup"
                          value={editForm.UserBloodGroup}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-full"
                        >
                          <option value="">Select</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>O+</option>
                          <option>O-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </select>
                      ) : (
                        <span className="font-semibold text-red-600">
                          {donor.UserBloodGroup}
                        </span>
                      )}
                    </td>
                    <td className="py-3 space-x-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => saveEdit(donor._id)}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="bg-gray-400 text-white px-3 py-1 rounded"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(donor)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => deleteDonor(donor._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};