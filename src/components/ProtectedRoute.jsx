import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ children, role }) => {
    const [user] = useAuthState(auth);
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        const checkRole = async () => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);
                const userData = docSnap.data();
                setHasAccess(userData?.role === role || userData?.role === "admin");
            }
        };
        checkRole();
    }, [user]);

    if (!user) return <Navigate to="/" />;
    if (!hasAccess) return <Navigate to="/member-area" />;
    return children;
};

export default ProtectedRoute;