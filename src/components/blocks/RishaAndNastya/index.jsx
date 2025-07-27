import useProgressiveImg from "@hooks/useProgressiveImg";

const RishaAndNastya = () => {
    const [src, _] = useProgressiveImg("/img/Risha&NastyaSmall.png", "/img/Risha&Nastya.png");

    return <img src={src} style={{
        imageRendering: "pixelated"
    }} />;
}

export default RishaAndNastya;
