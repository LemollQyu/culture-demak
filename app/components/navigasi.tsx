"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigasi() {
    // State untuk jam dan tanggal
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Set interval untuk update waktu setiap detik
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Bersihkan interval saat komponen di-unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format waktu dengan leading zero jika perlu (contoh: 01, 02, 03)
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const date = currentTime.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });

    return (
        <>
            <div className="bg-transparent w-full h-[28px] top-5 px-10 flex justify-end items-center fixed">
                <div className="font-mackinac text-putih font-semibold h-full gap-16 flex items-center">
                    <div className="flex tracking-wide gap-8 items-center">
                        <div>
                            <span className="tracking-wide text-sm">{date}</span>
                        </div>
                        <div className="text-base  w-[100px] flex items-center justify-center">
                            {hours}:{minutes}:{seconds}
                        </div>
                        <div className="text-xs flex gap-2 items-center">
                            <p>MOON PHASE</p>
                            <Image src={"/image/moon3.svg"} width={32} height={32} alt="sound-off" />
                        </div>
                    </div>
                    <div className="w-8 h-8">
                        <Image src={"/image/sound-off.svg"} width={500} height={500} alt="sound-off" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
}
