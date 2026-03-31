import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required."});
        }

        const existing = await User.findByEmail(email);
        if (existing) return res.status(409).json({ message: "Email already registered." });

        const passwordHash = await bcrypt.hash(password, 10);
        const userId = await User.createUser({ name, email, passwordHash });

        return res.status(201).json({ message: "User registered successfully.", userId });
    } catch (err) {
        return res.status(500).json({ message: "Registration Failed.", error: err.message });
    }
}

const login = async (req, res) => {
    try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({message: "Email and password required."});

    const user = await User.findByEmail(email);
    if (!user) return res.status(401).json({message: "Invalid credentials."});

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({message: "Invalid credentials."});

    const token = jwt.sign(
        { id: user.id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: "2h" }
    );
    
    return res.json({ message: "Login successful.", token });
}   catch (err) {
    return res.status(500).json({ message: "Login Failed.", error: err.message });
}
};

const me = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        return res.json({ user });
    } catch (err) {
        return res.status(500).json({ message: "Failed to get profile.", error: err.message });
    }
};

export { register, login, me };
