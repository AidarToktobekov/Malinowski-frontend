import { useEffect, useRef } from "react";

interface Props {
  video: {
    come: string;
    back: string;
    exterior1_1: string;
    exterior1_2: string;
    exterior1_3: string;
    exterior1_4: string;
    exterior2_1: string;
    exterior2_2: string;
    exterior3_1: string;
    exterior3_2: string;
    exterior4_1: string;
    exterior4_2: string;
    interior1_1: string;
    interior1_2: string;
    interior2_1: string;
    interior2_2: string;
    exterior1: string;
    exterior2: string;
    exterior3: string;
    exterior4: string;
    interior1: string;
    interior2: string;
  };
  setVideo: (video: string) => void;
  nowVideo: string;
}
const HouseShowingVideos: React.FC<Props> = ({ nowVideo, video, setVideo }) => {
  const videoProps = {
    autoPlay: true,
    muted: true,
    preload: "auto",
    controlsList: "nodownload nofullscreen",
    disablePictureInPicture: true,
    playsInline: true,
  };

  const videoRefs = {
    [video.come]: useRef<HTMLVideoElement | null>(null),
    [video.back]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_2]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_3]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_4]: useRef<HTMLVideoElement | null>(null),
    [video.exterior2_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior3_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior4_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior2_2]: useRef<HTMLVideoElement | null>(null),
    [video.exterior3_2]: useRef<HTMLVideoElement | null>(null),
    [video.exterior4_2]: useRef<HTMLVideoElement | null>(null),
    [video.interior1_1]: useRef<HTMLVideoElement | null>(null),
    [video.interior1_2]: useRef<HTMLVideoElement | null>(null),
    [video.interior2_1]: useRef<HTMLVideoElement | null>(null),
    [video.interior2_2]: useRef<HTMLVideoElement | null>(null),
  };

  useEffect(() => {
    if (videoRefs[nowVideo]?.current) {
      videoRefs[nowVideo].current.currentTime = 0;
      videoRefs[nowVideo].current.play();
    }
  }, [nowVideo]);

  return (
    <>
      <video
        style={{
          display: nowVideo === video.come ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.come) setVideo(video.exterior1);
        }}
        src={video.come}
        ref={videoRefs[video.come]}
      />
      <video
        className="video"
        style={{
          display: nowVideo === video.exterior1 ? "block" : "none",
        }}
        {...videoProps}
        src={video.exterior1}
        loop
      />
      <video
        className="video"
        style={{
          display: nowVideo === video.exterior2 ? "block" : "none",
        }}
        {...videoProps}
        src={video.exterior2}
        loop
      />
      <video
        className="video"
        style={{
          display: nowVideo === video.exterior3 ? "block" : "none",
        }}
        {...videoProps}
        src={video.exterior3}
        loop
      />
      <video
        className="video"
        style={{
          display: nowVideo === video.exterior4 ? "block" : "none",
        }}
        {...videoProps}
        src={video.exterior4}
        loop
      />
      <video
        className="video"
        style={{
          display: nowVideo === video.interior1 ? "block" : "none",
        }}
        {...videoProps}
        src={video.interior1}
        loop
      />
      <video
        className="video"
        style={{
          display: nowVideo === video.interior2 ? "block" : "none",
        }}
        {...videoProps}
        src={video.interior2}
        loop
      />
      <video
        style={{
          display: nowVideo === video.exterior1_1 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior1_1) setVideo(video.exterior1);
        }}
        src={video.exterior1_1}
        ref={videoRefs[video.exterior1_1]}
      />
      <video
        style={{
          display: nowVideo === video.exterior1_2 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior1_2) setVideo(video.exterior1);
        }}
        src={video.exterior1_2}
        ref={videoRefs[video.exterior1_2]}
      />
      <video
        style={{
          display: nowVideo === video.exterior1_3 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior1_3) setVideo(video.exterior1);
        }}
        src={video.exterior1_3}
        ref={videoRefs[video.exterior1_3]}
      />
      <video
        style={{
          display: nowVideo === video.exterior1_4 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior1_4) setVideo(video.exterior1);
        }}
        src={video.exterior1_4}
        ref={videoRefs[video.exterior1_4]}
      />
      <video
        style={{
          display: nowVideo === video.exterior2_1 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior2_1) setVideo(video.exterior2);
        }}
        src={video.exterior2_1}
        ref={videoRefs[video.exterior2_1]}
      />
      <video
        style={{
          display: nowVideo === video.exterior2_2 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior2_2) setVideo(video.exterior2);
        }}
        src={video.exterior2_2}
        ref={videoRefs[video.exterior2_2]}
      />
      <video
        style={{
          display: nowVideo === video.exterior3_1 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior3_1) setVideo(video.exterior3);
        }}
        src={video.exterior3_1}
        ref={videoRefs[video.exterior3_1]}
      />
      <video
        style={{
          display: nowVideo === video.exterior3_2 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior3_2) setVideo(video.exterior3);
        }}
        src={video.exterior3_2}
        ref={videoRefs[video.exterior3_2]}
      />
      <video
        style={{
          display: nowVideo === video.exterior4_1 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior4_1) setVideo(video.exterior4);
        }}
        src={video.exterior4_1}
        ref={videoRefs[video.exterior4_1]}
      />
      <video
        style={{
          display: nowVideo === video.exterior4_2 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.exterior4_2) setVideo(video.exterior4);
        }}
        src={video.exterior4_2}
        ref={videoRefs[video.exterior4_2]}
      />
      <video
        style={{
          display: nowVideo === video.interior1_1 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.interior1_1) setVideo(video.interior1);
        }}
        src={video.interior1_1}
        ref={videoRefs[video.interior1_1]}
      />
      <video
        style={{
          display: nowVideo === video.interior1_2 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.interior1_2) setVideo(video.interior1);
        }}
        src={video.interior1_2}
        ref={videoRefs[video.interior1_2]}
      />
      <video
        style={{
          display: nowVideo === video.interior2_1 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.interior2_1) setVideo(video.interior2);
        }}
        src={video.interior2_1}
        ref={videoRefs[video.interior2_1]}
      />
      <video
        style={{
          display: nowVideo === video.interior2_2 ? "block" : "none",
        }}
        className="video"
        {...videoProps}
        onEnded={() => {
          if (nowVideo === video.interior2_2) setVideo(video.interior2);
        }}
        src={video.interior2_2}
        ref={videoRefs[video.interior2_2]}
      />
    </>
  );
};

export default HouseShowingVideos;
