import { useEffect } from "react";
import type { FC } from "react";

const Redirect: FC<{url: string}> = ({url}) => {
    useEffect(() => {
        window.location.href = url;
    }, [url]);

    return <h5>Redirecting...</h5>;
}

export default Redirect;