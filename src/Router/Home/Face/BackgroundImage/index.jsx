import useProgressiveImg from "../useProgressiveImg";
import "./stylesheet.scss"


export default function () {
    const [src, { blur }] = useProgressiveImg("/BlurredClouds.jpg", "/Clouds.gif");

    const props = {
        className: "homepage-face-background",
        style: {
            "--bg-image": `url(${src})`,
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out"
        }
    };

    return <div {...props} />;
}
