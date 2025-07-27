import useProgressiveImg from "../useProgressiveImg";

export default function () {
    const [src, _] = useProgressiveImg("/img/Risha&NastyaSmall.png", "/img/Risha&Nastya.png");

    const props = {
        src: src,
        style: {
            imageRendering: "pixelated"
        }
    };

    return <img {...props} />;
}