"use client";
import {useState} from "react";
import {luckyNumber} from "@lib/luckyNumber";
import {getLunarDate} from "@lib/dateUtils";
import ToolLayout from "@components/ToolLayout";
import {motion} from "framer-motion";

export default function SoMayMan() {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [result, setResult] = useState("");
    const lunar = getLunarDate(new Date());

    const generate = () => {
        setResult(luckyNumber(name, birth));
    };

    return (
        <ToolLayout title={"🧧 Sinh số may mắn hôm nay"}>
            <input
                type="text"
                placeholder="Họ tên..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-3"
            />
            <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-3"
            />
            <button
                onClick={generate}
                className="bg-red-600 text-white px-4 py-2 rounded w-full"
            >
                Xem số may mắn
            </button>

            {result && (
                <div className="mt-4 text-center">
                    <p className="text-lg mb-2">Số may mắn của bạn là:</p>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.3}}
                    >
                        <div className="text-4xl font-bold text-red-600">{result}</div>
                    </motion.div>
                    <p className="text-sm text-gray-500 mt-2">
                        Ngày âm hôm nay: {lunar.lunarDay}, năm {lunar.lunarYear}
                    </p>
                </div>
            )}

        </ToolLayout>

    );
}
