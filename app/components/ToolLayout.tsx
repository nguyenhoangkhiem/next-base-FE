import { ReactNode } from "react";
import {NavBar} from "@components/NavBar";

export default function ToolLayout({ title, icon, children }: { title: string; icon?: string; children: ReactNode }) {
    return (
        <div>
            <NavBar />
            <main className="flex justify-center px-4 mt-20">

                <div className="w-full max-w-lg">
                    <div className="bg-white rounded-2xl shadow-md p-6 border">
                        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>{icon}</span> {title}
                        </h1>
                        {children}
                    </div>
                </div>
            </main>
        </div>

    );
}
