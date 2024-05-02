import Image from "next/image";
import Link from "next/link";

// bg-[#ff451c]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#ff451c]">
      <div className="text-center items-center flex flex-col gap-8">
        <div
          id="heading"
          className="flex flex-col justify-center items-center pt-4 gap-8 md:gap-16"
        >
          <div className="max-w-[50vw] md:max-w-[33vw]">
            <Image
              src="LOGO_MAC_AMPM.svg"
              width={1024}
              height={1024}
              alt="Monday Art Club & AMPM logo"
            />
          </div>
          <div>
            <Image
              src="GRAPHIC_COTF.svg"
              width={1024}
              height={1024}
              alt="Classics of The Future"
            />
          </div>
        </div>
        <div className="text-xl">
          AT KLIF
          <br />
          3–4 MAY 2024
          <br />
          GMBB
        </div>
        <div id="paragraph" className="flex flex-col gap-4 text-xs max-w-md">
          <p>
            &quot;Classics of the Future&quot; is the conceptual theme we intend
            to bring to KLIF. In this upcoming exhibition, artists will be
            challenged to produce an artifact inspired by their work found 1000
            years in the future.
          </p>
          <p>
            We will also feature a small booth showcasing the works of every
            artist exhibiting in our venue, including posters, sticker packs,
            and more!
          </p>
        </div>
        <div id="sponsors" className="flex flex-col items-center mt-4 gap-4">
          <span>SPONSORS</span>
          <Image
            src="LOGO_ZIPPO_EXCHANGEART.svg"
            width={1024}
            height={1024}
            alt="Zippo & Art Exchange logo"
            className="max-w-64 sm:max-w-72"
          />
        </div>
        <div id="printing" className="flex flex-col items-center mt-8 gap-4">
          <span>PRINTING PARTNER</span>
          <Image
            src="LOGO_FENESTRA.svg"
            width={1024}
            height={1024}
            alt="Fenestra Imaging logo"
            className="max-w-28 sm:max-w-36 mt-2"
          />
        </div>
        <div id="footer" className="w-full mt-16 p-10 flex gap-4 items-center">
          <div className="w-4/5 text-left text-xs md:text-sm">
            Monday Art Club is an artist collective based in Indonesia
            <br />
            Web3, Physical, and Beyond
          </div>
          <div
            id="socials"
            className="md:flex-row w-1/5 flex flex-col items-end justify-end gap-3"
          >
            <Link href="https://twitter.com/mondayartclub/" target="_blank">
              <Image
                src="/x.svg"
                width={256}
                height={256}
                alt="X"
                className="w-6"
              />
            </Link>{" "}
            <Link
              href="https://www.instagram.com/themondayartclub/"
              target="_blank"
            >
              <Image
                src="/ig.svg"
                width={256}
                height={256}
                alt="Instagram"
                className="w-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
