import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
import { delay } from '../utils';

import styles from './styles.module.scss'

export default function Discussion() {
    const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

    useEffect(() => {
        if (dotLottie) {
            dotLottie.addEventListener('complete', () => {
                dotLottie.setSegment(100, 235)
                dotLottie.setLoop(true)
                delay(1000).then(() => {
                    dotLottie.play()
                })
            })

            dotLottie.addEventListener('loop', () => {
                dotLottie.pause()
                delay(1000).then(() => {
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