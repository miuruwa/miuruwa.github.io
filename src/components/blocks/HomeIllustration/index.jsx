import useProgressiveImg from "@hooks/useProgressiveImg";

const HomeIllustration = () => {
  const [src, _] = useProgressiveImg("/img/Risha&NastyaSmall.png", "/img/Risha&Nastya.png");

  return <img src={src} style={{imageRendering: "pixelated"}} />;
}

export default HomeIllustration;
