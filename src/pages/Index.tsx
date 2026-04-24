import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EliteProtocol from "@/components/EliteProtocol";
import Authority from "@/components/Authority";
import Procedures from "@/components/Procedures";
import Differentials from "@/components/Differentials";
import QualityVideoSection from "@/components/QualityVideoSection";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <Hero />
    <EliteProtocol />
    <Results />
    <Authority />
    <Procedures />
    <Differentials />
    <QualityVideoSection />
    <Testimonials />
    <Experience />
    <CTA />
    <Footer />
  </main>
);

export default Index;
