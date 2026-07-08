import Carousel from "./Carousel";
import Reveal from "./Reveal";
import { C, serif, mono } from "../theme";
import gallery01 from "../assets/gallery/gallery-01.jpg";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";
import gallery05 from "../assets/gallery/gallery-05.jpg";
import gallery06 from "../assets/gallery/gallery-06.jpg";
import gallery07 from "../assets/gallery/gallery-07.jpg";
import gallery08 from "../assets/gallery/gallery-08.jpg";

const GALLERY = [
  { src: gallery01, alt: "Team LAUTECH holding the university banner at the NUGA games" },
  { src: gallery02, alt: "Team LAUTECH athletes in yellow jerseys with the university banner" },
  { src: gallery03, alt: "Team LAUTECH contingent gathered at the games venue" },
  { src: gallery04, alt: "Team LAUTECH athletes in yellow jerseys on the track" },
  { src: gallery05, alt: "Relay team with coach on the track at the NUGA games" },
  { src: gallery06, alt: "Team LAUTECH contingent with the university banner and sign" },
  { src: gallery07, alt: "Team LAUTECH athletes at the games stadium" },
  { src: gallery08, alt: "Team LAUTECH contingent posing at the stadium stands" },
];

export default function PhotoSpeaks() {
  return (
    <section className="px-6 py-20 md:py-24" style={{ borderTop: `1px solid ${C.lineSoft}` }}>
      <div className="max-w-3xl mx-auto">
        <Reveal className="mb-10">
          <span className="uppercase text-xs" style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}>
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl mt-4" style={{ fontFamily: serif, fontWeight: 600 }}>
            Photo speaks.
          </h2>
        </Reveal>

        <Reveal>
          <Carousel items={GALLERY} aspect="4 / 3" autoPlayMs={4500} />
        </Reveal>
      </div>
    </section>
  );
}
