import styles from "./styles.module.scss"

type Props = {
    type: CONTACT
    label: string
}

export default function Contact(props: Props) {
    let icon = <></>
    switch (props.type) {
        case CONTACT.Email:
            icon = <i className="fa-solid fa-envelope" />
            break;
        case CONTACT.Web:
            icon = <i className="fa-solid fa-code" />
            break;
        case CONTACT.Phone:
            icon = <i className="fa-solid fa-phone" />
            break;
    }

    return <span className={styles.container}>{icon}{props.label}</span>
}

export enum CONTACT {
    Email = "email",
    Web = "web",
    Phone = "phone"
}