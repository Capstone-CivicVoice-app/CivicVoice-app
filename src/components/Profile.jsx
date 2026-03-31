import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const API_BASE = "http://localhost:3000";

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        const fetchProfile = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await res.json();
                if (!res.ok) {
                    setError(data.message || "Gagal mengambil data user");
                    setLoading(false);
                    return;
                }

                setUser(data.user);
            } catch (err) {
                setError("Terjadi error koneksi");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
        
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <p><strong>Nama:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}