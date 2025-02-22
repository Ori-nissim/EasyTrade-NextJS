import {
  TrendingUp,
  Brain,
  LineChart,
  BookText,
  Globe,
  Gauge,
} from "lucide-react";
import GetStarted from "./components/GetStarted";
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations("hero");
  const tFeatures = useTranslations("features");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 text-center relative z-10">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {t("title")}
          </h1>
          <p className="text-2xl text-textSecondary mb-8 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <GetStarted buttonText={t.raw("getStarted")} />
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all relative"
            >
              <div
                className={`bg-gradient-to-br ${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              {feature.comingSoon && (
                <span className="absolute top-4 rtl:left-4 ltr:right-4 bg-blue-400 text-white text-m  px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <h3 className="text-2xl font-semibold text-textTitle mb-4">
                {tFeatures(`${feature.key}.title`)}
              </h3>
              <p className="text-textSecondary text-lg">
                {tFeatures(`${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    key: "realTimeData",
    icon: TrendingUp,
    bgColor: "from-blue-500 to-blue-600",
  },
  {
    key: "smartJournal",
    icon: BookText,
    bgColor: "from-green-500 to-green-600",
  },

  {
    key: "marketSentiment",
    icon: Gauge,
    bgColor: "from-orange-500 to-orange-600",
  },

  {
    key: "aiAnalysis",
    icon: Brain,
    bgColor: "from-purple-500 to-purple-600",
    comingSoon: true,
  },
  {
    key: "tradeHere",
    icon: Globe,
    bgColor: "from-indigo-500 to-indigo-600",
    comingSoon: true,
  },
  {
    key: "advancedAnalytics",
    icon: LineChart,
    bgColor: "from-pink-500 to-pink-600",
    comingSoon: true,
  },
];

/*

*/
