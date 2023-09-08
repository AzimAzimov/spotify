'use client'
import React, {FC, useEffect} from 'react';
import {useRouter} from "next/navigation";

import LikeButton from "@/components/button/LikeButton";
import MediaItem from "@/components/song/MediaItem";
import {useUser} from "@/hooks/useUser";
import {Song} from "@/types";

interface ILikedContentProps {
  songs: Song[]
}

const LikedContent:FC<ILikedContentProps> = ({songs}) => {
  const router = useRouter()
  const { isLoading, user } = useUser()

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/')
    }
  }, [router, isLoading, user])

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-y-2 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={()=> {}} />
          </div>
          <LikeButton songId={song.id}/>
        </div>
      ))}
    </div>
  );
};

export default LikedContent;