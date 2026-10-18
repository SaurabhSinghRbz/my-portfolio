import React from "react";
import { Container } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
import { NEW_PORTFOLIO, OLD_PORTFOLIO } from "../../config/portfolioVersions";
import "./NewPortfolio.css";

/**
 * In-page note that sits right under the hero. Unlike the top banner this one
 * cannot be dismissed and shows *both* versions side by side, so a visitor who
 * landed on the old link can see exactly what they are looking at and where the
 * newer site is.
 */
function V2Notice() {
  return (
    <section className="v2-notice" id="portfolio-versions">
      <Container>
        <div className="v2-notice__card">
          <span className="v2-notice__eyebrow">Heads up</span>
          <h2 className="v2-notice__title">
            You&apos;re viewing the older version of my portfolio
          </h2>
          <p className="v2-notice__body">
            This site is kept online as an archive of my early work. Everything I
            build now {"—"} production payments and distributed systems at
            scale {"—"} lives on the new portfolio. Both links are below, so
            head over whenever you&apos;re ready.
          </p>

          <div className="v2-notice__grid">
            <div className="v2-notice__item v2-notice__item--new">
              <div className="v2-notice__item-head">
                <span className="v2-notice__badge v2-notice__badge--new">
                  {NEW_PORTFOLIO.version} {"·"} current
                </span>
                <span>Go here</span>
              </div>
              <a
                className="v2-notice__link"
                href={NEW_PORTFOLIO.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {NEW_PORTFOLIO.url} <BiLinkExternal aria-hidden="true" />
              </a>
              <p className="v2-notice__meta">
                {NEW_PORTFOLIO.tagline}
                <br />
                Built with {NEW_PORTFOLIO.builtWith}
              </p>
            </div>

            <div className="v2-notice__item">
              <div className="v2-notice__item-head">
                <span className="v2-notice__badge v2-notice__badge--old">
                  {OLD_PORTFOLIO.version} {"·"} archived
                </span>
                <span>You are here</span>
              </div>
              <a
                className="v2-notice__link"
                href={OLD_PORTFOLIO.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {OLD_PORTFOLIO.url} <BiLinkExternal aria-hidden="true" />
              </a>
              <p className="v2-notice__meta">
                {OLD_PORTFOLIO.year} {"·"} built with {OLD_PORTFOLIO.builtWith}
              </p>
              <ul className="v2-notice__mirrors">
                {OLD_PORTFOLIO.mirrors.map((mirror) => (
                  <li key={mirror.url}>
                    <a href={mirror.url} target="_blank" rel="noopener noreferrer">
                      {mirror.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default V2Notice;
