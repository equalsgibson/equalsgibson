import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import styles from './styles.module.scss'

export default function User() {
    return (
        <DotLottieReact
            src={"/lottie-animations/user.lottie"}
            autoplay
            mode='bounce'
            loop
            className={styles.container}
        />
    );

}