import React, { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    window.location.replace("https://www.insectprotect.de");
  }, []);

  return (
    <html lang="de">
      <head>
        <meta httpEquiv="refresh" content="0; url=https://www.insectprotect.de" />
        <title>Weiterleitung...</title>
      </head>
      <body>
        <p>Sie werden weitergeleitet nach <a href="https://www.insectprotect.de">www.insectprotect.de</a></p>
      </body>
    </html>
  );
};

export default IndexPage;

