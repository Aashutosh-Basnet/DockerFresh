"use client";

import { useState, useEffect } from "react";
import { GiCirclingFish } from "react-icons/gi";


export default function Providers({ children }: {children: React.ReactNode }) {
    const [loading, setLoading ] = useState(true);  

    useEffect(() => {
        const timer  = setTimeout(() => setLoading(false), 400);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-screen bg-blue-900 flex justify-center items-center text-white">
                <div>
                    <GiCirclingFish size={40}/>
                </div>
            </div>
        )
    }

    return <>{children}</>
}