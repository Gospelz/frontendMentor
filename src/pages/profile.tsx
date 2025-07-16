import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [goals, setGoals] = useState("");
  const [loading, setLoading] = useState(true);

  const skillOptions = [
    "Marketing",
    "UI/UX",
    "Product Design",
    "Frontend",
    "Backend",
    "DevOps",
  ];

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = res.data;
      setName(data.name || "");
      setBio(data.bio || "");
      setSkills(data.skills || []);
      setGoals(data.goals || "");
    } catch (err) {
      console.error("Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(
        "/users/me/profile",
        { name, bio, skills, goals },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(" Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert(" Failed to update profile.");
    }
  };

  const toggleSkill = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Short Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Skills</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillOptions.map((skill) => (
              <button
                type="button"
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full border transition ${
                  skills.includes(skill)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-medium">Goals</label>
          <input
            type="text"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g., Improve product design skills"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
