"use server"

import prisma from "./utils/db";

export async function addTowatchlist(formData: FormData) {
    "use server"
    const movieId = formData.get("movieId");

    const data = await prisma.watchList.create({
        data: {
            userId: 'abc',
            movieId: Number(movieId),
        },
    });
}