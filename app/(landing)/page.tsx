import { LandingHero } from "@/components/landing-hero";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";

const landingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    );
}

export default landingPage;