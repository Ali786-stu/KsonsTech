import Hero from "@/components/hero"
import Services from "@/components/services"
import Approach from "@/components/approach"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Approach />
      <Projects />
      <Contact />
    </main>
  )
}
