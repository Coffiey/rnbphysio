import React from "react";
import Image from "next/image";
import Overlay from "./Overlay";

const About = () => {
  return (
    <div
      id="aboutUs"
      className="relative z-0 w-full bg-[url(/images/istockphoto-talking.jpg)] bg-cover bg-center flex flex-col py-5 md:py-[120px] items-center min-h-screen"
    >
      <Overlay />
      <div className="flex flex-col md:flex-row relative z-30">
        <div className="flex flex-col items-center md:justify-center md:w-[60%] mt-5 md:mt-20">
          <h1 className="font-bold text-3xl md:text-5xl text-[#ff7860]">
            About Us
          </h1>
          <p className="px-15 text-xl w-full md:text-2xl md:max-w-[95%] text-center text-white">
            We provide our services with a compassionate, client centred
            approach, utilising telehealth and home visits to be accessible for
            all.
          </p>
          <h3 className="hidden md:block mt-10 text-[#ff7860] font-bold text-xl max-w-[70%] text-center ">
            Long COVID, ME and other complex disabilities:
          </h3>
          <p className="hidden md:block text-lg max-w-[70%] text-center text-white">
            Physiotherapy for these conditions focuses on symptom management,
            functional improvement, and energy conservation rather than
            traditional exercise rehabilitation. A critical component of care is
            the management of Post-Exertional Malaise (PEM), where physical or
            mental exertion causes a severe, delayed worsening of symptoms. We
            provide detailed assessment and tailored advice to help maximise
            your quality of life within the limitations of your symptoms.
          </p>
          <h3 className="hidden md:block mt-10 text-[#ff7860] font-bold text-xl max-w-[70%] text-center ">
            Neurological Rehabilitation:
          </h3>
          <p className="hidden md:block text-lg max-w-[70%] text-center text-white">
            Neurological physiotherapy is a specialized rehabilitation field
            targeting disorders arising from brain, spinal cord, or nerve
            damage. This includes but is not limited to stroke, MS, Parkinson's,
            neuro-muscular conditions and Functional Neurological Disorder. It
            utilizes neuroplasticity (the brain's ability to reorganize) to
            improve mobility, strength, balance, and coordination. Treatment is
            focusing on enhancing functional independence and quality of life.
          </p>

          <h3 className="hidden md:block mt-10 text-[#ff7860] font-bold text-xl max-w-[70%] text-center">
            Vestibular Therapy:
          </h3>
          <p className="hidden md:block text-lg max-w-[70%] text-center text-white">
            This is a specialized, exercise-based, and evidence-supported
            program designed to reduce vertigo, dizziness, gaze instability, and
            imbalance caused by inner ear or central nervous system dysfunction.
            Treatment can consist of repositioning manoeuvres, gaze
            stabilization exercises, habituation exercises and balance and gait
            retraining. This therapy is not suitable for telehealth, and so is
            only available for those living in the Manawatu.
          </p>
          <p className="hidden md:block m-10 text-2xl max-w-[70%] text-center text-white">
            Our ultimate goal is to support your journey to improved mobility,
            daily functioning and independence through personalised treatment
            plans, evidence-based practices, and a commitment to your long-term
            well-being.
          </p>
        </div>
        <div className="overflow-hidden md:mx-10 p-6 md:p-0 md:mt-20 w-full md:w-[45%] justify-center flex">
          <Image
            src="images/about-us.jpg"
            width={800}
            height={800}
            alt="adding cast to leg"
            className="rounded-3xl my-auto"
            unoptimized
          />
        </div>
        <div className="md:hidden flex flex-col items-center" >
          <h3 className="md:block mt-10 text-[#ff7860] font-bold text-lg max-w-[70%] text-center">
            Long COVID, ME and other complex disabilities:
          </h3>
          <p className="md:block text-sm max-w-[70%] text-center text-white">
            Physiotherapy for these conditions focuses on symptom management,
            functional improvement, and energy conservation rather than
            traditional exercise rehabilitation. A critical component of care is
            the management of Post-Exertional Malaise (PEM), where physical or
            mental exertion causes a severe, delayed worsening of symptoms. We
            provide detailed assessment and tailored advice to help maximise
            your quality of life within the limitations of your symptoms.
          </p>
          <h3 className="md:hidden mt-10 text-[#ff7860] font-bold text-lg max-w-[70%] text-center ">
            Neurological Rehabilitation:
          </h3>
          <p className="md:hidden text-sm max-w-[70%] text-center text-white">
            Neurological physiotherapy is a specialized rehabilitation field
            targeting disorders arising from brain, spinal cord, or nerve
            damage. This includes but is not limited to stroke, MS, Parkinson's,
            neuro-muscular conditions and Functional Neurological Disorder. It
            utilizes neuroplasticity (the brain's ability to reorganize) to
            improve mobility, strength, balance, and coordination. Treatment is
            focusing on enhancing functional independence and quality of life.
          </p>

          <h3 className="md:hidden mt-10 text-[#ff7860] font-bold text-lg max-w-[70%] text-center">
            Vestibular Therapy:
          </h3>
          <p className="md:hidden text-sm max-w-[70%] text-center text-white">
            This is a specialized, exercise-based, and evidence-supported
            program designed to reduce vertigo, dizziness, gaze instability, and
            imbalance caused by inner ear or central nervous system dysfunction.
            Treatment can consist of repositioning manoeuvres, gaze
            stabilization exercises, habituation exercises and balance and gait
            retraining. This therapy is not suitable for telehealth, and so is
            only available for those living in the Manawatu.
          </p>
          <p className="md:hidden m-10 text-xl max-w-[70%] text-center text-white">
            Our ultimate goal is to support your journey to improved mobility,
            daily functioning and independence through personalised treatment
            plans, evidence-based practices, and a commitment to your long-term
            well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
