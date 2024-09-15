import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation"; // Correct import for redirection in Next.js
import Navbar from "../components/Navbar";

export default async function HomeLayout({ children }: { children: ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect('/login'); // Redirect to the login page if no session
    }

    return (
        <>
            <Navbar/>
            <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
                {children}
            </main>
        </>
    );
}
