import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ❗ Nur für Testzwecke: Consent zurücksetzen bei jedem Reload
    // → nach erfolgreichem Test auskommentieren oder entfernen
    localStorage.removeItem("cookieConsent");

    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white px-4 py-3 text-sm flex flex-col md:flex-row items-center justify-between z-50">
      <p className="mb-2 md:mb-0">
        Diese Website verwendet nur technisch notwendige Cookies.{" "}
        <a href="/datenschutz" className="underline text-[#84C7AE]">
          Mehr erfahren
        </a>
      </p>
      <button
        onClick={acceptCookies}
        className="bg-[#84C7AE] text-gray-900 px-4 py-2 rounded hover:bg-[#6fb7a1] transition"
      >
        Einverstanden
      </button>
    </div>
  );
}
