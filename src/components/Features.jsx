import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline your team's processes with intelligent workflow triggers. Save hours every week and focus on what actually matters.",
    codeSnippet: `function handleWorkflow() {
  // NexaFlow triggers automation
  const result = await NexaFlow.run("onboard-user")
  // Workflow executed instantly
}`,
    imagePosition: "left",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect NexaFlow with your existing tools in minutes. From Slack to GitHub, our integrations keep your entire team in sync without switching tabs.",
    codeSnippet: `describe("NexaFlow Integrations", () => {
  // Auto-connect your tools
  it("should sync with Slack", () => {
    // Integration test
  })
})`,
    imagePosition: "right",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track workflow performance with live dashboards and actionable insights. Identify bottlenecks, measure team productivity, and make data-driven decisions.",
    codeSnippet: `// NexaFlow tracks in real-time:
const stats  = await NexaFlow.analytics()
// Returns: { speed: "+40%", uptime: "99.9%" }`,
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
        id="features"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                Everything Your Team
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Needs to Ship Faster
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-20 lg:space-y-32">
        {features.map((feature, key) => (
            <div
                key={key}
                className={`flex flex-col lg:flex-row gap-8 sm:gap-12 ${
                    feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
                }`}
            >
                {/* Code Section */}
                <div className="flex-1 w-full">
                    <div className="relative group">
                        <div 
                            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500"
                        />
                        <div
                            className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/20 
                            rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1
                            group-hover:border-blue-600/50 transition-all duration-300"
                        >
                            {/* IDE Interface */}
                            <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                                <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                                        {feature.title}
                                    </span>
                                </div>

                                <div>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={nightOwl}
                                        customStyle={{
                                            margin: 0,
                                            background: 'transparent',
                                            borderRadius: "8px",
                                            fontSize: "0.75rem",
                                            lineHeight: "1.4",
                                            height: "100%",
                                        }}
                                        wrapLines={true}
                                        >   
                                        {feature.codeSnippet}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 w-full">
                    <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                        <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                           {feature.title}
                        </h3>
                        <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                          {feature.description}
                        </p>
                    </div>
                </div>                    
            </div>
        ))}
      </div>
    </section>
  );
}
