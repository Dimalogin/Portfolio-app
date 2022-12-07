
(function controller() {
    window.location.hash = "en";
  
    addEventListener("hashchange", handleHash);
    handleHash();
  })();
  
  function handleHash() {
    const { name } = getRouterInfo();
  
    if (name === 'ru' || name === 'en') {
      const routerName = name + "Route";
      Controller[routerName]();
    }
  }
  
  function getRouterInfo() {
    const hash = location.hash ? location.hash.slice(1) : "";
    const [name] = hash.split("/");
  
    return { name };
  }