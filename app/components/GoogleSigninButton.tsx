"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSigninButton() {
    return(
        <Button onClick={() => signIn("google")} variant={"outline"} size="icon">
            <FcGoogle className="w-4 h-4 "/>
        </Button>
    );
}
