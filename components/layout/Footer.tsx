"use client"

import { useState, useEffect } from "react";


export default function Footer() {

    const [date, setDate] = useState("");

    useEffect(() => {
        
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // `getMonth()` は 0 (1月) から始まるため +1
        const day = String(today.getDate()).padStart(2, "0");


        setDate(`${year}年${month}月${day}日`);

    }, []);


    return (
        <footer>
            <p>&copy; {date} My Portfolio. All rights reserved.</p>
        </footer>
    );
}
