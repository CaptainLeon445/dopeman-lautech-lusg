import Carousel from "./Carousel";
import Reveal from "./Reveal";
import { C, serif, mono } from "../theme";
import campaign01 from "../assets/campaign/campaign-01.jpg";
import campaign02 from "../assets/campaign/campaign-02.jpg";
import campaign03 from "../assets/campaign/campaign-03.jpg";
import campaign04 from "../assets/campaign/campaign-04.jpg";
import campaign05 from "../assets/campaign/campaign-05.jpg";
import campaign06 from "../assets/campaign/campaign-06.jpg";
import campaign07 from "../assets/campaign/campaign-07.jpg";
import campaign08 from "../assets/campaign/campaign-08.jpg";
import campaign09 from "../assets/campaign/campaign-09.jpg";
import campaign10 from "../assets/campaign/campaign-10.jpg";
import campaign11 from "../assets/campaign/campaign-11.jpg";
import campaign12 from "../assets/campaign/campaign-12.jpg";

const CAMPAIGN_PICTURES = [
  { src: campaign01, alt: "DOPEMAN and Team STARS on the campaign trail at LAUTECH" },
  { src: campaign02, alt: "DOPEMAN walking with the campaign team on campus" },
  { src: campaign03, alt: "Team STARS volunteers in DOPEMAN branded t-shirts during a campus clean-up" },
  { src: campaign04, alt: "Team STARS holding \"Support the New Dawn 26\" and \"Vote Famakin\" campaign banners" },
  { src: campaign05, alt: "Team STARS volunteers cleaning up around the Students' Union Government building at LAUTECH" },
  { src: campaign06, alt: "Team STARS candidates on stage at a campaign event" },
  { src: campaign07, alt: "Close-up of DOPEMAN and campaign team members on the campaign trail" },
  { src: campaign08, alt: "Team STARS volunteers doing a clean-up exercise at the SUG building" },
  { src: campaign09, alt: "Team STARS distributing New Dawn flyers to students on campus" },
  { src: campaign10, alt: "Portrait of DOPEMAN with campaign team members outdoors" },
  { src: campaign11, alt: "Team STARS members backstage at a campaign event" },
  { src: campaign12, alt: "Team STARS volunteers during a park clean-up exercise" },
];

export default function CampaignGallery() {
  return (
    <section className="px-6 py-20 md:py-24" style={{ borderTop: `1px solid ${C.lineSoft}` }}>
      <div className="max-w-3xl mx-auto">
        <Reveal className="mb-10">
          <span className="uppercase text-xs" style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}>
            On the trail
          </span>
          <h2 className="text-3xl md:text-4xl mt-4" style={{ fontFamily: serif, fontWeight: 600 }}>
            Campaign pictures.
          </h2>
        </Reveal>

        <Reveal>
          <Carousel items={CAMPAIGN_PICTURES} aspect="4 / 3" autoPlayMs={4000} />
        </Reveal>
      </div>
    </section>
  );
}
