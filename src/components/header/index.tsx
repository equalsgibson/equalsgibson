import React from "react"

import styles from "./styles.module.scss"

type Props = {
    children: React.ReactNode[]
}

export default function Header(props: Props) {
    return <>{...props.children}</>
}
