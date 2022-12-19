

import fetcher from '@/src/lib/fetcher'
import { TopTracks } from '@/types/TopTracks'
import React from 'react'
import useSWR from 'swr'
import { Track } from '@/components/spotify/ui/Track'

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