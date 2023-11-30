
import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import SlideInOnScroll from "./SlideInOnScroll";


const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <div className={`bg-black`}>

        <SlideInOnScroll>
            <AboutUs />
        </SlideInOnScroll>
      <SlideInOnScroll>
        <Faq />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <TermsAndConditions />
      </SlideInOnScroll>
      </div>
      <SlideInOnScroll>
          <Footer />
      </SlideInOnScroll>
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-white mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-white">
              What is your return policy?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-white">
                If you're not satisfied with your purchase, we accept returns
                within 30 days of delivery. To initiate a return, please email
                us  with your order number and a
                brief explanation of why you're returning the item.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-white">
              How do I track my order?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-white">
                You can track your order by clicking the tracking link in your
                shipping confirmation email, or by logging into your account on
                our website and viewing the order details.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-white">
              How do I contact customer support?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-white">
                You can contact our customer support team by emailing us at
                support@myecommercestore.com, between the hours of 9am and 5pm EST, Monday through Friday.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-white">
              Can I change or cancel my order?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-white">
                Unfortunately, once an order has been placed, we are not able to
                make changes or cancellations. If you no longer want the items
                you've ordered, you can return them for a refund within 30 days
                of delivery.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-white">
              Do you offer international shipping?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-white">
                Currently, we only offer shipping within the Nigeria.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-white">
              What payment methods do you accept?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



const AboutUs = () => {
  return (
    <div className="bg-black py-8 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Sextoys.online is a subsidiary of date deals limited whose aim is to help people live happier and more satisfied with their sexual partners. We provide solutions and guidance needed in relationships regarding all aspects of their sex life's challenges. With our experienced and professional counselors, Date Deals offers accessible, convenient solutions for those seeking online therapy. Take an in-depth questionnaire to find the right therapist for you.
        </p>

        <h3 className="text-xl font-bold mb-2">Pros & Cons</h3>
        <div className="mb-6">
          <h4 className="font-bold mb-2">PROS</h4>
          <ul className="list-disc pl-6">
            <li>Your identity is highly protected by the website so it gives you the room to say it as it is without being known in case of the future.</li>
            <li>Message your therapist anytime.</li>
            <li>Therapists specialize in a wide range of relationship issues.</li>
            <li>24/7 messaging services</li>
            <li> Affordable compared to other providers</li>
            <li>Choose your own therapist and switch anytime you want</li>
            <li>Pay by talk time  rather than per session</li>
            <li>Accessible via website or the free app</li>
            <li>Methods of communication (text messaging & voice calls)</li>
            {/* Add other PROS here */}
          </ul>
        </div>

        {/* Add CONS section similar to PROS section */}

        <div className="mb-6">
          <h4 className="font-bold mb-2">CONS</h4>
          <ul className="list-disc pl-6">
            <li>Therapists can’t prescribe medication.</li>
            <li>Therapists can't diagnose illnesses</li>
            <li> face-to-face, exchange of contacts or real names by therapist is not allowed 🚫</li>
            <li>No live chat for assistance on the site</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Fill out questionnaire</h3>
          <p>Religion, Gender, Relationship status, What are you seeking help for? <a href="" style={{color: 'blue'}}>Questionnaire Form</a></p>
          {/* Add form elements for questionnaire here */}
        </div>

        <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">
                Option Available
            </h3>
            <p>Your sex life, differences with your spouse, divorce, adoption, infertility, infidelity, pregnancy, postpartum depression,others (allow a client to put in the reason)</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Initial consultation fee</h3>
          {/* Add initial consultation fee information */}
        </div>

        <div className="mb-6">
  <h3 className="text-xl font-bold mb-2">Types of Therapy</h3>
  <p className="mb-2">Choose the type of therapy that suits your needs:</p>
  <ul className="list-disc pl-6">
    <li>
      <strong className="font-bold">1. Individual</strong>
      <p>- Personalized therapy for self-growth</p>
      <p>- Support myself</p>
    </li>
    <li className="mt-4">
      <strong className="font-bold">2. Couples</strong>
      <p>- Strengthening bonds & resolving</p>
      <p>- Support us to grow our relationship</p>
    </li>
    <li className="mt-4">
      <strong className="font-bold">3. Teens</strong>
      <p>- Guidance for adolescent challenges</p>
      <p>- Supporting my child</p>
    </li>
    {/* You can add more types of therapy here */}
  </ul>
</div>

        <div className="mb-6">
          <p className="text-xl font-bold">Our Motto: We help you fulfill your sexual & dream relationship</p>
        </div>
      </div>
    </div>
  );
};

const TermsAndConditions = () => {
    return (
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Terms and Conditions</h2>
          <div className="prose">
            <h3>Introduction</h3>
            <p>
             - These terms and conditions outline the rules and regulations for the use of AllSexToys, located at www.allsextoys.online.
            </p>
  
            <h3> Intellectual Property Rights</h3>
            <p>
              - Other than the content you own, under these terms, AllSexToys and/or its licensors own all the intellectual property rights and materials contained in this Website.
            </p>
  
            <h3> Disclaimer</h3>
            <p>
              - To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to AllSexToys
            </p>
  
            {/* Add more sections such as Privacy Policy, Limitations, Governing Law, etc. */}
          </div>
        </div>
      </div>
    );
  };
  



export default FAQPage;
