import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "http://localhost:3000";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        

        try {
            const res = await fetch(`${API_BASE}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.message || "Login gagal");
                setLoading(false);
                return;
            }

            localStorage.setItem("token", data.token);
            navigate("/app");
        } catch (err) {
            setError("Terjadi error koneksi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 360, margin: "80px auto", fontFamily: "Arial, sans-serif" }}>
            <h1>Login</h1>

            <form onSubmit={handlesubmit}>
                <label>Email</label>
                <input
                type='email'
                placeholder='email@contoh.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
                />

                <label>Password</label>
                <input
                type='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
                />

                {error && <p className='error'>{error}</p>}

                <button type='submit' disabled={loading} style={{ width: "100%" }}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>

            <p>
                Belum punya akun? <Link to="/register">Daftar di sini</Link>
            </p>
        </div>
    );
}