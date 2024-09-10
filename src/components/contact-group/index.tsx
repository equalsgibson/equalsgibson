import React from "react"


type Props = {
    icon?: string
    label: string
}

export default function ContactGroup(props: React.PropsWithChildren<Props>) {
    return <span className="">{props.children}</span>
}