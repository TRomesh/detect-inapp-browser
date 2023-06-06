type InappType = {
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

export class InApp {
  useragent = "";

  constructor(useragent: string) {
    this.useragent = useragent;
  }

  get browser(): string {
    return findKey(BROWSER, (regex) => regex.test(this.useragent)) || "other";
  }

  get isMobile(): boolean {
    return /(iPad|iPhone|Android|Mobile)/i.test(this.useragent) || false;
  }

  get isDesktop(): boolean {
    return !this.isMobile;
  }

  get isInApp(): boolean {
    const rules = [
      "WebView",
      "(iPhone|iPod|iPad)(?!.*Safari/)",
      "Android.*(wv)",
    ];
    const regex = new RegExp(`(${rules.join("|")})`, "ig");
    return Boolean(this.useragent.match(regex));
  }
}

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
