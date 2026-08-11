import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AcademyHome } from "./pages/academy-v2/AcademyHome";
import { AcademyPrograms } from "./pages/academy-v2/AcademyPrograms";
import { ProgramDetail } from "./pages/academy-v2/ProgramDetail";
import { Certifications } from "./pages/academy-v2/Certifications";
import { Resources } from "./pages/academy-v2/Resources";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { News } from "./pages/News";
import { Research } from "./pages/Research";
import { NewsArticleDetail } from "./pages/NewsArticleDetail";
import { ResearchPaperDetail } from "./pages/ResearchPaperDetail";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import InvestmentBankingProgram from "./pages/academy-v2/InvestmentBankingProgram";
import DigitalRiskFundamentals from "./pages/academy-v2/DigitalRiskFundamentals";
import CyberResiliencePractitioner from "./pages/academy-v2/CyberResiliencePractitioner";
import AIRiskGovernance from "./pages/academy-v2/AIRiskGovernance";
import ExecutiveLeadership from "./pages/academy-v2/ExecutiveLeadership";
import CNISCC from "./pages/academy-v2/CNISCC";
import DataRiskEnterprise from "./pages/academy-v2/DataRiskEnterprise";
import StudentProgram from "./pages/academy-v2/StudentProgram";
import EarlyCareerProgram from "./pages/academy-v2/EarlyCareerProgram";
import ExperiencedProgram from "./pages/academy-v2/ExperiencedProgram";
import OrganisationProgram from "./pages/academy-v2/OrganisationProgram";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AcademyHome /> },

      {
        path: "programmes",
        children: [
          { index: true, element: <AcademyPrograms /> },

          { path: "students", element: <StudentProgram /> },
          { path: "early-career", element: <EarlyCareerProgram /> },
          { path: "experienced", element: <ExperiencedProgram /> },
          { path: "organisation", element: <OrganisationProgram /> },

          { path: "investment-banking", element: <InvestmentBankingProgram /> },
          { path: "digital-risk-fundamentals", element: <DigitalRiskFundamentals /> },
          { path: "cyber-resilience-practitioner", element: <CyberResiliencePractitioner /> },
          { path: "ai-risk-governance", element: <AIRiskGovernance /> },
          { path: "executive-leadership", element: <ExecutiveLeadership /> },
          { path: "cniscc", element: <CNISCC /> },
          { path: "data-risk-enterprise", element: <DataRiskEnterprise /> },
          { path: ":id", element: <ProgramDetail /> },
        ],
      },

      { path: "certifications", element: <Certifications /> },
      { path: "resources", element: <Resources /> },
      { path: "about", element: <About /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsArticleDetail /> },
      { path: "research", element: <Research /> },
      { path: "research/:id", element: <ResearchPaperDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "register", element: <Register /> },

      // Redirects
      { path: "academy", element: <Navigate to="/" replace /> },
      { path: "academy/programmes", element: <Navigate to="/programmes" replace /> },
      { path: "academy/programmes/investment-banking", element: <Navigate to="/programmes/investment-banking" replace /> },
      { path: "academy/certifications", element: <Navigate to="/certifications" replace /> },
      { path: "academy/resources", element: <Navigate to="/resources" replace /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);