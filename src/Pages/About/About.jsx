import React from "react";
import { CgNotifications } from "react-icons/cg";
import { FaSchool } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import {
  MdTravelExplore,
  MdVerifiedUser,
  MdVolunteerActivism,
} from "react-icons/md";

const About = () => {
  return (
    <div className="bg-background-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat 
                    bg-[linear-gradient(rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.65)_100%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyjNO75S2Xmp4P8RD2_roK67mRypUxPy98rTP2mS8ivkpLCG4Vzt8eYRHZFuu56XF4R6eSxx4S_coGKbdN4nk3t7jQPLQSvbQ1_N-8M6XdP-zFBwooNwHeRGRaFM9zY8OnVa9ZEo5-hGR5GUKesX26PGOii6_q7Ose28JS8xCkEBE8iwwIIedr1p7x4mVzJEgy8byEeC2T2FwmEhWcXaOgXGIdtisej0XdB-c7sHg8KKe0pfp9-hvNcrdl78xWoO8je4gAcjQzY2Q')]"
        ></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Connecting Lifesavers, One Donation at a Time
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Welcome to BloodLink, where technology and compassion meet to save
            lives. We are dedicated to creating a seamless, supportive, and
            efficient network for blood donors, volunteers, and those in urgent
            need.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBF05rjmoNUXqDqMHLKcbhFsQ-68pszuDtmnqUFLxpe0lbflzQmbHtASDZVaj6-CpemB7HKFoOfNgF6w3VI5A632qli2Ra86odg_7mId5QD9L3s861SMirUecgTolG0cqU-KvsiVT_CzQiBVhAQlcr2FfOlv4YxR1yuiDLdiccnytApfgR_EPckJEXO9luupFYsBIYgL9IRvCotrF7Wqy8DIfEA_4QNupABSds3nWdGkpkA5mGhYGXAuqV6yaKn2i_N82IE375Kug"
                alt="Healthcare professional handling blood bag"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our Mission
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Our mission is to save lives by revolutionizing the blood
                donation process. We leverage digital innovation to make
                donating and receiving blood more accessible, efficient, and
                reliable for everyone. Every drop counts and every person has a
                chance to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How We Make a Difference
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              We have built a platform with powerful features designed to
              connect donors and recipients quickly and safely, creating a
              lifeline in critical moments.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GrGroup size={28} />,
                title: "Donor-Recipient Matching",
                desc: "Intelligently connecting compatible donors with recipients in need based on blood type and location.",
              },
              {
                icon: <CgNotifications size={28} />,
                title: "Real-Time Requests",
                desc: "Instantly broadcast urgent blood requests to nearby, available donors via push notifications.",
              },
              {
                icon: <MdVerifiedUser size={28} />,
                title: "Verified Donors",
                desc: "Ensuring the safety and reliability of our network with a thorough donor verification process.",
              },
              {
                icon: <MdTravelExplore size={28} />,
                title: "Location-Based Search",
                desc: "Find donors or donation centers in your vicinity with our powerful, map-based search functionality.",
              },
              {
                icon: <FaSchool size={28} />,
                title: "Awareness & Education",
                desc: "Providing vital information and resources to promote the importance and safety of blood donation.",
              },
              {
                icon: <MdVolunteerActivism size={28} />,
                title: "Community Building",
                desc: "Fostering a community of lifesavers through events, stories, and shared purpose.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl bg-gray-800 p-6 shadow-md border border-gray-700"
              >
                <div className="text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Why We Built This Platform
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Finding a matching blood donor in an emergency is stressful and
            inefficient. BloodLink replaces uncertainty with reliability,
            connecting those in need with volunteer donors in real-time.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-2xl bg-primary/20 dark:bg-primary/10 px-6 py-20 text-center shadow-lg sm:px-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Commitment to You
            </h2>
            <p className="mt-6 text-gray-200 leading-relaxed">
              Your trust is our foundation. We uphold the highest standards of
              privacy, safety, and transparency. Every connection is handled
              with care, ensuring a safe environment for donors and recipients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Be a Part of the Mission
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Your decision to donate can bring hope and a second chance at life
            to someone in need. Join our growing community of lifesavers today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="min-w-21 max-w-120 h-12 px-5 bg-primary text-white font-bold rounded-lg hover:bg-opacity-80 transition">
              Become a Donor
            </button>
            <button className="min-w-21 max-w-120 h-12 px-5 bg-gray-700 text-white font-bold rounded-lg hover:bg-opacity-80 transition">
              Support Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
