import React, { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AddMember = () => {
    const [name, setName] = useState("");
    const [postNumber, setPostNumber] = useState("");
    const [state, setState] = useState("");

    const handleAddMember = async () => {
        const memberRef = doc(db, "members", name);
        await setDoc(memberRef, { name, postNumber, state, role: "member" });
        setName(""); setPostNumber(""); setState("");
    };

    return (
        <div className="p-4">
            <h2>Add Member</h2>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Post #" value={postNumber} onChange={(e) => setPostNumber(e.target.value)} />
            <input placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            <button onClick={handleAddMember}>Add Member</button>
        </div>
    );
};

export default AddMember;