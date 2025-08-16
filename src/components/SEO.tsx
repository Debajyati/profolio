import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO() {
  const currentUrl = "https://ddeb.pages.dev";
  const location = useLocation();

  const pathname = location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const endpoint = `${currentUrl}${pathname}`;
  return (
    <Helmet>
      {/* Facebook tags */}
      <meta property="og:url" content={endpoint} />
      {/* End Facebook tags */}
      {/* Canonical URL */}
      <link rel="canonical" href={endpoint}></link>
    </Helmet>
  );
}
