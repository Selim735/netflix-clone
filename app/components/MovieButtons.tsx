"use client"

import { Button } from "@/components/ui/button"
import { Info, PlayCircle } from "lucide-react"
import { useState } from "react"
import PlayVideoModel from "./PlayVideoModel";

interface iAppProps{
    overview: string;
    youtubeUrl: string;
    id:number;
    age:number;
    title:string;
    releaseDate:number;
    duration:number;
}

export default function MovieButtons({age, duration,id ,overview, releaseDate, title, youtubeUrl}: iAppProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Play button */}
            <Button onClick={() => setOpen(true)} className="text-lg font-medium">
                <PlayCircle className="mr-2 h-6 w-6" />
                Play
            </Button>

            {/* Learn More button */}
            <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
                <Info className="mr-2 h-6 w-6" />
                Learn More
            </Button>

            <PlayVideoModel state={open} changeState={setOpen} age={age} duration={duration} key={id} overview={overview} release={releaseDate} title={title} youtubeUrl={youtubeUrl}/>
        </>
    )
}
