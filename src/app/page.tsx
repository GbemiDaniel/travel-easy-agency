// src/app/page.tsx

// Go up one level from 'app', then into 'components'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "@/components/Stats";
import ThingsToDo from "@/components/ThingsToDo";
import DealsAndDiscounts from "@/components/DealsAndDiscounts";
import VacationPlan from "@/components/VacationPlan";
import Testimonials from "@/components/Testimonials";
import LatestBlog from "@/components/LatestBlog";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ThingsToDo />
      <DealsAndDiscounts />
      <VacationPlan />
      <Testimonials />/
      <LatestBlog />
      <NewsletterCTA />
    </main>
  );
}