import { bebas_neue } from "@/app/fonts"
import styles from "./styles.module.scss"
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ExecutiveSummary() {
    const contextRequire: webpack.Context = import.meta.webpackContext('../../../public/badges', {
        recursive: false,
        regExp: /svg/,
    });

    return (
        <div className={styles.container}>

            <div className={styles.summary}>
                <h3 className={bebas_neue.className}>About</h3>
                <p>Chris Gibson is a highly motivated Software Engineer with 3+ years of experience in Full Stack Development, specializing in Golang. He is engaged in the OSS community, contributing to existing projects and developing / maintaining his own FOSS projects. With a proven track record in developing secure, efficient, and impactful software solutions, Chris has:</p>
                <ul>
                    <li>Architected critical services for large user bases.</li>
                    <li>Saved operational costs through innovative tools and automation.</li>
                    <li>Mentored junior engineers and facilitated their growth.</li>
                    <li>Integrated cutting-edge technologies, including generative AI chatbots, to enhance internal and customer-facing operations.</li>
                </ul>
                <p>He combines technical expertise in Golang, JavaScript/TypeScript, Docker, and CI/CD with strong leadership and problem-solving skills. His passion for software engineering extends beyond professional responsibilities into active contributions to open-source projects. Chris thrives in environments that value innovative solutions, collaboration, and continuous improvement.</p>
            </div>
            <div className={styles.techstack} title="These are just some of the technologies that I am familiar with or work with frequently">
                <h3 className={bebas_neue.className}>Current Tech Stack</h3>
                <div>
                    {contextRequire.keys().map((svg) => {
                        const mod = contextRequire(svg)
                        if (mod)
                            return <Image
                                alt={svg}
                                key={svg}
                                src={mod as StaticImport}
                            />
                    })}
                    ... and more
                </div>
            </div>

        </div>
    )
}