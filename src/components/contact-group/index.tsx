import React from "react"

import styles from "./styles.module.scss"


type Props = {
    className?: string
    dividers?: true
}

export default function ContactGroup(props: React.PropsWithChildren<Props>) {
    let style = [styles.container]
    if (props.dividers) {
        style.push(styles.divider)
    }

    return <div className={style.join(" ")}>{props.children}</div>
}