"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] text-[#e6d6fa]">
        <div className="container">
          <SectionTitle
            title="Building a Web3 or AI product? Need a trusted tech partner to bring your vision to life?"
            videoparagraph="We’re here to make it happen — with cutting-edge skills, startup speed, and enterprise-level quality.

At W3X, we don’t just deliver code.
At Aictum, we don’t just deliver code.
We co-create future-ready products with you — with a sharp focus on innovation, security, and real-world impact.

Whether you're a founder launching a groundbreaking idea, or an agency looking to outsource projects without the overhead — we are your reliable technology partner."
            center
            mb="80px"
            // If SectionTitle supports a color prop, you can add:
            // color="#e6d6fa"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-xl shadow-lg border border-[#5C3D91]">
                <div className="relative aspect-video items-center justify-center bg-[#1A1325]">
                  <Image
                    src="/images/video/image.png"
                    alt="video image"
                    className="object-cover opacity-80"
                    fill
                  />
                  <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="text-[#e6d6fa] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#9345E0] hover:bg-[#a95fff] transition duration-300 shadow-lg"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Shape (Optional Light Overlay) */}
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-[#0C0C11] to-transparent opacity-10" />
        </div>
      </section>

      {/* <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      /> */}
    </>
  );
}
