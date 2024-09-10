import ExecutiveSummary from "@/components/executive-summary/index";
import Contact from "@/components/contact/index";
import ProjectHighlight from "@/components/projectHighlight";

export default function Home() {
    return <main>
      <h1>CHRIS GIBSON</h1>
      <section>
        <span>SOFTWARE ENGINEER</span>
        <span>OPEN-SOURCE ADVOCATE</span>
        <span>TEST-DRIVEN DEVELOPMENT ENTHUSIAST</span>
      </section>
      <section>
        <Contact label="c.a.gibson1990@gmail.com" />
        <Contact label="github.com/equalsgibson" />
      </section>
      <section>
        <ExecutiveSummary />
        <ProjectHighlight />
      </section>
      </main>
  }