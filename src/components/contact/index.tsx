import styles from "./styles.module.scss"

type Props = {
    type: CONTACT
    label: string
}

export default function Contact(props: Props) {

    let value = <>{props.label}</>
    let icon = <></>

    switch (props.type) {
        case CONTACT.Email:
            icon = <i className="fa-solid fa-envelope" />
            value = <a href={`mailto:${props.label}`}>{props.label}</a>
            break;
        case CONTACT.Web:
            icon = <i className="fa-solid fa-code" />
            value = <a href={`${props.label}`} rel="noreferrer" target="_blank">{props.label}</a>
            break;
        case CONTACT.LinkedIn:
            icon = <i className="fa-brands fa-linkedin" />
            value = <a href={`${props.label}`} rel="noreferrer" target="_blank">{props.label}</a>
            break;
        case CONTACT.Phone:
            icon = <i className="fa-solid fa-phone" />
            break;
    }

    return <span className={styles.container}>{icon}{value}</span>
}

export enum CONTACT {
    Email = "email",
    Web = "web",
    Phone = "phone",
    LinkedIn = "linkedin"
}