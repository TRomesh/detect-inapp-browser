import useDetectInApp from "./hooks/useDetectInApp";
import { detectInAppBrowser } from "./util";

function App() {
  const userAgent = navigator.userAgent;
  const { isInApp, isMobile, isDesktop, browser } = useDetectInApp(userAgent);

  return (
    <>
      <div>isInApp : {isInApp ? "true" : "false"}</div>
      <div>isMobile : {isMobile ? "true" : "false"}</div>
      <div>isDesktop : {isDesktop ? "true" : "false"}</div>
      <div>browser : {browser}</div>
      <div>detectInAppBrowser: {detectInAppBrowser(navigator.userAgent)}</div>
    </>
  );
}

export default App;
