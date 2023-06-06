import useDetectInApp from "./hooks/useDetectInApp";
import { detectInAppBrowser } from "./util";

import InApp from "detect-inapp";

function App() {
  const { isInApp, isMobile, isDesktop, browser } = useDetectInApp(
    navigator.userAgent || navigator.vendor
  );
  const inapp = new InApp(navigator.userAgent || navigator.vendor);

  return (
    <>
      <div>isInApp : {isInApp ? "true" : "false"}</div>
      <div>isMobile : {isMobile ? "true" : "false"}</div>
      <div>isDesktop : {isDesktop ? "true" : "false"}</div>
      <div>browser : {browser}</div>
      <div>
        detectInAppBrowser:{" "}
        {detectInAppBrowser(navigator.userAgent || navigator.vendor)}
      </div>
      <br />
      <div>isInApp : {inapp.isInApp ? "true" : "false"}</div>
      <div>isMobile : {inapp.isMobile ? "true" : "false"}</div>
      <div>isDesktop : {inapp.isDesktop ? "true" : "false"}</div>
      <div>browser : {inapp.browser}</div>
      <div>ua: {inapp.ua}</div>
    </>
  );
}

export default App;
