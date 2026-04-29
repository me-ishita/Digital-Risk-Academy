import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { motion } from "motion/react";

interface MediaPlayerProps {
  audioSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
}

export default function MediaPlayer({
  audioSrc,
  videoSrc,
  posterSrc,
  title = "Programme Overview",
}: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const getActiveMedia = () => {
    if (audioSrc && audioRef.current) return audioRef.current;
    return videoRef.current;
  };

  const syncVideoTime = (time: number) => {
    if (!videoRef.current) return;

    const drift = Math.abs(videoRef.current.currentTime - time);
    if (drift > 0.25) {
      videoRef.current.currentTime = time;
    }
  };

  const handlePlayPause = async () => {
    const media = getActiveMedia();
    if (!media) return;

    if (isPlaying) {
      media.pause();
      if (audioSrc && videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    try {
      await media.play();
      if (audioSrc && videoRef.current && audioRef.current) {
        videoRef.current.currentTime = audioRef.current.currentTime;
        await videoRef.current.play();
      }
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    const media = getActiveMedia();
    if (!media) return;

    media.muted = !isMuted;
    if (audioSrc && videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleFullscreenToggle = async () => {
    if (!playerRef.current) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
      return;
    }

    await playerRef.current.requestFullscreen();
    setIsFullscreen(true);
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const handleTimeUpdate = () => {
    const media = getActiveMedia();
    if (!media) return;

    setCurrentTime(media.currentTime);
    if (audioSrc) {
      syncVideoTime(media.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const media = getActiveMedia();
    if (!media) return;

    setDuration(media.duration || 0);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    const media = getActiveMedia();
    if (!media) return;

    media.currentTime = time;
    setCurrentTime(time);
    if (audioSrc) {
      syncVideoTime(time);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      ref={playerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 ${
        isFullscreen ? "h-full rounded-none flex flex-col bg-black" : "rounded-[2.25rem]"
      }`}
    >
      {/* Visual Display */}
      <div
        className={`relative w-full overflow-hidden bg-slate-950 ${
          isFullscreen ? "flex-1 min-h-0" : "aspect-video"
        }`}
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            preload="metadata"
            muted={isMuted}
            onTimeUpdate={!audioSrc ? handleTimeUpdate : undefined}
            onLoadedMetadata={!audioSrc ? handleLoadedMetadata : undefined}
            onEnded={!audioSrc ? () => setIsPlaying(false) : undefined}
            className={`w-full h-full ${isFullscreen ? "object-contain" : "object-contain p-2"}`}
          />
        ) : (
          <div className="w-full h-full bg-slate-800" />
        )}
        {/* Overlay Gradient */}
        {!isFullscreen && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        )}
      </div>

      {/* Controls Container */}
      <div className={`space-y-4 ${isFullscreen ? "px-6 py-4 shrink-0 bg-slate-900/95 backdrop-blur" : "p-6"}`}>
        {/* Title */}
        <h3 className="text-xl font-bold text-white">{title}</h3>

        {/* Progress Bar */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayPause}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/40 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </motion.button>

          {/* Volume Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMuteToggle}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-slate-300 hover:text-white hover:bg-white/20 transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>

          {/* Fullscreen Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFullscreenToggle}
            className="flex items-center justify-center w-12 h-10 rounded-lg bg-white/10 border border-white/20 text-slate-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </motion.button>

          {/* Status Text */}
          <div className="ml-auto">
            <span className="text-sm font-semibold text-orange-400">
              {isPlaying ? "Playing" : isMuted ? "Muted" : "Ready"}
            </span>
          </div>
        </div>

        {/* Hidden Audio Element */}
        {audioSrc ? (
          <audio
            ref={audioRef}
            src={audioSrc}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => {
              setIsPlaying(false);
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            }}
          />
        ) : null}
      </div>
    </motion.div>
  );
}
