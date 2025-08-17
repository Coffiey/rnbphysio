import React from "react";
import Image from "next/image";

//   return (
//     <div id="pricing"  className="relative z-0">
//       <h1>Pricing:</h1>
//       <p>Initial 1hr assessment: $180 (incl.)</p>
//       <p>Follow up 1hr sessions: $127 (incl.)</p>
//       <p>
//         Home visits: Above rates plus IRD prescribed mileage rate ($1.17 per km)
//         unless the home visit is within the radius of 10km where the mileage fee
//         will be waived. Base: Roslyn, Palmerston North. x
//       </p>
//     </div>
//   );
// };

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="relative z-0 w-full bg-[url(/images/pexels-panditwiguna-1128317.jpg)] bg-cover bg-center flex flex-col py-[120px] items-center h-screen"
    >
      <div className="absolute w-[100%] h-[100%] bg-[rgba(255,120,96,0.7)] z-20 top-0"></div>
      <div className="flex relative z-30">
        <div className="flex flex-col items-center w-[50%] mt-20">
          <h1 className="font-bold text-5xl text-[#036574]">Pricing</h1>
          <div
            id="pricing"
            className="relative z-0 flex flex-col items-center gap-10 mt-10"
          >
            {/* Initial & Follow-up Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Initial & Follow-up Sessions
              </h2>
              <p className="mb-2">
                Initial 1hr assessment:{" "}
                <span className="font-semibold">$180 (incl.)</span>
              </p>
              <p>
                Follow up 1hr sessions:{" "}
                <span className="font-semibold">$127 (incl.)</span>
              </p>
            </div>

            {/* Travel Costs Section */}
            <div className="text-center max-w-xl">
              <h2 className="text-2xl font-bold mb-4">Travel Costs</h2>
              <p>
                Home visits are charged at the above rates plus the IRD mileage
                rate (<span className="font-semibold">$1.17 per km</span>),
                unless within 10km of Roslyn, Palmerston North, where the
                mileage fee is waived.
              </p>
            </div>
          </div>
        </div>
        <div className="m-10 overflow-hidden mt-20">
          <Image
            src="images/pexels-thisisengineering.jpg"
            width={795}
            height={530}
            alt="adding cast to leg"
            className="rounded-3xl"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
