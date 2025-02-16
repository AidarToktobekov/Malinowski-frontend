import video1 from "../../../assets/Malinowskiego_Hero_1-1.mp4";
import video2 from "../../../assets/Malinowskiego_Hero_1-2.mp4";
import video3 from "../../../assets/Malinowskiego_Hero_4-2.mp4";
import video4 from "../../../assets/Malinowskiego_Hero_2-1.mp4";
import videoHouseA1 from "../../../assets/Malinowskiego_HouseA_0-1.mp4";
import videoHouseA3 from "../../../assets/Malinowskiego_HouseA_1-1.mp4";
import backA from "../../../assets/Malinowskiego_HouseA_1-0.mp4";
import videoHouseB1 from "../../../assets/Malinowskiego_HouseB_0-1.mp4";
import videoHouseB3 from "../../../assets/Malinowskiego_HouseB_1-1.mp4";
import videoHouseC1 from "../../../assets/Malinowskiego_HouseC_0-1.mp4";
import videoHouseC3 from "../../../assets/Malinowskiego_HouseC_1-1.mp4";
import videoHouseD1 from "../../../assets/Malinowskiego_HouseD_0-1.mp4";
import videoHouseD3 from "../../../assets/Malinowskiego_HouseD_1-1.mp4";
import videoHouseE1 from "../../../assets/Malinowskiego_HouseE_0-1.mp4";
import videoHouseE3 from "../../../assets/Malinowskiego_HouseE_1-1.mp4";
import videoHouseF1 from "../../../assets/Malinowskiego_HouseF_0-1.mp4";
import videoHouseF3 from "../../../assets/Malinowskiego_HouseF_1-1.mp4";
import backB from "../../../assets/Malinowskiego_HouseB_1-0.mp4";
import backC from "../../../assets/Malinowskiego_HouseC_1-0.mp4";
import backD from "../../../assets/Malinowskiego_HouseD_1-0.mp4";
import backE from "../../../assets/Malinowskiego_HouseE_1-0.mp4";
import backF from "../../../assets/Malinowskiego_HouseF_1-0.mp4";
import videoMobile from "../../../assets/Malinowskiego_Hero_mobile_1-1 (1).mp4";
import Grid from "@mui/material/Grid2";
import { useEffect, useRef } from "react";

interface Props {
  video: string;
  setVideo: (video: string) => void;
  width: number;
}
const Video: React.FC<Props> = ({ video, setVideo, width }) => {
  const videoProps = {
    autoPlay: true,
    muted: true,
    preload: "auto",
    controlsList: "nodownload nofullscreen",
    disablePictureInPicture: true,
    playsInline: true,
  };
  const videoRefs = {
    [video2]: useRef<HTMLVideoElement | null>(null),
    [video4]: useRef<HTMLVideoElement | null>(null),
    [videoHouseA1]: useRef<HTMLVideoElement | null>(null),
    [backA]: useRef<HTMLVideoElement | null>(null),
    [videoHouseB1]: useRef<HTMLVideoElement | null>(null),
    [backB]: useRef<HTMLVideoElement | null>(null),
    [videoHouseC1]: useRef<HTMLVideoElement | null>(null),
    [videoHouseD1]: useRef<HTMLVideoElement | null>(null),
    [videoHouseE1]: useRef<HTMLVideoElement | null>(null),
    [videoHouseF1]: useRef<HTMLVideoElement | null>(null),
  };

  useEffect(() => {
    if (width > 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.id === "section1") {
                setVideo(video4);
              } else if (entry.target.id === "section2") {
                setVideo(video2);
              }
            }
          });
        },
        { threshold: 0.5 },
      );

      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");

      if (section1) observer.observe(section1);
      if (section2) observer.observe(section2);

      return () => {
        if (section1) observer.unobserve(section1);
        if (section2) observer.unobserve(section2);
      };
    }
  }, []);

  useEffect(() => {
    if (videoRefs[video]?.current) {
      videoRefs[video].current.currentTime = 0;
      videoRefs[video].current.play();
    }
  }, [video]);

  return (
    <>
      <Grid
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: "-1",
          "&::after": {
            zIndex: "1",
            content: '""',
            opacity: "0.6",
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(269.91deg, rgba(0, 0, 0, 0) 11.86%, rgba(0, 0, 0, 0.93) 110.84%)",
          },
        }}
      >
        <video
          className="video"
          style={{
            display: video === videoMobile ? "block" : "none",
          }}
          {...videoProps}
          src={videoMobile}
          loop
        />
        <video
          className="video"
          style={{
            display: video === video1 ? "block" : "none",
          }}
          {...videoProps}
          src={video1}
          loop
        />
        <video
          style={{
            display: video === video2 ? "block" : "none",
          }}
          className="video"
          ref={videoRefs[video2]}
          onEnded={() => {
            if (video === video2) setVideo(video3);
          }}
          src={video2}
          {...videoProps}
        />
        <video
          style={{
            display: video === video3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          src={video3}
          loop
        />
        <video
          style={{
            display: video === video4 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === video4) setVideo(video1);
          }}
          src={video4}
          ref={videoRefs[video4]}
        />
        <video
          style={{
            display: video === videoHouseA1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === videoHouseA1) setVideo(videoHouseA3);
          }}
          src={videoHouseA1}
          ref={videoRefs[videoHouseA1]}
        />
        <video
          style={{
            display: video === videoHouseA3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          loop
          src={videoHouseA3}
        />
        <video
          style={{
            display: video === videoHouseB1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === videoHouseB1) setVideo(videoHouseB3);
          }}
          src={videoHouseB1}
          ref={videoRefs[videoHouseB1]}
        />

        <video
          style={{
            display: video === backA ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === backA) setVideo(video3);
          }}
          src={backA}
          ref={videoRefs[backA]}
        />
        <video
          style={{
            display: video === videoHouseB3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          loop
          src={videoHouseB3}
        />
        <video
          style={{
            display: video === videoHouseC1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === videoHouseC1) setVideo(videoHouseC3);
          }}
          src={videoHouseC1}
          ref={videoRefs[videoHouseC1]}
        />
        <video
          style={{
            display: video === videoHouseC3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          loop
          src={videoHouseC3}
        />
        <video
          style={{
            display: video === videoHouseD1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === videoHouseD1) setVideo(videoHouseD3);
          }}
          src={videoHouseD1}
          ref={videoRefs[videoHouseD1]}
        />
        <video
          style={{
            display: video === videoHouseD3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          loop
          src={videoHouseD3}
        />
        <video
          style={{
            display: video === videoHouseE1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === videoHouseE1) setVideo(videoHouseE3);
          }}
          src={videoHouseE1}
          ref={videoRefs[videoHouseE1]}
        />
        <video
          style={{
            display: video === videoHouseE3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          loop
          src={videoHouseE3}
        />
        <video
          style={{
            display: video === videoHouseF1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === videoHouseF1) setVideo(videoHouseF3);
          }}
          src={videoHouseF1}
          ref={videoRefs[videoHouseF1]}
        />
        <video
          style={{
            display: video === videoHouseF3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          loop
          src={videoHouseF3}
        />
        <video
          style={{
            display: video === backB ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === backB) setVideo(video3);
          }}
          src={backB}
          ref={videoRefs[backB]}
        />
        <video
          style={{
            display: video === backC ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === backC) setVideo(video3);
          }}
          src={backC}
          ref={videoRefs[backC]}
        />
        <video
          style={{
            display: video === backD ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === backD) setVideo(video3);
          }}
          src={backD}
          ref={videoRefs[backD]}
        />
        <video
          style={{
            display: video === backE ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === backE) setVideo(video3);
          }}
          src={backE}
          ref={videoRefs[backE]}
        />
        <video
          style={{
            display: video === backF ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (video === backF) setVideo(video3);
          }}
          src={backF}
          ref={videoRefs[backF]}
        />
      </Grid>
    </>
  );
};

export default Video;
