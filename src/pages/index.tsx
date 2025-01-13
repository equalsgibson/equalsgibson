import Image from "next/image";
import ProfilePicture from './../../public/profile_canada.png'

import ExecutiveSummary from "@/components/executive-summary/index";
import Contact, { CONTACT } from "@/components/contact/index";
import ProjectHighlight from "@/components/project-highlight";
import TestDrivenDevelopment from "@/components/animations/test-driven-development";

import styles from "./styles.module.scss"
import { bebas_neue, inter } from "@/app/fonts";
import Heartbeat from "@/components/animations/heartbeat";
import Discussion from "@/components/animations/discussion";



export default function Home() {
  return (
    <main className={inter.className}>
      <div className={styles.headline}>
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
        </section>
      </div>

      <section>
        <ExecutiveSummary />
        <ProjectHighlight />
      </section>
      <section className={styles.contactContainer}>
        <h3 className={bebas_neue.className}>Get in touch</h3>
        <p>If you want to discuss any projects you are working on or oppurtunties, please reach out to me - I am always happy to chat about technology, software development, projects or anything else</p>
        <div>
          <div className={styles.discussionContainer}>
            <Discussion />
          </div>
          <div>
            <Contact type={CONTACT.Email} label="c.a.gibson1990@gmail.com" />
            <Contact type={CONTACT.Web} label="https://github.com/equalsgibson" />
            <Contact type={CONTACT.LinkedIn} label="https://www.linkedin.com/in/chris-gibson-77608270" />
          </div>

        </div>
      </section>
    </main>
  )
}