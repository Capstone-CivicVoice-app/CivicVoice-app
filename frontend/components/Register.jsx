import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "http://localhost:3000";

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch(`${API_BASE}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.message || "Register gagal");
                return;
            }

            navigate("/login");
        } catch (err) {
            setError("Terjadi kesalahan saat mendaftar");
        }
    };

    return (
        <div style={{ maxWidth: 360, margin: "80px auto", fontFamily: "Arial, sans-serif" }}>
            <h1>Register</h1>

            <form onSubmit={handlesubmit}>
                <label>Nama</label>
                <input 
                type="text"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: "100%", marginBottom: 12 }} 
                />

                <label>Email</label>
                <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
                style={{ width: "100%", marginBottom: 12 }}
                />

                <label>Password</label>
                <input 
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", marginBottom: 12 }}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit" style={{ width: "100%" }}>
                    Register
                </button>
            </form>

            <p style={{ marginTop: 12 }}>
                Sudah punya akun? <Link to="/login">Login di sini</Link>
            </p>
        </div>
    );
}