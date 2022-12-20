import React from "react"
import { Track } from "./Track"
import useSWR from 'swr'
import fetcher from "../lib/fetcher"

type Song = {
    songUrl: string
    artist: string
    title: string
}

type TopTracks = {
    tracks: Song[]
}

export default function Tracks() {
    const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher)

    if (!data) {
        return null
    }

    return (
        <>
            {data.tracks.map((track, index) => (
                <Track ranking={index + 1} key={track.songUrl} {...track} />
            ))}
        </>
    )
}