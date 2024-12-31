import Wave from "../animations/wave"
import styles from "./styles.module.scss"

export default function ExecutiveSummary() {
    return <div className={styles.container}>
        <div>
            <p>Chris Gibson is a highly motivated Software Engineer with 3+ years of experience in Full Stack Development, specializing in Golang. He is engaged in the OSS community, contributing to existing projects and developing / maintaining his own FOSS projects.

                With a proven track record in developing secure, efficient, and impactful software solutions, Chris has:

                <ul>
                    <li>Architected critical services for large user bases.</li>
                    <li>Saved operational costs through innovative tools and automation.</li>
                    <li>Mentored junior engineers and facilitated their growth.</li>
                    <li>Integrated cutting-edge technologies, including generative AI chatbots, to enhance internal and customer-facing operations.</li>

                </ul>

                He combines technical expertise in Golang, JavaScript/TypeScript, Docker, and CI/CD with strong leadership and problem-solving skills. His passion for software engineering extends beyond professional responsibilities into active contributions to open-source projects.

                Chris thrives in environments that value innovative solutions, collaboration, and continuous improvement.</p>
        </div>
        <div>
            <Wave />
        </div>
    </div>
}