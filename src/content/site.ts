import {
  Activity,
  BarChart3,
  Brain,
  Clock3,
  Focus,
  Gem,
  Goal,
  Shield,
  Sparkles,
  Trophy,
  Smartphone,
  Zap,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const problemStats = [
  { value: "4.8h", label: "Average daily short-video scrolling" },
  { value: "43%", label: "Attention span decline from context switching" },
  { value: "$13k", label: "Estimated annual productivity loss" },
  { value: "2.3x", label: "Higher sleep disruption among heavy scrollers" },
];

export const solutions = [
  "Track Reels",
  "Track Shorts",
  "Brain Health",
  "Focus Mode",
  "Daily Goals",
  "Statistics",
  "AI Coach",
  "Achievements",
  "Brain Buddy",
  "Premium Reports",
];

export const features = [
  {
    icon: Activity,
    title: "Real-time Tracking",
    description: "Monitor Reels, Shorts, and endless feeds with second-level precision.",
  },
  {
    icon: Brain,
    title: "Brain Health",
    description: "Understand cognitive load patterns and recover attention with science-backed prompts.",
  },
  {
    icon: Sparkles,
    title: "AI Coach",
    description: "Get adaptive suggestions tuned to your mood, schedule, and behavior signals.",
  },
  {
    icon: Focus,
    title: "Focus Sessions",
    description: "Start one-tap focus blocks that reduce distractions across your phone.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "See meaningful weekly trends, not vanity numbers.",
  },
  {
    icon: Zap,
    title: "Challenges",
    description: "Join structured streaks that transform attention into a daily habit.",
  },
  {
    icon: Goal,
    title: "Daily Goals",
    description: "Set scroll limits with positive reinforcement instead of guilt.",
  },
  {
    icon: Smartphone,
    title: "Widgets",
    description: "Keep your focus score visible on your Android home screen.",
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Celebrate real progress with milestone badges and weekly wins.",
  },
  {
    icon: Gem,
    title: "Premium",
    description: "Unlock advanced reports and high-context coaching for long-term growth.",
  },
];

export const roadmap = [
  "MVP",
  "Play Store Launch",
  "100K Users",
  "AI Coach",
  "Wear OS",
  "Chrome Extension",
  "Enterprise Dashboard",
];

export const pricing = [
  {
    name: "Free",
    price: "$0",
    cadence: "Forever",
    points: ["Core tracking", "Daily goals", "Focus sessions"],
  },
  {
    name: "Pro Monthly",
    price: "$9",
    cadence: "per month",
    points: ["AI Coach", "Premium reports", "Advanced analytics"],
  },
  {
    name: "Pro Yearly",
    price: "$89",
    cadence: "per year",
    points: ["Everything in Pro", "2 months free", "Priority support"],
  },
  {
    name: "Lifetime",
    price: "$249",
    cadence: "one-time",
    points: ["Lifetime access", "All future upgrades", "Founder community"],
  },
];

export const testimonials = [
  {
    quote: "ScrollZero helped me reclaim my evenings. My screen time dropped by 42% in three weeks.",
    name: "Morgan Lee",
    role: "Product Manager, Austin",
  },
  {
    quote: "The AI Coach feels surprisingly human. It knows when to push and when to slow me down.",
    name: "Jason Kim",
    role: "Founder, San Francisco",
  },
  {
    quote: "I finally sleep earlier and wake up focused. This is digital wellbeing done right.",
    name: "Alana Brooks",
    role: "Doctoral Researcher, Boston",
  },
];

export const faqs = [
  {
    q: "How is ScrollZero different from built-in screen time tools?",
    a: "ScrollZero combines deep behavior analysis, AI coaching, and focus interventions instead of passive tracking dashboards.",
  },
  {
    q: "Is my personal data private?",
    a: "Yes. ScrollZero is privacy-first with secure processing, clear controls, and no third-party ad tracking.",
  },
  {
    q: "Which devices are supported?",
    a: "ScrollZero is built for Android first, with Wear OS and Chrome Extension support on the roadmap.",
  },
  {
    q: "Can teams use ScrollZero?",
    a: "Yes. The Enterprise Dashboard roadmap supports wellness initiatives for modern teams.",
  },
];

export const trustPills = [
  "Coming Soon on Google Play",
  "Built for Android",
  "Privacy First",
  "Made for Digital Wellbeing",
];

export const blogPosts = [
  {
    slug: "stop-doomscrolling-without-willpower",
    title: "How to Stop Doomscrolling Without Relying on Willpower",
    excerpt: "A behavior-design framework to break the scroll loop with less friction.",
  },
  {
    slug: "attention-as-a-compound-asset",
    title: "Attention Is a Compound Asset",
    excerpt: "Why protecting your focus now changes your next 10 years.",
  },
  {
    slug: "the-neuroscience-of-short-form-overload",
    title: "The Neuroscience of Short-form Overload",
    excerpt: "What endless feeds do to reward circuitry and daily motivation.",
  },
];

export const trustMetrics = [
  { icon: Shield, label: "Privacy-first architecture" },
  { icon: Clock3, label: "< 30 seconds to start" },
  { icon: Brain, label: "Built with behavioral science" },
];
