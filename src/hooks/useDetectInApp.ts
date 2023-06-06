import { useEffect } from "react";

type Inapp = {
  browser: string;
  isMobile: boolean;
  isDesktop: boolean;
  isInApp: boolean;
};

const findKey = <T>(
  obj: Record<string, T>,
  predicate: (value: T) => boolean
): string | undefined => {
  for (const [key, value] of Object.entries(obj)) {
    if (predicate(value)) {
      return key;
    }
  }
  return undefined;
};

const BROWSER = {
  messenger: /\bFB[\w_]+\/(Messenger|MESSENGER)/,
  facebook: /\bFB[\w_]+\//,
  twitter: /\bTwitter/i,
  line: /\bLine\//i,
  wechat: /\bMicroMessenger\//i,
  puffin: /\bPuffin/i,
  miui: /\bMiuiBrowser\//i,
  instagram: /\bInstagram/i,
  chrome: /\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,
  safari: /Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,
  ie: /IEMobile|MSIEMobile/,
  firefox:
    /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/,
};

const useDetectInApp = (userAgent: string): Inapp => {
  let useragent: string;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useragent = userAgent;
  }, []);

  const browser = (): string => {
    return findKey(BROWSER, (regex) => regex.test(useragent)) || "other";
  };

  const isMobile = (): boolean => {
    return /(iPad|iPhone|Android|Mobile)/i.test(useragent) || false;
  };

  const isDesktop = (): boolean => {
    return !isMobile();
  };

  const isInApp = (): boolean => {
    const rules = [
      "WebView",
      "(iPhone|iPod|iPad)(?!.*Safari/)",
      "Android.*(wv)",
    ];
    const regex = new RegExp(`(${rules.join("|")})`, "ig");
    return Boolean(useragent?.match(regex));
  };

  return {
    browser: browser(),
    isMobile: isMobile(),
    isDesktop: isDesktop(),
    isInApp: isInApp(),
  };
};

export default useDetectInApp;
