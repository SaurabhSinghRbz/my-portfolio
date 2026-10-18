import React, { useEffect, useRef } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { NEW_PORTFOLIO } from "../../config/portfolioVersions";
import "./NewPortfolio.css";

/**
 * Fixed strip at the very top of the page telling visitors that this is the
 * archived v1 site and pointing them at the current one. It is permanent —
 * there is deliberately no way to dismiss it, so nobody mistakes this archive
 * for the current portfolio.
 *
 * While mounted it adds `v2-banner-open` to <body> so the fixed Bootstrap
 * navbar and the hero slide down by the banner height instead of overlapping it.
 */
function V2Banner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const node = bannerRef.current;
    if (!node) return undefined;

    document.body.classList.add("v2-banner-open");

    // The banner wraps onto two or three lines on narrow viewports, so its
    // height cannot be a fixed number in CSS - measure it and feed the real
    // value back as the offset the navbar and hero use.
    const apply = () =>
      root.style.setProperty(
        "--v2-banner-height",
        `${Math.ceil(node.getBoundingClientRect().height)}px`
      );

    apply();

    const reset = () => {
      document.body.classList.remove("v2-banner-open");
      root.style.removeProperty("--v2-banner-height");
    };

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
  }, []);

  return (
    <div
      className="v2-banner"
      ref={bannerRef}
      role="region"
      aria-label="Archived portfolio notice"
    >
      <span className="v2-banner__tag">Archived {"·"} v1</span>
      <span className="v2-banner__text v2-banner__text--long">
        This is my older portfolio. The current one lives at
      </span>
      {/* Shorter wording on small phones so the banner stays two lines, not three. */}
      <span className="v2-banner__text v2-banner__text--short">
        Older portfolio. Current site:
      </span>
      <a
        className="v2-banner__cta"
        href={NEW_PORTFOLIO.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {NEW_PORTFOLIO.label} <BiRightArrowAlt aria-hidden="true" />
      </a>
    </div>
  );
}

export default V2Banner;
