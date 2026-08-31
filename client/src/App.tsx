/**
 * 口袋星球圖鑑路由：首頁、攻略、代碼與來源都維持清楚返回路徑與一致裝置感。
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Codes from "@/pages/Codes";
import Characters from "@/pages/Characters";
import EggHunt from "@/pages/EggHunt";
import Events from "@/pages/Events";
import Guide from "@/pages/Guide";
import Home from "@/pages/Home";
import Sources from "@/pages/Sources";
import Evolution from "@/pages/Evolution";
import CharacterDetail from "@/pages/CharacterDetail";
import AI from "@/pages/AI";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/guide" component={Guide} />
      <Route path="/characters" component={Characters} />
      <Route path="/characters/:id" component={CharacterDetail} />
      <Route path="/evolution" component={Evolution} />
      <Route path="/ai" component={AI} />
      <Route path="/egg-hunt" component={EggHunt} />
      <Route path="/events" component={Events} />
      <Route path="/codes" component={Codes} />
      <Route path="/sources" component={Sources} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-center" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
