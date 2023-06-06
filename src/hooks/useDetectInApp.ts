import { InApp } from "../lib/InApp";

type InappType = {
  browser: string;
  isMobile: boolean;
  isDesktop: boolean;
  isInApp: boolean;
};

const useDetectInApp = (userAgent: string): InappType => {
  const Inapp = new InApp(userAgent);
  return {
    browser: Inapp.browser,
    isMobile: Inapp.isMobile,
    isDesktop: Inapp.isDesktop,
    isInApp: Inapp.isInApp,
  };
};

export default useDetectInApp;
