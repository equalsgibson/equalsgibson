import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
import { delay } from '../utils';

import styles from './styles.module.scss'

export default function Discussion() {
    const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

    useEffect(() => {
        if (dotLottie) {
            dotLottie.addEventListener('complete', () => {
                console.log("hasd")
                dotLottie.setSegment(100, 235)
                dotLottie.setLoop(true)
                delay(1000).then(() => {
                    console.log("hasaad")
                    dotLottie.play()
                })
            })

            dotLottie.addEventListener('loop', () => {
                dotLottie.pause()
                console.log("hasasdd")
                delay(1000).then(() => {
                    console.log("hasdasaaaa")
                    dotLottie.play()
                })
            })
        }
    }, [dotLottie])



    return (
        <DotLottieReact
            src={"/lottie-animations/discussion.lottie"}
            autoplay
            dotLottieRefCallback={setDotLottie}
            className={styles.container}
        />
    );

}