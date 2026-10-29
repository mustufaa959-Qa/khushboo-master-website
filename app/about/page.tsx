import type { Metadata } from "next";
import Link from "next/link";
import { CHANNEL_URL } from "../data/products";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Khushboo Master: the verified facts about the fragrance YouTube channel — 922 subscribers, 14 videos, last upload September 2022.",
  openGraph: {
    title: "About Us | Khushboo Master",
    description:
      "Verified facts about the Khushboo Master fragrance YouTube channel.",
  },
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <h1>About Us</h1>
      <p>
        Khushboo Master is a YouTube channel about perfumes, fragrances,
        attars, perfume reviews and fragrance recommendations. This website
        is its catalogue: it lists the channel&apos;s published videos so
        visitors can find a video and watch it on YouTube.
      </p>

      <div className="about-facts">
        <div>
          <strong>922</strong>
          <span>Subscribers, as verified in YouTube Studio on 25 Oct 2026</span>
        </div>
        <div>
          <strong>14</strong>
          <span>Public videos in the catalogue</span>
        </div>
        <div>
          <strong>Sep 2022</strong>
          <span>Last upload (22 Sep 2022)</span>
        </div>
      </div>

      <h2>What this site does — and does not do yet</h2>
      <p>
        Each product page shows only verified facts about its video: its
        title, date, recorded view count, category taken from the title,
        and a link to watch it on YouTube. No prices, affiliate links,
        checkout, accounts or newsletter are implemented, because none of
        those have been supplied yet. See the README in the project
        repository for the full list.
      </p>
      <p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit the YouTube channel
        </a>{" "}
        <Link href="/shop" className="btn btn-ghost">
          Browse the catalogue
        </Link>
      </p>

      <h2>Spelling note</h2>
      <p>
        The website is named “Khushboo Master”, as the user named it. The
        verified YouTube channel is spelled “Kushboo Master”
        (@kushboomaster). The two spellings are kept distinct on purpose:
        the channel name has not been changed.
      </p>
    </div>
  );
}
