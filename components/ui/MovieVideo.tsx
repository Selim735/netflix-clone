import prisma from "@/app/utils/db"

async function GetData() {
    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age: true,
        },
    });

    return data
    
}

export default async function MovieVideo(){
    const data = await GetData();
    return(
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-center items-center">
            <video poster={data?.imageString}
                autoPlay
                muted
                loop
                src={data?.videoSource}
                className="w-full absolute top-0 left-0 h-[60vh] object-cover"
            >
            </video>
        </div>
    )
}