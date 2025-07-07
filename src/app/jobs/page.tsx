"use client";
import CategoryButtons from "@/component/CategorySection";
import CommunitySection from "@/component/CommunitySection";
import CurvedLine from "@/component/CurvedLine";
import HeaderSection from "@/component/HeaderSection";
import JobSeekerSection from "@/component/JobSeekerSection";
import TopJobs from "@/component/TopJobs";
import React from "react";

export default function JobsPage() {
  return (
    <main className="bg-white min-h-screen">
      <HeaderSection />
      <CategoryButtons />
      <CommunitySection />
      <TopJobs />
      <CurvedLine />
      <JobSeekerSection />
    </main>
  );
}
