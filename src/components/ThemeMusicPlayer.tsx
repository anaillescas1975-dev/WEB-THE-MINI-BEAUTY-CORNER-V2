import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause, Play, Volume2 } from 'lucide-react';
import { THEME_MUSIC_URL } from '../data/cornerData';

export const ThemeMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const handleTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-40">
      <audio
        ref={audioRef}
        src={THEME_MUSIC_URL}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <button
        type="button"
        onClick={handleTogglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pausar sintonía de The Mini Beauty Corner' : 'Reproducir sintonía de The Mini Beauty Corner'}
        className={`group flex items-center gap-2.5 h-11 sm:h-12 px-3 sm:px-4 rounded-full border shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-95 ${
          isPlaying
            ? 'bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white border-pink-400 shadow-pink-500/25'
            : 'bg-white/95 backdrop-blur-md text-purple-950 border-pink-200 hover:border-pink-300 shadow-purple-900/10'
        }`}
      >
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isPlaying
              ? 'bg-white/20 text-white'
              : 'bg-gradient-to-tr from-pink-100 to-purple-100 text-pink-600'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </span>

        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap">
          {isPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5" />
              <span>Pausar sintonía</span>
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5 text-pink-500" />
              <span>Escuchar sintonía</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
};
