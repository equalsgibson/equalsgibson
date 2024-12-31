import ExecutiveSummary from "@/components/executive-summary/index";
import Contact, { CONTACT } from "@/components/contact/index";
import ProjectHighlight from "@/components/project-highlight";



export default function Home() {
  return (<main>
    <h1>👋🏼 Hey there! I&apos;m Chris Gibson</h1>
    <section>
      <span>SOFTWARE ENGINEER</span>
      <span>OPEN-SOURCE ADVOCATE</span>
      <span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span>
    </section>
    <section>
      <Contact type={CONTACT.Email} label="c.a.gibson1990@gmail.com" />
      <Contact type={CONTACT.Web} label="https://github.com/equalsgibson" />
    </section>
    <section>
      <ExecutiveSummary />
      <ProjectHighlight />
    </section>
  </main>)
}