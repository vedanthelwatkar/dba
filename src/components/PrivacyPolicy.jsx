import React, { useRef } from "react";

const PrivacyPolicy = () => {
  const sectionRefs = {
    tableOfContentRef: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
    section11: useRef(null),
    section12: useRef(null),
  };

  const scrollToSection = (ref) => {
    if (sectionRefs[ref]?.current) {
      const sectionTop = sectionRefs[ref].current.offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="lg:px-20 lg:py-10">
        <div className="bg-nyghtserif px-10 flex flex-col gap-4 justify-center items-center py-8 sm:py-[60px] md:px-20 lg:rounded-lg">
          <div className="max-w-[700px] flex flex-col gap-4 justify-center items-center ">
            <span className="text-body-lg text-neutral-50">
              Last Updated September 16, 2025{" "}
            </span>
            <h2 className="text-neutral-50 text-h2 font-nyghtserif font-bold text-center">
              We care about your privacy
            </h2>
            <span className="text-body-lg text-neutral-50 text-center">
              Your privacy is important to us at Designs By Abhishek. We respect
              your privacy regarding any information we may collect from you
              across our website.
            </span>
          </div>
        </div>
      </div>
      <div className="p-5 pb-10 md:p-10 md:pb-20 lg:p-20 lg:pt-5">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]">
            <p>
              This Privacy Notice for Designs By Abhishek ("we," "us," or
              "our"), describes how and why we might access, collect, store,
              use, and/or share ("process") your personal information when you
              use our services ("Services"), including when you:
            </p>
            <p>
              <li>
                Visit our website at{" "}
                <a
                  href="https://designsbyabhishek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nyghtserif"
                >
                  https://designsbyabhishek.com/
                </a>
                , or any website of ours that links to this Privacy Notice
              </li>
              <li>
                Contact us through our inquiry forms, email, or phone for
                wedding design consultations
              </li>
              <li>
                Engage with us in other related ways, including consultations,
                events planning, or wedding services
              </li>
            </p>
            <p>
              <span className="font-medium">Questions or concerns?</span>{" "}
              Reading this Privacy Notice will help you understand your privacy
              rights and choices. We are responsible for making decisions about
              how your personal information is processed. If you do not agree
              with our policies and practices, please do not use our Services.
              If you still have any questions or concerns, please contact us at
              designsbyabhishek@gmail.com
            </p>
            <span className="text-body-2xl font-semibold text-neutral-800">
              SUMMARY OF KEY POINTS
            </span>
            <p className="font-medium">
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("tableOfContentRef")}
              >
                table of contents{" "}
              </span>
              below to find the section you are looking for.
            </p>
            <p>
              <span className="font-medium">
                What personal information do we process?
              </span>{" "}
              When you visit our website or contact us for wedding design
              services, we may process personal information depending on how you
              interact with us, including contact forms, consultation requests,
              and project inquiries. Learn more about{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section1")}
              >
                personal information you disclose to us.
              </span>
            </p>
            <p>
              <span className="font-medium">
                {" "}
                Do we process any sensitive personal information?
              </span>{" "}
              We do not process sensitive personal information such as racial or
              ethnic origins, sexual orientation, or religious beliefs.
            </p>
            <p>
              <span className="font-medium">
                Do we collect any information from third parties?
              </span>{" "}
              We may collect limited information from social media platforms
              when you interact with our posts or contact us through social
              channels. Learn more about{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section1")}
              >
                information collected from other sources.
              </span>
            </p>
            <p>
              <span className="font-medium">
                How do we process your information?
              </span>{" "}
              We process your information to respond to inquiries, provide
              wedding design consultations, manage projects, communicate with
              you about our services, and improve our offerings. We process your
              information only when we have a valid legal reason to do so. Learn
              more about{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section2")}
              >
                how we process your information.
              </span>
            </p>
            <p>
              <span className="font-medium">
                {" "}
                In what situations and with which parties do we share personal
                information?{" "}
              </span>
              We may share information with trusted vendors and service
              providers who assist with wedding events, such as florists,
              caterers, or venue partners, and only when necessary to deliver
              our services. Learn more about{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section3")}
              >
                when and with whom we share your personal information.
              </span>
            </p>
            <p>
              <span className="font-medium">
                How do we keep your information safe?
              </span>{" "}
              We have implemented appropriate technical and organizational
              security measures to protect your personal information. However,
              no electronic transmission over the internet can be guaranteed to
              be 100% secure. Learn more about{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section6")}
              >
                how we keep your information safe.
              </span>
            </p>
            <p>
              <span className="font-medium">What are your rights?</span>{" "}
              Depending on where you are located geographically, the applicable
              privacy law may mean you have certain rights regarding your
              personal information. Learn more about{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section8")}
              >
                your privacy rights.
              </span>
            </p>
            <p>
              <span className="font-medium">
                How do you exercise your rights?
              </span>{" "}
              The easiest way to exercise your rights is by contacting us
              directly. We will consider and act upon any request in accordance
              with applicable data protection laws.
            </p>
            <p>
              Want to learn more about what we do with any information we
              collect?{" "}
              <span
                className="text-nyghtserif cursor-pointer"
                onClick={() => scrollToSection("section12")}
              >
                Review the Privacy Notice in full.
              </span>
            </p>
            <span
              className="text-body-2xl font-semibold text-neutral-800"
              ref={sectionRefs.tableOfContentRef}
            >
              TABLE OF CONTENTS
            </span>
            <ol className="list-decimal list-inside text-nyghtserif cursor-pointer">
              <li onClick={() => scrollToSection("section1")}>
                WHAT INFORMATION DO WE COLLECT?
              </li>
              <li onClick={() => scrollToSection("section2")}>
                HOW DO WE PROCESS YOUR INFORMATION?
              </li>
              <li onClick={() => scrollToSection("section3")}>
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </li>
              <li onClick={() => scrollToSection("section4")}>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </li>
              <li onClick={() => scrollToSection("section5")}>
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </li>
              <li onClick={() => scrollToSection("section6")}>
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </li>
              <li onClick={() => scrollToSection("section7")}>
                DO WE COLLECT INFORMATION FROM MINORS?
              </li>
              <li onClick={() => scrollToSection("section8")}>
                WHAT ARE YOUR PRIVACY RIGHTS?
              </li>
              <li onClick={() => scrollToSection("section9")}>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </li>
              <li onClick={() => scrollToSection("section10")}>
                DO WE MAKE UPDATES TO THIS NOTICE?
              </li>
              <li onClick={() => scrollToSection("section11")}>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </li>
              <li onClick={() => scrollToSection("section12")}>
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </li>
            </ol>
            <div
              ref={sectionRefs.section1}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                1. WHAT INFORMATION DO WE COLLECT?
              </span>
              <span className="text-body-xl font-semibold text-neutral-800">
                Personal information you disclose to us
              </span>
              <p>
                <span className="font-medium">In Short:</span> We collect
                personal information that you provide to us when you inquire
                about our wedding design services.
              </p>
              <p>
                We collect personal information that you voluntarily provide to
                us when you contact us through our website forms, email, phone
                calls, or during consultations for wedding design services,
                event planning, or when you express interest in our luxury
                wedding design offerings.
              </p>
              <p>
                <span className="font-medium">
                  Personal Information Provided by You.
                </span>{" "}
                The personal information that we collect depends on the context
                of your interactions with us and the services you inquire about.
                The personal information we collect may include the following:
              </p>
              <p>
                <li>Full names (bride, groom, and contact person)</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
                <li>Wedding date and venue information</li>
                <li>Budget range and service preferences</li>
                <li>Event details and specific requirements</li>
              </p>
              <p>
                <span className="font-medium">Sensitive Information.</span> We
                do not process sensitive information.
              </p>
              <p className="font-medium">
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
              <span className="text-body-2xl font-semibold text-neutral-800">
                Information collected from other sources
              </span>
              <p>
                <span className="font-medium">In Short:</span> We may collect
                limited data from social media platforms and referral sources.
              </p>
              <p>
                In order to enhance our ability to provide relevant wedding
                design services and connect with potential clients, we may
                obtain information from social media platforms when you interact
                with our content, referral partners, and industry contacts. This
                information may include social media profiles, interaction data,
                and referral information, for purposes of providing personalized
                wedding design consultations and maintaining client
                relationships.
              </p>
            </div>
            <div
              ref={sectionRefs.section2}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </span>
              <p>
                <span className="font-medium">In Short:</span> We process your
                information to provide wedding design consultations, manage
                projects, communicate with you about our services, and improve
                our offerings.
              </p>
              <p className="font-medium">
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              <li>
                <p>
                  <span className="font-medium">
                    To respond to inquiries and provide consultations.
                  </span>{" "}
                  We process your information to respond to your wedding design
                  inquiries, schedule consultations, and provide personalized
                  service recommendations.
                </p>

                <p>
                  <span className="font-medium">
                    To deliver wedding design and planning services.
                  </span>{" "}
                  We process your information to plan, coordinate, and execute
                  luxury wedding events and design services.
                </p>
                <p>
                  <span className="font-medium">
                    {" "}
                    To communicate about projects.{" "}
                  </span>
                  We process your information to keep you updated on project
                  progress, coordinate with vendors, and ensure successful event
                  execution.
                </p>
                <p>
                  <span className="font-medium">
                    To improve our services and client experience.
                  </span>{" "}
                  We may process your information to understand client
                  preferences, improve our design offerings, and enhance the
                  overall wedding planning experience.
                </p>
                <p>
                  <span className="font-medium">
                    To showcase our work (with permission).
                  </span>{" "}
                  We may process information and images from your events to
                  create portfolio content, but only with your explicit consent.
                </p>
              </li>
            </div>
            <div
              ref={sectionRefs.section3}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </span>
              <p>
                <span className="font-medium">In Short:</span> We may share
                information with trusted wedding vendors and service providers
                necessary to execute your event.
              </p>
              <p>
                We may need to share your personal information in the following
                situations:
              </p>
              <li>
                <span className="font-medium">
                  Wedding Vendors and Service Providers.
                </span>
                We may share relevant information with florists, caterers,
                photographers, venue coordinators, and other wedding
                professionals to ensure seamless event execution.
              </li>
              <li>
                <span className="font-medium">Legal Requirements.</span> We may
                share your information if required by law, legal process, or
                government request.
              </li>
              <li>
                <span className="font-medium">Business Transfers.</span> We may
                share or transfer your information in connection with any
                merger, sale of business assets, or acquisition.
              </li>
            </div>
            <div
              ref={sectionRefs.section4}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </span>
              <p>
                <span className="font-medium">In Short:</span> We may use
                cookies and similar tracking technologies to improve website
                functionality and analyze usage.
              </p>
              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to enhance your browsing experience,
                remember your preferences, and analyze website traffic. We may
                also use analytics tools like Google Analytics to understand how
                visitors interact with our website and improve our online
                presence.
              </p>
            </div>

            <div
              ref={sectionRefs.section5}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </span>
              <p>
                <span className="font-medium">In Short:</span> We keep your
                information for as long as necessary to provide services and
                fulfill legal obligations.
              </p>
              <p>
                We will keep your personal information for as long as necessary
                to provide wedding design services, maintain project records,
                and comply with legal requirements. For completed projects, we
                typically retain client information for up to 7 years for
                business and tax purposes.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, unless longer retention is required by law.
              </p>
            </div>

            <div
              ref={sectionRefs.section6}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                6. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </span>
              <p>
                <span className="font-medium">In Short:</span> We aim to protect
                your personal information through appropriate security measures.
              </p>
              <p>
                We have implemented reasonable technical and organizational
                security measures designed to protect your personal information.
                However, despite our safeguards, no electronic transmission over
                the Internet or information storage technology can be guaranteed
                to be 100% secure. We cannot promise that hackers or other
                unauthorized third parties will not be able to defeat our
                security measures. You should only share information with us
                through secure channels.
              </p>
            </div>

            <div
              ref={sectionRefs.section7}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                7. DO WE COLLECT INFORMATION FROM MINORS?
              </span>
              <p>
                <span className="font-medium">In Short:</span> We do not
                knowingly collect data from or market to children under 18 years
                of age.
              </p>
              <p>
                We do not knowingly solicit data from or market to children
                under 18 years of age. Our services are intended for adults
                planning weddings and events. If we learn that personal
                information from users less than 18 years of age has been
                collected, we will take reasonable measures to promptly delete
                such data. If you become aware of any data we may have collected
                from children under age 18, please contact us at
                designsbyabhishek@gmail.com.
              </p>
            </div>

            <div
              ref={sectionRefs.section8}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                8. WHAT ARE YOUR PRIVACY RIGHTS?
              </span>
              <p>
                <span className="font-medium">In Short:</span> You may review,
                change, or request deletion of your personal information at any
                time.
              </p>
              <p>
                <span className="font-medium">Withdrawing your consent:</span>{" "}
                If we are relying on your consent to process your personal
                information, you have the right to withdraw your consent at any
                time. You can withdraw your consent by contacting us using the
                details in the{" "}
                <span className="text-nyghtserif">
                  "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                </span>{" "}
                section below.
              </p>
              <p>
                However, please note that this will not affect the lawfulness of
                processing before withdrawal, and may impact our ability to
                provide ongoing services.
              </p>
              <span className="text-body-xl font-semibold text-neutral-800">
                Your Information Rights
              </span>
              <p>
                If you would like to review, change, or delete your personal
                information, you can:
              </p>
              <p>
                <li>
                  Contact us directly using the contact information provided.
                </li>
                <li>
                  Request access to the personal information we hold about you.
                </li>
                <li>Request correction of any inaccurate information.</li>
                <li>Request deletion of your personal information.</li>
              </p>
              <p>
                We will respond to your request within a reasonable timeframe
                and in accordance with applicable data protection laws.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you
                may email us at designsbyabhishek@gmail.com
              </p>
            </div>

            <div
              ref={sectionRefs.section9}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                9. CONTROLS FOR DO-NOT-TRACK FEATURES
              </span>
              <p>
                Most web browsers include a Do-Not-Track ("DNT") feature that
                signals your privacy preference. At this time, no uniform
                technology standard for recognizing and implementing DNT signals
                has been finalized. As such, we do not currently respond to DNT
                browser signals. If a standard for online tracking is adopted
                that we must follow, we will inform you about that practice in a
                revised version of this Privacy Notice.
              </p>
            </div>

            <div
              ref={sectionRefs.section10}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                10. DO WE MAKE UPDATES TO THIS NOTICE?
              </span>
              <p>
                <span className="font-medium">In Short:</span> Yes, we will
                update this notice as necessary to stay compliant with relevant
                laws and reflect changes in our practices.
              </p>
              <p>
                We may update this Privacy Notice from time to time. The updated
                version will be indicated by an updated "Last Updated" date at
                the top of this Privacy Notice. If we make material changes, we
                may notify you by prominently posting a notice or by directly
                contacting you. We encourage you to review this Privacy Notice
                periodically to stay informed about how we are protecting your
                information.
              </p>
            </div>

            <div
              ref={sectionRefs.section11}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </span>
              <p>
                If you have questions or comments about this notice, you may
                email us at designsbyabhishek@gmail.com or contact us by post
                at:
              </p>
              <p>
                Designs By Abhishek
                <br />
                Mumbai, Maharashtra
                <br />
                India
              </p>
            </div>
            <div
              ref={sectionRefs.section12}
              className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
            >
              <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </span>

              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, details about how we have processed it, correct
                inaccuracies, or delete your personal information. You may also
                have the right to withdraw your consent to our processing of
                your personal information. To request to review, update, or
                delete your personal information, please email us at
                designsbyabhishek@gmail.com and we will respond promptly to your
                request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
