import React from 'react'; // React is needed for JSX
import asseenImage from "../assets/asseen.png"; // Renamed for clarity and valid variable name
import fatisVideo from "../assets/fatis.mp4";   // Corrected variable name, assuming it's in assets

function Home() {
  return (
    // Main section with the dark pink background color
    // py-12/16/20 adds vertical padding for spacing from header/footer
    <section className="bg-[#9C2750] py-12 md:py-16 lg:py-20">
      {/* Container to center content and control max-width */}
      {/* flex-col on small screens, flex-row on medium screens and up */}
      {/* items-center vertically aligns content in the middle */}
      {/* justify-center distributes content horizontally with space around it */}
      {/* gap adds space between flex items */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4">

        {/* Left Section: "As seen" image and descriptive text */}
        {/* flex-1 allows this div to grow and shrink */}
        {/* items-center for vertical centering on small screens, items-start for left alignment on md+ */}
        {/* text-center for text on small screens, text-left for text on md+ */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={asseenImage}
            alt="As seen on social media!"
            // max-w-full ensures it fits its container
            // Set max-width classes for responsiveness to control its size on different screens
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
          {/* You removed the "Sweet. Innovative. Delicious." text from here, based on your input. */}
          {/* If you want it back, re-add the <p> tag here. */}
        </div>

        {/* Right Section: Video */}
        {/* flex-1 allows this div to grow and shrink */}
        {/* w-full ensures it takes full width on small screens */}
        {/* justify-center and items-center to center the video within its flex item */}
        <div className="flex-1 w-full flex justify-center items-center">
          <video
            src={fatisVideo}
            controls // Shows video controls (play/pause, volume, etc.)
            autoPlay // Automatically starts playing the video
            loop     // Loops the video endlessly
            muted    // Mutes the video by default (often required for autoPlay in browsers)
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-xl"
            preload="auto" // Helps browser decide when to load video data
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div> {/* <-- This closing </div> was missing */}
    </section>
  );
}

export default Home;