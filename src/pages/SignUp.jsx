import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous errors

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/member-area"); // Navigate to member area after successful signup
        } catch (error) {
            setError("Failed to create an account. Please try again.");
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purpleHeart text-white">
            <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSignUp} className="bg-gray-800 p-6 rounded shadow-md w-80 space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 bg-gray-700 text-white rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 bg-gray-700 text-white rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-goldDark text-black py-2 rounded hover:bg-gray-600 transition duration-200"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
