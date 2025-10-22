import "@fontsource/poppins/400.css"; // regular
import "@fontsource/poppins/600.css"; // medium
import "@fontsource/poppins/700.css"; // bold

function Nerdathon() {
  return (
    <>
<div className="mt-7 w-11/12 mx-auto px-2 sm:px-0">
  <img src="nerdathonbanner.png" alt="nerdathonbanner" className="w-full h-auto rounded-lg" />
</div>



<div className="mt-7 flex space-x-8 text-1xl border-t-2 border-b-2 border-gray-300 py-2 font-['Poppins'] pl-7">
  <h1>About</h1>
  <h1>Timeline</h1>
  <h1>Rules</h1>
  <h1>FAQs</h1>
</div>

<div className="flex items-start justify-start gap-32 mt-6 font-['Poppins']">
  {/* Left: About Section */}
  <div className="w-5/12 ml-8 font-['Poppins'] mt-6">
    <h1 className="font-bold text-2xl mb-4">About</h1>
    <p className="text-base leading-relaxed">
      Qbitio Technologies is an emerging innovation-driven startup founded by a team of young engineers and technologists committed to bridging the gap between academic learning and real-world application. The company focuses on developing intelligent software solutions, educational technologies, and automation systems that empower students, institutions, and industries to adopt next-generation digital tools.

      <br /><br />

      Qbitio’s core areas include web development, artificial intelligence, robotics, and cloud-based platforms, with a strong emphasis on experiential learning and technical excellence. Through its projects, workshops, and collaborations, Qbitio Technologies aims to cultivate a culture of innovation, problem-solving, and continuous learning among the next generation of creators and developers.
    </p>
  </div>

  {/* Right: Event Card */}
  <div className="border-2 border-black p-6 rounded-lg w-96">
    <h1 className="text-2xl font-bold mb-4 text-left">Nerdathon 1.0</h1>

    <div className="flex items-center space-x-3">
      <img src="calendar-days-solid 1.png" alt="calendar" className="w-12 h-12" />
      <div className="text-left">
        <h3 className="text-sm font-medium uppercase text-gray-600">Last Date to Register</h3>
        <h1 className="text-lg font-bold">20th November 2025</h1>
      </div>
    </div>
  </div>
</div>

<div className="w-5/12 ml-8 font-['Poppins'] mt-6">
  <h1 className="font-bold text-2xl mb-4">Nerdathon 1.0</h1>
  <p className="text-base leading-relaxed">
    Nerdathon 1.0 is the flagship hackathon jointly organized by AuraLinks and Qbitio Technologies, designed to foster innovation through hands-on creation and collaboration. In this event, participants — particularly Qbitio Atom S3 users — will build creative and impactful projects using the ATOMS3 development board and the NerdEditor code environment.

    <br /><br />

    The hackathon aims to showcase the ingenuity of young developers and their ability to translate ideas into working prototypes. Top-performing teams and individuals demonstrating exceptional creativity, technical skill, and problem-solving will be recognized and rewarded.
  </p>
</div>












</>
  );
}

export default Nerdathon;
