import {
    useToolKit
} from "@webx/toolkit"

import useProgressiveImg from "../useProgressiveImg";


export default function () {
    const [src, _] = useProgressiveImg("/Risha&NastyaSmall.png", "/Risha&Nastya.png");

    const props = {
        src: src,
        style: {
            imageRendering: "pixelated"
        }
    };

    return <img {...props} />;
}