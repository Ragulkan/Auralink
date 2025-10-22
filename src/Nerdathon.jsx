import "@fontsource/poppins/400.css"; // regular
import "@fontsource/poppins/600.css"; // medium
import "@fontsource/poppins/700.css"; // bold

function Nerdathon() {
  return (
    <>
      {/* Banner */}
      <div className="mt-7 w-11/12 mx-auto px-2 sm:px-0">
        <img
          src="nerdathonbanner.png"
          alt="nerdathonbanner"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Nav Tabs */}
      <div className="mt-7 flex flex-wrap justify-center sm:justify-start space-x-6 sm:space-x-8 text-base sm:text-lg border-t-2 border-b-2 border-gray-300 py-2 font-['Poppins'] px-4 sm:pl-7">
        <h1>About</h1>
        <h1>Timeline</h1>
        <h1>Rules</h1>
        <h1>FAQs</h1>
      </div>

      {/* About + Event Card Section */}
      <div className="flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-32 mt-6 font-['Poppins'] px-4 sm:px-8">
        {/* Left: About Section */}
        <div className="w-full lg:w-5/12 mt-6">
          <h1 className="font-bold text-2xl mb-4">About</h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Qbitio Technologies is an emerging innovation-driven startup founded by a team of young engineers and technologists committed to bridging the gap between academic learning and real-world application. The company focuses on developing intelligent software solutions, educational technologies, and automation systems that empower students, institutions, and industries to adopt next-generation digital tools.
            <br />
            <br />
            Qbitio’s core areas include web development, artificial intelligence, robotics, and cloud-based platforms, with a strong emphasis on experiential learning and technical excellence. Through its projects, workshops, and collaborations, Qbitio Technologies aims to cultivate a culture of innovation, problem-solving, and continuous learning among the next generation of creators and developers.
          </p>
        </div>

        {/* Right: Event Card */}
        <div className="border-2 border-black p-6 rounded-lg w-full sm:w-96">
          <h1 className="text-2xl font-bold mb-4 text-left">Nerdathon 1.0</h1>
          <div className="flex items-center space-x-3">
            <img src="calendar-days-solid 1.png" alt="calendar" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="text-left">
              <h3 className="text-xs sm:text-sm font-medium uppercase text-gray-600">Last Date to Register</h3>
              <h1 className="text-base sm:text-lg font-bold">20th November 2025</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Event Description */}
      <div className="w-full lg:w-5/12 px-4 sm:px-8 mt-10 font-['Poppins']">
        <h1 className="font-bold text-2xl mb-4">Nerdathon 1.0</h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Nerdathon 1.0 is the flagship hackathon jointly organized by AuraLinks and Qbitio Technologies, designed to foster innovation through hands-on creation and collaboration. In this event, participants — particularly Qbitio Atom S3 users — will build creative and impactful projects using the ATOMS3 development board and the NerdEditor code environment.
          <br />
          <br />
          The hackathon aims to showcase the ingenuity of young developers and their ability to translate ideas into working prototypes. Top-performing teams and individuals demonstrating exceptional creativity, technical skill, and problem-solving will be recognized and rewarded.
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full lg:w-5/12 px-4 sm:px-8 mt-10 font-['Poppins']">
        <h1 className="font-bold text-2xl mb-4">Timeline</h1>
        <div className="w-full">
          <div className="bg-[#D2E7FF] h-12 mb-2 rounded-sm flex items-center justify-center text-center text-sm sm:text-base">
            <h1>25 Oct 2025 | Registration window opens</h1>
          </div>
          <div className="bg-[#FFD2D2] h-12 mb-2 rounded-sm flex items-center justify-center text-center text-sm sm:text-base">
            <h1>28 Nov 2025 | Registration and Submission closes</h1>
          </div>
          <div className="bg-[#EEFF9C] h-12 rounded-sm flex items-center justify-center text-center text-sm sm:text-base">
            <h1>29 Nov 2025 | Prize Distribution Ceremony and Presentation</h1>
          </div>
        </div>
      </div>

      {/* Rules and Regulations */}
      <div className="w-full lg:w-5/12 px-4 sm:px-8 mt-10 font-['Poppins']">
        <h1 className="font-bold text-2xl mb-4">Rules and Regulations</h1>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Participants of <span className="font-semibold">Nerdathon 1.0</span> are requested to develop a unique and innovative project using the <span className="font-semibold">Atom S3</span> development board by Qbitio Technologies and the <span className="font-semibold">NerdEditor</span> code environment. During the build phase, the team leader (or the member most active on Instagram) must post daily project progress updates as Instagram Stories, tagging <span className="font-semibold">@qbitio.labs</span> and <span className="font-semibold">@auralinks.in</span> with the caption “Day N – #Nerdathon”, and ensure that all teammates repost the story.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Upon completing the project, teams must submit:
        </p>

        <ul className="list-decimal list-inside space-y-2 mb-4 text-base sm:text-lg">
          <li>
            A PowerPoint presentation (PPT) showcasing the project’s concept, design, implementation, and outcome. There is no fixed template — participants are encouraged to use their own creativity. However, the logos of Qbitio Technologies and AuraLinks must be placed prominently at the top corners of every slide.
          </li>
          <li>
            A video presentation clearly demonstrating the project’s functionality, innovation, and potential impact.
          </li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Projects will be evaluated based on the following criteria:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg">
          <li>
            <span className="font-semibold">Technical Innovation & Implementation</span> – originality, technical soundness, and effective use of Atom S3.
          </li>
          <li>
            <span className="font-semibold">Design & Presentation Quality</span> – clarity, visual appeal, and engagement in both PPT and video.
          </li>
          <li>
            <span className="font-semibold">Practical Relevance & Impact</span> – how meaningfully the project addresses real-world needs or problems.
          </li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed">
          After evaluation, the best-performing teams will be recognized during the
          <span className="font-semibold"> Closing & Awards Ceremony</span>, where prizes and honors will be officially presented.
        </p>
      </div>
    </>
  );
}

export default Nerdathon;
