import React from "react"

import styles from "./styles.module.scss"


type Props = {
    className?: string
    dividers?: true
}

export default function ContactGroup(props: React.PropsWithChildren<Props>) {
    return <div className={styles.container}>{props.children}</div>
}