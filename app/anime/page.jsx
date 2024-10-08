import React from "react";
import { motion } from "framer-motion";
import Card from "./Components/Card";

export default function page() {
  const features = [
    "His features were chiseled and masculine, with a strong jawline and piercing gaze.",
    "He had an uncanny ability to read people’s thoughts. It was as if he could see right through you.",
    "Despite his intimidating appearance, there was a softness in his eyes that hinted at a kinder side.",
    "The restaurant's features included a cozy fireplace and a menu full of comfort food.",
    "Despite his intimidating appearance, he had a kind heart and always went out of his way to make sure everyone felt welcome.",
  ];
  return (
    <div>
      <main className="mx-auto h-full w-full max-w-6xl">
        <div className="flex w-full items-start  gap-20">
          <div className="left  w-full py-[50vh]">
            <ul>
              {features.map((feature, index) => {
                return (
                  <li key={index}>
                    <p className="text-gray-300 py-16 text-3xl my-20 font-bold">
                      {feature}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100">
              {features.map((title) => {
                return <Card title={title.substring(10)} />;
              })}
            </div>
          </div>
          <div  className="h-[200vh]">
                more
          </div>
        </div>
      </main>
    </div>
  );
}
