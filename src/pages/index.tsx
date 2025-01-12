import Image from "next/image";
import ProfilePicture from './../../public/profile_canada.png'

import ExecutiveSummary from "@/components/executive-summary/index";
import Contact, { CONTACT } from "@/components/contact/index";
import ProjectHighlight from "@/components/project-highlight";
import TestDrivenDevelopment from "@/components/animations/test-driven-development";

import styles from "./styles.module.scss"
import { inter } from "@/app/fonts";
import Heartbeat from "@/components/animations/heartbeat";
import Discussion from "@/components/animations/discussion";



export default function Home() {
  return (
    <main className={inter.className}>
      <section className={styles.headerContainer}>
        <Image
          src={ProfilePicture}
          alt="Profile Picture"
          width={96}
          height={96}
        />
        <h1>Hey there! I&apos;m Chris Gibson 👋🏼</h1>
      </section>
      <section className={styles.taglineContainer}>
        <div className={styles.tagline}>
          <span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span>
          <TestDrivenDevelopment />
        </div>

        <div className={styles.tagline}>
          <span>OPEN-SOURCE ADVOCATE</span>
          <Heartbeat />
        </div>

        {/* <div className={styles.tagline}><span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span><TestDrivenDevelopment /></div> */}
      </section>

      <section>
        <ExecutiveSummary />
        <ProjectHighlight />
      </section>
      <section className={styles.contactContainer}>
        <h2>Get in touch</h2>
        <div>
          <div>
            <Contact type={CONTACT.Email} label="c.a.gibson1990@gmail.com" />
            <Contact type={CONTACT.Web} label="https://github.com/equalsgibson" />
          </div>
          <div className={styles.discussionContainer}>
            <Discussion />
          </div>
        </div>
      </section>
    </main>
  )
}