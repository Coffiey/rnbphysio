import React from "react";
import Image from "next/image";
import "../globals.css";

const TeliHeath = () => {
  return (
    <div
      id="services"
      className="relative z-0 w-full bg-[url(/images/pexels-vlada-karpovich-5357327.jpg)] bg-cover bg-center flex flex-col py-[120px] items-center min-h-screen "
    >
      <div className="absolute w-[100%] h-[100%] bg-[rgba(255,120,96,0.7)] z-20 top-0"></div>
      <div className="relative z-30">
        <h1 className="text-7xl text-[#036574] font-bold">Services</h1>
      </div>
      <div className="relative z-30 flex flex-col justify-around">
        <div className="flex justify-around items-center">
          <div className="relative w-[600px] h-[600px] m-10 mt-20 overflow-hidden rounded-3xl">
            <Image
              src="/images/pexels-ivan-samkov-4240602.jpg"
              alt="adding cast to leg"
              fill // this makes the image fill its parent container
              className="object-cover object-bottom rounded-3xl"
              unoptimized
            />
          </div>
          <div className="max-w-[50%] flex flex-col items-center gap-3">
            <h1 className="text-5xl text-[#036574]">Telehealth</h1>
            <p>Video calls using Google meet</p>
            <p className="max-w-[90%] text-2xl text-center">
              Using telehealth you will join Raewyn on a video call from the
              comfort of your own home. You can explain your situation and
              Raewyn will ask questions about your symptoms, current management
              and your health journey so far. She will then be able to give you
              strategies to help manage symptoms, education about what is
              happening in your body, and different ways to move or activities
              to engage in (even if that activity is rest or sleeping). Raewyn
              uses a holistic approach that includes our physical well being but
              also takes into account our roles within family and society, our
              passions and things that are important to us that enhance our
              quality of life. This is unique for each individual, and input
              from Raewyn will look different for each person. There are many
              ways to learn different movements via telehealth, if Raewyn needs
              to teach you something she can demonstrate it over the video, and
              then send follow up pictures with descriptions or videos for your
              reference. You can also be guided to set up your video screen so
              that Raewyn can see you perform any movements, allowing her to
              give specific feedback directly to you. (description of what to
              expect with telehealth + home visits) - quantity
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center max-w-[50%] gap-2">
            <h1 className="text-5xl text-[#036574]">Home visits</h1>
            <h2 className="m-5 text-xl">
              Within the Manawatu / Whanganui / Horowhenua (additional travel
              costs)
            </h2>
            <p className="w-[95%] text-center text-2xl">
              Home visits will have Raewyn coming to your home to see you in
              person. All of the talking and asking questions and education will
              be the same as via telehealth, but these visits are helpful if
              there are symptoms that need to be assessed in person. Such as
              weakness or balance. Or if parts of your home environment need to
              be assessed, like your bathroom set up, or if you have trouble
              going up and down stairs. This allows Raewyn to complete physical
              assessments on you that will give her more information to allow
              her to treat your specific symptoms. This is particularly the case
              if you will need her assistance to practice a movement, such as
              learning to transfer or to walk by yourself. When starting out,
              you may need her help to do these tasks safely before you can do
              them with the help of a support worker, or by yourself.{" "}
            </p>
          </div>
          <div className="m-10 overflow-hidden mt-20">
            <Image
              src="/images/istockphoto-talking.jpg"
              width={795}
              height={530}
              alt="adding cast to leg"
              className="rounded-3xl"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeliHeath;
