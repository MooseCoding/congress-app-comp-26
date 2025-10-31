import fs from 'fs';
import path from 'path';
import Navbar from '../../components/Navbar';
import ClassMenu from '../../components/ClassMenu';

interface ClassPageProps {
  params: { slug: string };
}

export default async function ClassPage({ params }: ClassPageProps) {
  const { slug } = await params;

  // Dynamically read markdown files in the content folder
  const classDir = path.join(process.cwd(), 'content', slug);
  let lessons: string[] = [];
  if (fs.existsSync(classDir)) {
    lessons = fs.readdirSync(classDir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace('.md', ''));
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#141b3a] to-[#1b1f4a] text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 max-w-7xl mx-auto px-6 py-12 gap-8 justify-left">
        {/* Lessons menu */}
        <aside className="w-64 flex-shrink-0">
          <ClassMenu classSlug={slug} lessons={lessons} activeLesson={"none"} />
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-pink-400 capitalize drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
            {slug.replace('-', ' ').replace('p', 'P')}
          </h1>

          <h1 className="text-5xl font-semibold text-purple-200 mb-4">
            Welcome to the {slug.replace('-', ' ')} lesson page.
          </h1>

          <h2 className="text-3xl text-purple-300 mb-8">
            On the left there are your lessons for this class, and below are the special activities.
          </h2>

          {/* Conditional content for AP Calculus */}
          {(slug === "ap-calc") && (
            <>
              <h3 className="text-3xl text-pink-300 mb-8 leading-relaxed">
                Welcome to Calc AB. Lessons 1–5 cover derivatives, Lessons 6–9 cover integration.
              </h3>

              {/* --- Special Activity Section --- */}
              <section className="mt-12 space-y-10">
                <div>
                  <h3 className="text-3xl text-pink-300 font-bold mb-4">
                    Special Activity: The Derivative Discovery Challenge
                  </h3>

                  <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                    Before you start memorizing derivative formulas, try discovering them yourself.
                    This investigation helps you visualize what a derivative really means — the rate of change.
                  </p>

                  <div className="p-6 bg-[#1a2149]/80 border border-[#5b4b99] rounded-xl shadow-lg">
                    <h4 className="text-2xl font-semibold text-pink-300 mb-2">
                      Investigation: Graphing and Guessing Derivatives
                    </h4>
                    <p className="text-purple-100 mb-4">
                      Use any graphing tool (Desmos, GeoGebra, or your calculator) to explore these functions:
                    </p>
                    <ul className="list-disc list-inside text-purple-200 mb-4">
                      <li>f(x) = x²</li>
                      <li>f(x) = sin(x)</li>
                      <li>f(x) = eˣ</li>
                    </ul>
                    <p className="text-purple-100 mb-4">
                      For each, sketch what you think the derivative f′(x) looks like.
                      Then graph the actual derivative and compare your predictions.
                    </p>
                    <p className="text-purple-100 mb-4">Record your observations:</p>
                    <ul className="list-disc list-inside text-purple-200">
                      <li>Where the derivative is positive or negative</li>
                      <li>Where the derivative equals zero (flat points)</li>
                      <li>What relationships appear between f(x) and f′(x)</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-[#1a2149]/80 border border-[#5b4b99] rounded-xl shadow-lg mt-8">
                    <h4 className="text-2xl font-semibold text-pink-300 mb-2">
                      Reflection Challenge
                    </h4>
                    <p className="text-purple-100 mb-2">
                      Write short answers or discuss with a classmate:
                    </p>
                    <ol className="list-decimal list-inside text-purple-200 space-y-2">
                      <li>What does the sign of the derivative tell you about the original function?</li>
                      <li>What does it mean when f′(x) = 0?</li>
                      <li>Why does eˣ have the same derivative as itself?</li>
                    </ol>
                    <p className="text-purple-400 mt-4 italic">
                      Tip: This activity sets up the foundation for Lessons 1–5,
                      connecting slope, tangent lines, and instantaneous rate of change.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
          {slug === "ap-ush" && (
            <>
              <h3 className="text-3xl mt-8 text-[#caa4ff]">
                Welcome to U.S. History.
              </h3>
              <p className="text-lg text-[#f1e2ff] mt-4">
                Lessons 1–4 explore the early foundations of America,  
                Lessons 5–9 cover westward expansion and the Civil War,  
                and Lessons 10–12 (Coming Soon!) examine modern America and contemporary issues.
              </p>

              {/* Special Activity */}
              <div className="mt-10 p-6 bg-[#111b3d] border border-[#493d7e] rounded-lg">
                <h4 className="text-2xl font-semibold text-[#e3b3ff] mb-2">
                  Special Activity: The Founding Debate Simulation
                </h4>
                <p className="text-[#f1e2ff] mb-4">
                  Step into the Constitutional Convention of 1787. You’ll take on the role of a delegate 
                  debating the structure of the new U.S. government. Choose your stance and argue for it 
                  based on the readings and your own reasoning.
                </p>
                <ul className="list-disc list-inside text-[#d7c2ff] mb-4">
                  <li>Federalist: Support a strong central government to unite the states.</li>
                  <li>Anti-Federalist: Defend state sovereignty and individual liberty.</li>
                </ul>
                <p className="text-[#f1e2ff] mb-4">
                  Write or present your argument answering:
                </p>
                <ol className="list-decimal list-inside text-[#d9baff] space-y-2">
                  <li>Should the federal government have the power to tax?</li>
                  <li>How much power should states retain?</li>
                  <li>What safeguards are needed to prevent tyranny?</li>
                </ol>
                <p className="text-[#a989ff] mt-4 italic">
                  Tip: Use this exercise to understand the Federalist Papers and the roots of the Bill of Rights.
                </p>
              </div>

              <div className="mt-10 p-6 bg-[#111b3d] border border-[#493d7e] rounded-lg">
                <h4 className="text-2xl font-semibold text-[#e3b3ff] mb-2">
                  Reflection Extension
                </h4>
                <p className="text-[#f1e2ff] mb-2">
                  After completing the activity, reflect on how the Constitution balances 
                  liberty and order. Then, compare it to a modern debate about federal vs. state power 
                  (e.g., education, healthcare, or voting laws).
                </p>
                <p className="text-[#a989ff] italic">
                  This connects directly to the foundational conflicts shaping U.S. political thought today.
                </p>
              </div>
            </>
          )}

          {slug === "ap-physics" && (
            <>
              <h3 className="text-3xl mt-8 text-[#caa4ff]">
                Welcome to Physics.
              </h3>
              <p className="text-lg text-[#f1e2ff] mt-4">
                Lessons 1–3 cover mechanics, Lessons 4–6 cover electricity and magnetism,  
                and Lessons 7–9 explore waves and modern physics.
              </p>

              {/* Special Activity */}
              <div className="mt-10 p-6 bg-[#111b3d] border border-[#493d7e] rounded-lg">
                <h4 className="text-2xl font-semibold text-[#e3b3ff] mb-2">
                  Special Activity: Build Your Own Ramp Experiment
                </h4>
                <p className="text-[#f1e2ff] mb-4">
                  Design a small experiment to explore **motion on an incline**. Choose variables such as angle, mass, or surface friction, and record how they affect acceleration. 
                  Use simple tools like toy cars, ramps, and timers.
                </p>
                <ul className="list-disc list-inside text-[#d7c2ff] mb-4">
                  <li>Predict acceleration for different angles.</li>
                  <li>Compare measured times to predictions from equations of motion.</li>
                  <li>Analyze errors and explain discrepancies.</li>
                </ul>
                <p className="text-[#a989ff] mt-4 italic">
                  Tip: This hands-on experiment reinforces Newton’s Second Law and helps visualize forces and acceleration.
                </p>
              </div>

              <div className="mt-10 p-6 bg-[#111b3d] border border-[#493d7e] rounded-lg">
                <h4 className="text-2xl font-semibold text-[#e3b3ff] mb-2">
                  Reflection Challenge
                </h4>
                <p className="text-[#f1e2ff] mb-2">
                  After completing your ramp experiment, write a short summary answering:
                </p>
                <ol className="list-decimal list-inside text-[#d9baff] space-y-2">
                  <li>How did your measurements compare to theoretical predictions?</li>
                  <li>Which variable had the largest effect on acceleration?</li>
                  <li>How can you apply this knowledge to real-world motion problems?</li>
                </ol>
              </div>
            </>
          )}
         {slug === "ap-lang" && (
            <>
              <h3 className="text-3xl mt-8 text-[#caa4ff]">
                Welcome to AP Language and Composition.
              </h3>
              <p className="text-lg text-[#f1e2ff] mt-4">
                Lessons 1–3 focus on Rhetorical Analysis, Lessons 4–6 on Argument,  
                and Lessons 7–9 on Synthesis and Style. Below are sample lesson plans.
              </p>

              {/* Special Activity */}
              <div className="mt-10 p-6 bg-[#111b3d] border border-[#493d7e] rounded-lg">
                <h4 className="text-2xl font-semibold text-[#e3b3ff] mb-2">
                  Special Activity: Rhetorical Debate
                </h4>
                <p className="text-[#f1e2ff] mb-4">
                  Select a contemporary article or speech and annotate its rhetorical strategies. Then, form a small debate team to argue for or against the author’s perspective, using textual evidence to support your points.
                </p>
                <ul className="list-disc list-inside text-[#d7c2ff] mb-4">
                  <li>Identify ethos, pathos, and logos in the text.</li>
                  <li>Highlight stylistic devices like diction, tone, and syntax.</li>
                  <li>Practice building counterarguments supported by evidence.</li>
                </ul>
                <p className="text-[#a989ff] mt-4 italic">
                  Tip: This activity reinforces rhetorical analysis skills and prepares you for AP FRQs.
                </p>
              </div>
            </>
          )}
          {slug === "apes" && (
            <>
              <h3 className="text-3xl mt-8 text-[#caa4ff]">
                Welcome to AP Environmental Science.
              </h3>
              <p className="text-lg text-[#f1e2ff] mt-4">
                Lessons 1–3 focus on ecosystems and biodiversity, Lessons 4–6 on human impacts and pollution,  
                and Lessons 7–9 explore energy resources and sustainability.
              </p>

              {/* Special Activity */}
              <div className="mt-10 p-6 bg-[#111b3d] border border-[#493d7e] rounded-lg">
                <h4 className="text-2xl font-semibold text-[#e3b3ff] mb-2">
                  Special Activity: Local Environmental Audit
                </h4>
                <p className="text-[#f1e2ff] mb-4">
                  Conduct a mini-audit of your local environment. Observe water quality, energy usage, and biodiversity in your area. Document your findings and suggest one actionable improvement for your community.
                </p>
                <ul className="list-disc list-inside text-[#d7c2ff] mb-4">
                  <li>Identify native and invasive species.</li>
                  <li>Measure or estimate energy/water consumption patterns.</li>
                  <li>Note any pollution sources (air, water, or soil).</li>
                </ul>
                <p className="text-[#a989ff] mt-4 italic">
                  Tip: This activity connects directly to ecosystems, human impacts, and sustainability topics in APES.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}