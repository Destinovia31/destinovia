"use client";

// Dependencies
import Image from "next/image";
import Link from "next/link";
import { Mouse, CircleCheck } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";

// Assets
import logo from "@/public/logo.svg";
import figma from "@/public/companies/figma.png";
import openai from "@/public/companies/openai.webp";
import shopify from "@/public/companies/shopify.svg";
import webflow from "@/public/companies/webflow.svg";
import trustpilot from "@/public/trustpilot.svg";
import trustpilot2 from "@/public/trustpilot-2.svg";
import logo2 from "@/public/logo-white.svg";
import twitter from "@/public/twitter.svg";
import youtube from "@/public/youtube.svg";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import CalendlyWidget from "./calendly";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const video = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main>
      <nav className="w-full flex justify-center items-center p-4">
        <div className="w-fit md:w-[896px] rounded-full border-[#e8e7e5] border flex justify-between items-center gap-12 md:gap-2 py-3 px-6 shadow-sm">
          <Image
            src={logo}
            alt="Logo"
            className="w-20 sm:w-28"
            priority={true}
          />
          <ul className="hidden md:flex justify-center items-center gap-6 text-[#023475] font-medium">
            <li>
              <Link
                href="#howitworks"
                className="transition-all ease-in-out duration-300 hover:text-[#655dff]"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#ourmission"
                className="transition-all ease-in-out duration-300 hover:text-[#655dff]"
              >
                Our Mission
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="transition-all ease-in-out duration-300 hover:text-[#655dff]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                className="transition-all ease-in-out duration-300 hover:text-[#655dff]"
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Link href="#call">
            <button className="w-full md:w-fit bg-[#131313] text-xs sm:text-base font-medium text-white py-2 px-4 rounded-full transition-all ease-in-out duration-300 hover:opacity-90">
              Let’s discuss your idea
            </button>
          </Link>
        </div>
      </nav>
      <header className="mt-6 sm:mt-12 w-full p-4 flex justify-center items-center flex-col gap-8">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="rounded-full border-[#e8e7e5] text-center border py-2 sm:py-1 px-6 sm:px-4 font-medium shadow-sm text-sm sm:text-base"
        >
          100% money-back guarantee if we don’t keep our promise
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="md:max-w-[768px] text-3xl sm:text-5xl sm:leading-[1.05] font-bold text-[#655dff] text-center italic"
        >
          We help you turn your startup idea{" "}
          <span className="text-[#023475] not-italic">
            into recurring income within 30 days
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="md:max-w-[768px] text-[#808080] text-center"
        >
          Busy schedule ? Stuck in a 9-to-5 preventing you from your working on
          your project ? All you need is an idea, no need for detailed designs
          or lengthy project documents. We'll cover all the details in the call.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="w-full flex flex-col justify-center items-center gap-2"
        >
          <Link href="#call">
            <button className="flex justify-center items-center gap-2 w-fit bg-[#655dff] text-xs sm:text-base font-medium text-white py-2 px-4 rounded-full transition-all ease-in-out duration-300 hover:opacity-90">
              Yes, turn my idea into income
              <Mouse size={20} />
            </button>
          </Link>
          <p className="text-xs text-[#023475]">
            No engagements – Introvert friendly
          </p>
        </motion.div>
        <motion.div
          className="w-full flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={video}
        >
          <iframe
            src="https://player.vimeo.com/video/IDHERE?autoplay=1&muted=1&preload=auto&badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-[96%] sm:w-[96%] lg:w-[60%] aspect-video rounded-md shadow-lg"
          ></iframe>
        </motion.div>
      </header>
      <section
        id="howitworks"
        className="p-4 w-full flex flex-col justify-center items-center mt-12 mb-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="flex flex-col justify-between items-center gap-2 md:max-w-[896px]"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#023475] mb-2">
            How It Works
          </h2>
          <p className="text-[#808080] text-center text-sm sm:text-base">
            We help you identify the core features of your app with a proactive
            approach that eliminates unnecessary complexity. This allows us to
            keep it simple and launch quickly.
          </p>
        </motion.div>
        <div className="md:max-w-[896px] hidden md:grid grid-cols-[1fr_auto_1fr] justify-center items-center gap-x-8 mt-12">
          <div className="w-full"></div>
          <ScrollableDiv className="rounded-t-full" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="flex justify-center items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                1
              </div>
              A free brainstorming session
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              A free 1-2 hour discovery call to see if we’re a good fit for you.
              If we are, we’ll discuss and brainstorm your idea with you to
              identify its core features and start working on it.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="flex justify-center items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                2
              </div>
              First Prototype
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              In one week, we’ll share the first design prototype of your app on
              Figma. You can review all the pages, features, and details, and
              we’ll make changes based on your feedback.
            </p>
          </motion.div>
          <ScrollableDiv />
          <div className="w-full"></div>
          <div className="w-full"></div>
          <ScrollableDiv />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="flex justify-center items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                3
              </div>
              MVP Development
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              3–4 weeks of app development, during which we will transform the
              prototype into a fully functional web application.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="flex justify-center items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                4
              </div>
              Marketing Launch
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              After deploying your web application, we’ll assist you with your
              first launch on major platforms like Product Hunt, Hacker News,
              and Reddit. This will help you acquire your first customers and
              start generating recurring income.
            </p>
          </motion.div>
          <ScrollableDiv />
          <div className="w-full"></div>
          <div className="w-full"></div>
          <ScrollableDiv className="rounded-b-full" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="flex justify-center items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                5
              </div>
              6 Months of support
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              We offer 6 months of support during which we’ll help you avoid
              common mistakes we've observed with previous customers.
            </p>
          </motion.div>
        </div>

        <div className="md:max-w-[896px] md:hidden grid grid-cols-[auto_1fr] justify-center items-center gap-x-8 mt-12">
          <ScrollableDiv className="rounded-t-full" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="flex justify-start items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                1
              </div>
              A free brainstorming session
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              A free 1-2 hour discovery call to see if we’re a good fit for you.
              If we are, we’ll discuss and brainstorm your idea with you to
              identify its core features and start working on it.
            </p>
          </motion.div>
          <ScrollableDiv />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="pt-8 flex justify-start items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                2
              </div>
              First Prototype
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              In one week, we’ll share the first design prototype of your app on
              Figma. You can review all the pages, features, and details, and
              we’ll make changes based on your feedback.
            </p>
          </motion.div>
          <ScrollableDiv />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="pt-8 flex justify-start items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                3
              </div>
              MVP Development
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              3–4 weeks of app development, during which we will transform the
              prototype into a fully functional web application.
            </p>
          </motion.div>
          <ScrollableDiv />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="pt-8 flex justify-start items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                4
              </div>
              Marketing Launch
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              After deploying your web application, we’ll assist you with your
              first launch on major platforms like Product Hunt, Hacker News,
              and Reddit. This will help you acquire your first customers and
              start generating recurring income.
            </p>
          </motion.div>
          <ScrollableDiv className="rounded-b-full" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            className="w-full"
          >
            <h3 className="pt-8 flex justify-start items-center gap-2 text-[#655dff] font-medium">
              <div className="bg-[#655dff] text-white w-8 h-8 rounded-full flex justify-center items-center font-medium">
                5
              </div>
              6 Months of support
            </h3>
            <br />
            <p className="text-white bg-[#655dff] py-4 px-8 rounded-lg text-xs sm:text-sm">
              We offer 6 months of support during which we’ll help you avoid
              common mistakes we've observed with previous customers.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="p-4 w-full flex flex-col justify-center items-center mt-12 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="bg-[#f9f9f9] border border-[#eaeaea] rounded-lg p-8 flex flex-col justify-between items-center gap-2 md:max-w-[896px]"
        >
          <div className="w-full flex justify-center items-center text-4xl">
            💎
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#023475]">
            With AI, New Opportunities Have Emerged Like Never Before
          </h2>
          <p className="md:max-w-[768px] text-[#808080] text-center">
            AI reduces development costs and time, but the window before
            everyone catches on is small. Be the first to build and market your
            solution to set yourself apart from the competition. Act now to
            bring your idea to life or keep waiting for the 'right' time.
          </p>
          <br />
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <Link href="#call">
              <button className="flex justify-center items-center gap-2 w-fit bg-[#655dff] text-xs sm:text-base font-medium text-white py-2 px-4 rounded-full transition-all ease-in-out duration-300 hover:opacity-90">
                Let's discuss your idea
              </button>
            </Link>
            <p className="text-xs text-[#023475]">
              No engagements – Introvert friendly
            </p>
          </div>
        </motion.div>
      </section>
      <section
        id="ourmission"
        className="p-4 w-full flex flex-col justify-center items-center mt-12 mb-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="flex flex-col justify-between items-center gap-2 md:max-w-[896px]"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#023475] mb-2">
            Our mission
          </h2>
          <p className="text-[#808080] text-center text-sm sm:text-base">
            We help dreamers who are stuck at the idea stage and haven’t yet
            developed a design or even a list of features to build an MVP in 30
            days. It’s incredible how many people get stuck at the idea stage
            simply because they don’t know where to start.
          </p>
          <p className="text-[#808080] text-center text-sm sm:text-base">
            Over the past 3 years, we've met countless individuals who’ve faced
            this challenge.
          </p>
          <p className="text-[#808080] text-center text-sm sm:text-base">
            That’s why we created Destinova, all you need is an idea and
            expertise in the niche where it fits. We’ll schedule brainstorming
            calls to fully understand your concept and help shape it into a
            product, exactly how you've been imagining it.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="mt-12 grid md:grid-cols-4 grid-cols-2 justify-between items-center gap-12 md:gap-16 md:max-w-[896px]"
        >
          <Image src={shopify} alt="Shopify" className="w-24 grayscale" />
          <Image src={webflow} alt="Webflow" className="w-24 grayscale" />
          <Image src={figma} alt="Figma" className="w-24 grayscale" />
          <Image src={openai} alt="OpenAI" className="w-24 grayscale" />
        </motion.div>
      </section>
      <section
        id="pricing"
        className="p-4 w-full flex flex-col justify-center items-center mt-12 mb-12"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="text-2xl sm:text-4xl font-bold text-center text-[#023475] md:max-w-[896px]"
        >
          The same impact as a traditional agency,{" "}
          <span className="text-[#655dff]">but $20,000 cheaper 👀</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="mt-12 flex flex-col justify-center items-left gap-8 border-[#e8e7e5] border shadow-lg bg-white px-4 py-8 rounded-lg w-full md:w-[320px]"
        >
          <span className="w-fit bg-[#655dff] py-1 px-4 rounded-lg text-white font-semibold">
            30 Days MVP
          </span>
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#023475]">
              $8950
            </h3>
            <p className="text-xs sm:text-sm mt-2 text-[#023475]">
              100% money-back guarantee
            </p>
          </div>
          <div className="w-full h-1 bg-[#023475] rounded-lg"></div>
          <ul className="flex flex-col justify-start items-start gap-4 font-medium text-xs sm:text-sm">
            {[
              "Free Discovery Call",
              "Figma Prototype",
              "Custom Frontend and Backend Development",
              "Database Design and Implementation",
              "User Authentication and Authorization",
              "Stripe Billing Integration",
              "Integration with 3rd-Party APIs",
              "Deployment",
              "Documentation",
              "Launching on Product Hunt, Reddit, and Hacker News",
              "Full Code Ownership",
              "Six Months of Support",
            ].map((item) => (
              <li
                key={item}
                className="w-full flex justify-start items-center gap-2"
              >
                <div className="shrink-0">
                  <CircleCheck color="#655dff" size={20} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <p className="w-full text-center sm:text-sm text-xs text-[#808080]">
            2 spots left until May 28
          </p>
        </motion.div>
      </section>
      <section
        id="reviews"
        className="w-full flex flex-col justify-center items-center mt-12 mb-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="p-4 flex flex-col justify-between items-center gap-2 md:max-w-[896px]"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#023475] mb-2">
            A win for you is a win for us,{" "}
            <span className="text-[#655dff]">it's that simple 🥳</span>
          </h2>
          <p className="text-[#808080] text-center text-sm sm:text-base">
            Our number one goal is to satisfy every customer
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="w-full flex overflow-x-auto snap-x snap-mandatory justify-start items-center gap-4 mt-6 p-2 scrollbar-hide"
        >
          <div
            className="flex animate-scroll gap-4"
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            <ProfileCard
              name="Martin"
              description="To be honest, I was scared to trust someone else with my vision. But this team exceeded my expectations. They were super transparent, patient, and flexible throughout. They turned my vague idea into a functioning app. Check out what they built for me."
            />
            <ProfileCard
              name="Bryan"
              description="I’ve worked with other developers before, but this was different. They really cared about my vision and didn’t stop until everything was perfect. Plus, their brainstorming sessions helped me refine my idea. I now have a product I’m proud to show to clients."
            />
            <ProfileCard
              name="Jordan"
              description="I couldn’t believe how quickly they delivered. I was worried about the cost at first, but seeing the quality of work and the results, it was worth every penny. My product launched in just 40 days. If you’re serious about your idea, this is the team to call!"
            />
            <ProfileCard
              name="Katie"
              description="Working with Madjid is an easy decision. He’s not just a hardworking developer but also a reliable partner who offers valuable advice and practical solutions. He’s saved me countless hours on technical tasks, allowing me to focus on growing my sales."
            />
            <ProfileCard
              name="Martin"
              description="To be honest, I was scared to trust someone else with my vision. But this team exceeded my expectations. They were super transparent, patient, and flexible throughout. They turned my vague idea into a functioning app. Check out what they built for me."
            />
            <ProfileCard
              name="Bryan"
              description="I’ve worked with other developers before, but this was different. They really cared about my vision and didn’t stop until everything was perfect. Plus, their brainstorming sessions helped me refine my idea. I now have a product I’m proud to show to clients."
            />
            <ProfileCard
              name="Jordan"
              description="I couldn’t believe how quickly they delivered. I was worried about the cost at first, but seeing the quality of work and the results, it was worth every penny. My product launched in just 40 days. If you’re serious about your idea, this is the team to call!"
            />
            <ProfileCard
              name="Katie"
              description="Working with Madjid is an easy decision. He’s not just a hardworking developer but also a reliable partner who offers valuable advice and practical solutions. He’s saved me countless hours on technical tasks, allowing me to focus on growing my sales."
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
        >
          <Image
            src={trustpilot2}
            alt="trustpilot"
            className="w-48 md:w-60 mt-12"
          />
        </motion.div>
      </section>

      <section
        id="call"
        className="p-4 w-full flex flex-col justify-center items-center mt-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="flex flex-col justify-between items-center gap-2 md:max-w-[896px]"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#023475] mb-2">
            Schedule a <span className="text-[#655dff]">brainstorming</span>{" "}
            call with us 📞
          </h2>
          <p className="text-[#808080] text-center text-sm sm:text-base">
            It's 100% free with no commitment. We're here to answer all your
            questions.
          </p>
        </motion.div>
        <br />
        <CalendlyWidget />
      </section>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
        className="relative w-full bg-[#655dff] p-12 flex justify-center items-center flex-col gap-6"
      >
        <div className="absolute bottom-4 bg-gradient-to-b from-[#ffffff] to-[#655dff] opacity-10 hidden md:inline-block text-transparent bg-clip-text text-8xl font-black z-0">
          DESTINOVIA
        </div>
        <Image src={logo2} alt="Destinova" className="w-44 md:w-48" />
        <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 z-10 text-sm">
          <li>
            <Link
              className="text-[#ffffff] transition-all ease-in-out duration-300 hover:text-white"
              href="/terms"
              target="_blank"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              className="text-[#ffffff] transition-all ease-in-out duration-300 hover:text-white"
              href="/privacy"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="text-[#ffffff] transition-all ease-in-out duration-300 hover:text-white"
              href="mailto:contact@destinovia.co"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=61572732383774"
              target="_blank"
            >
              <Image src={facebook} alt="Facebook" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/destinoviaco/"
              target="_blank"
            >
              <Image src={instagram} alt="Instagram" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/destinoviaco" target="_blank">
              <Image src={twitter} alt="Twitter" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@destinoviaco" target="_blank">
              <Image src={youtube} alt="Youtube" width={32} height={32} />
            </Link>
          </li>
        </ul>
        <p className="text-[#fffefc95] text-xs sm:text-sm z-10 text-center">
          Made with love in <span className="text-white">🇫🇷</span> -
          Destinovia.co © 2030 ( because we come from the future )
        </p>
        <div>
          <p className="text-[#fffefc95] text-xs sm:text-sm z-10 text-center">
            Wait, you scrolled all the way down here ?
          </p>
          <p className="text-[#fffefc95] text-xs sm:text-sm z-10 text-center">
            We’ve already said what needs to be said. What needs to be done now
            is for you to take action and book a free call with us.
          </p>
        </div>
      </motion.footer>
    </main>
  );
}

const ProfileCard = ({ name, description }) => {
  return (
    <div className="flex flex-col justify-center p-6 gap-6 items-start bg-[#f9f9f9] border border-[#d9d9d9] rounded-lg md:w-[512px] min-h-[364px] min-w-[256px]">
      <div className="flex justify-center items-center gap-[2px]">
        {["1", "2", "3", "4", "5"].map((item, idx) => (
          <Image
            key={idx}
            src={trustpilot}
            alt="Trustpilot"
            className="bg-[#00b67a] p-[2px]"
            width={20}
            height={20}
          />
        ))}
      </div>
      <p className="text-[#023475] font-semibold md:text-base text-sm">
        {`"${description}"`}
      </p>
      <div className="w-fit flex justify-center items-center gap-4">
        <div className="rounded-full bg-[#655dff] text-white w-12 h-12 flex justify-center items-center font-medium">
          {name.charAt(0)}
        </div>
        <p className="text-[#023475] font-semibold md:text-base text-sm">
          {name}
        </p>
      </div>
    </div>
  );
};

function ScrollableDiv({ className }) {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#655dff00", "#655dff50", "#655dff"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className={`w-1 h-full ${className}`}
    ></motion.div>
  );
}
