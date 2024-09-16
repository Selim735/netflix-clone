import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    age: number;
    duration: number;
}

export default function PlayVideoModel({ changeState, overview, state, title, youtubeUrl,age,duration,release, }: iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            {/* Modal content */}
            <DialogContent className="sm:max-w-[425px]">
                {/* Modal header */}
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{overview}</DialogDescription>
                    <div className="flex gap-x-2 items-center">
                    <p className="font-normal text-sm">{release}</p>
                    <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</p>
                    <p className="font-normal text-sm">{duration}h</p>
                    </div>
                </DialogHeader>
                <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
            </DialogContent>
        </Dialog>
    );
}
