import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import styles from './styles.module.scss'

export default function TestDrivenDevelopment() {
    return (
        <DotLottieReact
            src={"/lottie-animations/test-driven-development.lottie"}
            autoplay
            mode='bounce'
            className={styles.container}
        />
    );

}