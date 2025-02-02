import {
  TrendingUp,
  Brain,
  LineChart,
  BookText,
  Globe,
  Gauge,
} from "lucide-react";
import GetStarted from "./components/GetStarted";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 text-center relative z-10">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Your Smart Financial Companion
          </h1>
          <p className="text-xl text-textSecondary mb-8 max-w-2xl mx-auto">
            Make informed investment decisions with real-time data, AI-powered
            insights, and professional trading tools.
          </p>
          <GetStarted />
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div
                className={`bg-gradient-to-br ${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-textTitle mb-4">
                {feature.title}
              </h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Data",
    description:
      "Access live market data, advanced charting tools, and real-time price alerts for informed trading decisions.",
    bgColor: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Get intelligent market insights, sentiment analysis, and personalized trading recommendations.",
    bgColor: "from-purple-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description:
      "Trade across international markets with real-time forex data and global economic indicators.",
    bgColor: "from-indigo-500 to-indigo-600",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description:
      "Powerful technical analysis tools, custom indicators, and automated pattern recognition.",
    bgColor: "from-pink-500 to-pink-600",
  },
  {
    icon: BookText,
    title: "Smart Journal",
    description:
      "Document trades, analyze performance, and get AI-powered insights to improve your strategy.",
    bgColor: "from-green-500 to-green-600",
  },
  {
    icon: Gauge,
    title: "Market Sentiment",
    description:
      "Track market sentiment in real-time with our advanced sentiment analysis engine.",
    bgColor: "from-orange-500 to-orange-600",
  },
];
