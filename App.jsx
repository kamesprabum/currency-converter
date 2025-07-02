import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  DollarSign,
  ArrowRightLeft,
  Loader2,
  TrendingUp,
  Clock,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Check,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ChevronUp,
  Activity,
  Users,
  Award,
  Sparkles
} from 'lucide-react';

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "PKR", name: "Pakistani Rupee", flag: "🇵🇰" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰" },
  { code: "KRW", name: "South Korean Won", flag: "🇰🇷" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰" },
  { code: "PLN", name: "Polish Zloty", flag: "🇵🇱" },
  { code: "CZK", name: "Czech Koruna", flag: "🇨🇿" },
  { code: "HUF", name: "Hungarian Forint", flag: "🇭🇺" },
  { code: "RUB", name: "Russian Ruble", flag: "🇷🇺" },
];

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
    <CardHeader className="pb-8">
      <div className={\`mx-auto w-20 h-20 bg-gradient-to-br \${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg\`}>
        <Icon className="h-10 w-10 text-white" />
      </div>
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base leading-relaxed text-gray-600">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const CurrencySelectItem = ({ currency }) => (
  <SelectItem key={currency.code} value={currency.code}>
    {`\${currency.flag} \${currency.code} - \${currency.name}`}
  </SelectItem>
);

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CurrencyConverter />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </>
  );
};

export default App;
