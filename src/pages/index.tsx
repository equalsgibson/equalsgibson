import ExecutiveSummary from "@/components/executive-summary/index";
import Contact, { CONTACT } from "@/components/contact/index";
import ProjectHighlight from "@/components/project-highlight";
import TestDrivenDevelopment from "@/components/animations/test-driven-development";

import styles from "./styles.module.scss"
import { inter } from "@/app/fonts";



export default function Home() {
  return (
    <main className={inter.className}>
      <section>
        <h1>👋🏼 Hey there! I&apos;m Chris Gibson</h1>
        {/* <iunmage profile pic? */}
      </section>
      <section className={styles.taglineContainer}>
        {/* <span className={styles.tagline}>SOFTWARE ENGINEER</span>
      <span className={styles.tagline}>OPEN-SOURCE ADVOCATE</span> */}
        <div className={styles.tagline}>
          <span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span>
          <TestDrivenDevelopment />
        </div>

        <div className={styles.tagline}><span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span><TestDrivenDevelopment /></div>

        <div className={styles.tagline}><span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span><TestDrivenDevelopment /></div>
      </section>
      <section>
        <Contact type={CONTACT.Email} label="c.a.gibson1990@gmail.com" />
        <Contact type={CONTACT.Web} label="https://github.com/equalsgibson" />
      </section>
      <section>
        <ExecutiveSummary />
        <ProjectHighlight />
      </section>
    </main>
  )
}