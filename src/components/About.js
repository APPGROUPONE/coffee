import React from "react";

export default function About() {
  return (
    <div className="pt-28 px-6 pb-20 bg-[#f9f4ef] min-h-screen fade-in">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl font-extrabold text-[#2B1B15] mb-4">
          Our Story
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          At <span className="font-semibold text-orange-700">Coffee Shop</span>, 
          we believe coffee is more than a drink — it's an experience, a ritual,  
          a moment of calm crafted with intention. From our artisanal brews to our  
          carefully curated menu, everything we create is driven by passion,  
          precision, and a love for great coffee.
        </p>

        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Coffee Shop"
          className="w-full rounded-xl shadow-lg mb-12"
        />

        <h2 className="text-3xl font-bold text-[#2B1B15] mb-4">
          What We Stand For
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            We source ethically grown beans from farmers around the world, selecting only  
            those who share our commitment to quality and sustainability. Every cup you  
            enjoy is the result of careful roasting, expert brewing, and a touch of artistry.
          </p>

          <p>
            Café 4080 is a space for everyone — students, creatives, professionals,  
            and friends. Whether you’re settling in for a long study session or grabbing  
            a quick drink on the go, our cozy atmosphere and delicious brews are here  
            to brighten your day.
          </p>

          <p>
            We take pride in creating a welcoming environment where every detail —  
            from the aroma of freshly ground beans to the warmth of our community —  
            contributes to the perfect coffee experience.
          </p>
        </div>
      </div>
    </div>
  );
}
