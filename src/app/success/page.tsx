import Testimonials from "@/component/Testimonal";
import CurvedLine from "@/component/CurvedLine";
import SuccessHeader from "@/component/SuccessHeader";
import ClientsSection from "@/component/ClientSection";
import CommunityCTA from "@/component/Success/CommunityCTA";

export default function SuccessPage() {
  return (
    <main className="bg-white min-h-screen">
      <SuccessHeader />
      <ClientsSection />
      <CommunityCTA />
      <Testimonials />
      <CurvedLine />
    </main>
  );
}
