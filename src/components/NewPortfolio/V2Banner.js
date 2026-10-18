import React, { useEffect, useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { NEW_PORTFOLIO, BANNER_DISMISS_KEY } from "../../config/portfolioVersions";
import "./NewPortfolio.css";

/**
 * Fixed strip at the very top of the page telling visitors that this is the
 * archived v1 site and pointing them at the current one.
 *
 * While it is on screen it adds `v2-banner-open` to <body> so the fixed
 * Bootstrap navbar slides down by the banner height instead of overlapping it.
 * Dismissal is remembered for the browsing session only, so the notice comes
 * back on a fresh visit.
 */
function V2Banner() {
  const [visible, setVisible] = useState(true);
  const bannerRef = useRef(null);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(BANNER_DISMISS_KEY) === "1") {
        setVisible(false);
      }
    } catch (e) {
      // sessionStorage can throw in private mode / sandboxed iframes - ignore.
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const node = bannerRef.current;

    const reset = () => {
      document.body.classList.remove("v2-banner-open");
      root.style.removeProperty("--v2-banner-height");
    };

    if (!visible || !node) {
      reset();
      return reset;
    }

    document.body.classList.add("v2-banner-open");

    // The banner wraps onto two lines on narrow viewports, so its height cannot
    // be a fixed number in CSS - measure it and feed the real value back as the
    // offset the navbar uses. Otherwise the navbar overlaps it on mobile.
    const apply = () =>
      root.style.setProperty(
        "--v2-banner-height",
        `${Math.ceil(node.getBoundingClientRect().height)}px`
      );

    apply();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", apply);
      return () => {
        window.removeEventListener("resize", apply);
        reset();
      };
    }

    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => {
      observer.disconnect();
      reset();
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(BANNER_DISMISS_KEY, "1");
    } catch (e) {
      // ignore - dismissing just won't persist
    }
  };

  if (!visible) return null;

  return (
    <div
      className="v2-banner"
      ref={bannerRef}
      role="region"
      aria-label="Newer portfolio available"
    >
      <span className="v2-banner__tag">Archived {"·"} v1</span>
      <span className="v2-banner__text">
        This is my older portfolio. The current one lives at
      </span>
      <a
        className="v2-banner__cta"
        href={NEW_PORTFOLIO.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {NEW_PORTFOLIO.label} <BiRightArrowAlt aria-hidden="true" />
      </a>
      <button
        type="button"
        className="v2-banner__close"
        onClick={dismiss}
        aria-label="Dismiss newer portfolio notice"
      >
        {"✕"}
      </button>
    </div>
  );
}

export default V2Banner;
