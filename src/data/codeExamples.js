export const codeExamples = {
  "App.jsx": `import { useState } from "react";
import { NexaFlow } from "@nexaflow/core";

function App() {
  const [workflow, setWorkflow] = useState("");

  const handleAutomate = async () => {
    const suggestion = await NexaFlow.automate(workflow);
    setWorkflow(result);
  };

  return (
    <div className="app">
      <WorkflowEditor 
        onChange={setWorkflow} 
        onAutomate={handleAutomate} 
      />
    </div>
  );
}`,
  "Hero.jsx": `import { useState, useEffect } from "react";
import { NexaFlow } from "@nexaflow/core";

export default function Hero() {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSuggestion = async () => {
    const suggestion = await NexaFlow.suggest("hero component");
    return suggestion;
  };

  return (
    <section className="hero">
      <h1 className="text-4xl font-bold">
        {isReady ? "Powered by NexaFlow" : "Loading..."}
      </h1>
      <button onClick={handleSuggestion}>
        Get Suggestion
      </button>
    </section>
  );
}`,
  "Navbar.jsx": `import { useState } from "react";
import { NexaFlow } from "@nexaflow/core";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const results = await NexaFlow.search(searchQuery);
    return results;
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>CNexaFlow</h2>
      </div>
      
      <div className="nav-search">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search workflows..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}`,
};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "NF",
        title: "Smart Automation",
        content: "AI-powered workflow automation in real-time",
    },
    "Hero.jsx": {
        bgColor: "bg-cyan-500/20",
        iconColor: "text-cyan-400",
        textColor: "text-cyan-200",
        contentColor: "text-cyan-300",
        icon: "⚡",
        title: "Instant Deploy",
        content: "Ship production-ready workflows in seconds",
    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your workflows",
    },
}