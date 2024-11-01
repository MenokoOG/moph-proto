// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserRole = async () => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);
                const data = docSnap.data();
                setUserRole(data?.role || "member");
            } else {
                setUserRole(null);
            }
        };
        fetchUserRole();
    }, [user]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUserRole(null);
            navigate("/");
        });
    };

    return (
        <nav className="bg-purpleHeart text-white p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-6">
                <Link to="/" className="text-xl font-semibold text-gray-200 hover:text-gray-300">
                    Purple Heart
                </Link>
                <Link to="/about" className="text-gray-200 hover:text-goldDark">About</Link>
                <Link to="/programs" className="text-gray-200 hover:text-goldDark">Programs</Link>
                <Link to="/store" className="text-gray-200 hover:text-goldDark">Store</Link>
                <Link to="/partners" className="text-gray-200 hover:text-goldDark">Partners</Link>
                <Link to="/donate" className="text-gray-200 hover:text-goldDark">Donate</Link>
                <Link to="/contact" className="text-gray-200 hover:text-goldDark">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
                {user ? (
                    <>
                        <Link to="/member-area" className="hover:text-goldDark">Member Area</Link>
                        {userRole === "admin" && (
                            <>
                                <Link to="/admin-area" className="hover:text-goldDark">Admin Area</Link>
                                <Link to="/add-member" className="hover:text-goldDark">Add Member</Link>
                            </>
                        )}
                        <button
                            onClick={handleLogout}
                            className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded transition duration-200"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded transition duration-200"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="border border-gray-300 hover:border-goldDark text-gray-200 hover:text-goldDark py-1 px-3 rounded transition duration-200"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
