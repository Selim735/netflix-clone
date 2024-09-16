import Image from 'next/image'; // Import the Image component
import prisma from "../utils/db";
import { MovieCard } from './MovieCard';

async function getData() {
    const data = await prisma.movie.findMany({
        select: {
            id: true,
            overview: true,
            title: true,
            WatchLists: true,
            imageString: true,
            youtubeString: true,
            age: true,
            release: true,
            duration: true,
        },
        orderBy: {
            createAt: "desc"
        },
        take: 4,
    });

    return data;
}

export default async function RecentlyAdded() {
    const data = await getData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
            {data.map((movie) => (
                <div key={movie.id} className="relative h-48">
                    <Image 
                        src={movie.imageString} 
                        alt={movie.title || "Movie"} 
                        width={500}
                        height={400}
                        className="rounded-sm absolute w-full h-full object-cover" 
                    />

                    <div className='h-60 relative z-10 transform duration-500 hover:scale-125 opacity-0 hover:opacity-100'>
                        <div className='bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border'>
                            <Image 
                                src={movie.imageString} 
                                alt={movie.title || "Movie"} 
                                width={800}
                                height={800}
                                className="absolute w-full h-full -z-10 rounded-lg object-cover" 
                            />
                            <MovieCard 
                                movieId={movie.id} 
                                overview={movie.overview} 
                                title={movie.title} 
                                watchListId={movie.WatchLists[0]?.id} 
                                youtubeUrl={movie.youtubeString} 
                                watchList={movie.WatchLists.length > 0}
                                key={movie.id}
                                age={movie.age}
                                time={movie.duration}
                                year={movie.release}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
