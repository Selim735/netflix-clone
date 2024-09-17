"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";

export default function UserNav() {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12 w-12 rounded-full p-0 hover:bg-gray-800">
          {/* Avatar with hover effect */}
          <Avatar className="h-12 w-12 rounded-full">
            <AvatarImage
              src={session?.user?.image || "https://tywydphebrrcuhiabrhp.supabase.co/storage/v1/object/public/user%20image/Netflix-avatar.png?t=2024-09-14T11%3A10%3A07.711Z"}
              className="rounded-full"
            />
            <AvatarFallback className="rounded-full bg-gray-700 text-white">
              {session?.user?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-gray-900 text-white shadow-lg rounded-md mt-2 p-2"
        align="end"
      >
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1 p-2">
            <p className="text-sm font-bold leading-none">{session?.user?.name || "User"}</p>
            <p className="text-xs font-medium text-gray-400">{session?.user?.email || "No email available"}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 border-gray-700" />
        <DropdownMenuItem
          className="cursor-pointer text-sm hover:bg-gray-800 p-2 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
