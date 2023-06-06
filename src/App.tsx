import useDetectInApp from "./hooks/useDetectInApp";

function App() {
  const userAgent = navigator.userAgent;
  const { isInApp, isMobile, isDesktop, browser } = useDetectInApp(userAgent);

  return (
    <>
      <div>isInApp : {isInApp ? "true" : "false"}</div>
      <div>isMobile : {isMobile ? "true" : "false"}</div>
      <div>isDesktop : {isDesktop ? "true" : "false"}</div>
      <div>browser : {browser}</div>
    </>
  );
}

export default App;
