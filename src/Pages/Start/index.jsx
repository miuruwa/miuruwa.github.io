import {
    useEffect, createRef, useState
} from "react"

import {
    Button
} from "@webx/forms"

import "./stylesheet.scss"

// import useSound from 'use-sound'

function wait(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

const titleTextAnimation = [
    {
        title: "ken~",
        timeout: 50
    },
    {
        title: "ken~-",
        timeout: 50
    },
    {
        title: "ken soi~",
        timeout: 50
    },
    {
        title: "kensoi~-",
        timeout: 50
    },
    {
        title: "kensoi-",
        timeout: 50
    },
    {
        title: "kensoi dev~",
        timeout: 50
    },
    {
        title: "kensoidev~-",
        timeout: 50
    },
    {
        title: "kensoidev-",
        timeout: 50
    },
    {
        title: "kensoidev",
        timeout: 100
    },
    {
        title: "kensoidev.",
        timeout: 2000
    },
]

function StartTitle () {
    const title = createRef();

    async function titleAnimation () {
        const titleContent = title.current

        for (let index = 0; index < titleTextAnimation.length; index++) {
            const element = titleTextAnimation[index];

            titleContent.innerHTML = element.title
            await wait(element.timeout)
        }

        window.location.pathname = "/repos"
    }

    useEffect(
        () => {
            titleAnimation()
        }, []
    )

    return <div ref={title} className="start-title">
        &nbsp;
    </div>
}

function StartButton ({onClick}) {
    const buttonProps = {
        theme: "transparent",
        title: "enter",
        onClick: () => {
            onClick()
        }
    }

    return <div>
        <Button {...buttonProps}/>
    </div>
}

function Home () {
    // const [playSound] = useSound(Speech, { volume: 0.05 })
    const [state, setState] = useState(0)
    useEffect(
        () => {
            document.title = "..."
        }, []
    )
    async function Start () {
        setState(1);
        await wait(1000)
        setState(2);
        // playSound()
    }
    switch (state) {
        case 0:
            return <div className="start-page">
                <StartButton onClick={Start}/>
            </div>

        case 1:
            return <div className="start-page">
                <h6>
                    Внимание! Сейчас будет звук!
                </h6>
            </div>

        default: 
            return <div className="start-page">
                <StartTitle />
            </div>
    }
}

export default Home