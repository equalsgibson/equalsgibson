import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
import { delay } from '../utils';

import styles from './styles.module.scss'

export default function Heartbeat() {
    const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

    useEffect(() => {
        if (dotLottie) {
            dotLottie.addEventListener('loop', () => {
                dotLottie.pause()
                delay(2000).then(() => {
                    dotLottie.play()
                })
            })
        }
    }, [dotLottie])



    return (
        <DotLottieReact
            src={"/lottie-animations/heartbeat.lottie"}
            autoplay
            loop
            dotLottieRefCallback={setDotLottie}
            className={styles.container}
        />
    );

}