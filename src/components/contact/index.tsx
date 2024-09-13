import styles from "./styles.module.scss"

type Props = {
    icon?: string
    label: string
}

export default function Contact(props: Props) {
    let icon = <></>
    if (props.icon) {
        icon = <i className={props.icon} />
    }

    return <span className={styles.container}>{icon}{props.label}<i className="fa-solid fa-display"></i>{props.label}</span>
}