import React from "react";
import { SiVisualstudiocode, SiPostman, SiNetlify, SiIntellijidea, SiJira, SiBitbucket } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { DiGit } from "react-icons/di";
import { AiFillCodepenCircle, AiFillCodeSandboxSquare, AiFillGithub } from "react-icons/ai"
function Toolstack() {
  return (
    <div className="skillContainer">
      {/* VSCode */}
      <div className="tech-icons">
        <SiVisualstudiocode /><p>VSCode</p>
      </div>

      {/* IntelliJ IDEA */}
      <div className="tech-icons">
        <SiIntellijidea /><p>IntelliJ IDEA</p>
      </div>

      {/* GitHub */}
      <div className="tech-icons">
        <AiFillGithub /><p>GitHub</p>
      </div>

      {/* Git */}
      <div className="tech-icons">
        <DiGit /><p>Git</p>
      </div>

      {/* Postman */}
      <div className="tech-icons">
        <SiPostman /><p>Postman</p>
      </div>

      {/* Studio 3T */}
      <div className="tech-icons">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" height="1em" width="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.336 3.194c-3.37.044-8.92 1.972-11.414 7.826-.16.384-.3.777-.418 1.177A12.825 12.825 0 0 0 .1 14.094l-.004-.002c-.405 4.071.519 6.19 1.877 6.62.909.288 1.707-.099 2.646-.888 1.032-.867 1.436-1.523 1.32-2.426-.12-.932-1.126-1.61-2.037-1.853-1.318-.383-.787-1.228-.787-1.228s1.421 1.02 3.711.763c2.089-.234 2.486-.672 2.486-.672-.003-2.155 1.152-3.657 2.664-3.802-1.05.495-1.656 2.205-1.654 3.593l.006 3.674.521.002c1.533.002 2.839-1.54 2.836-3.281v-.72s1.146-.623 2.774-.805c.77-.087 1.372-.006 1.892.15a2.15 2.15 0 0 1-.514-1.318c-.007-.225.362-.324.444 0 .29 1.302 1.035 1.859 2.898 2.418a3.84 3.84 0 0 0 1.057.021c.807-.111 1.615-.558 1.744-1.508.12-.89-.323-1.498-.776-2.12l-.109-.153a5.268 5.268 0 0 1-.48-.77 6.479 6.479 0 0 1-.293-.763c-.107-.318-.213-.634-.375-.922-2.136-3.785-5.939-4.958-9.611-4.91Zm8.058 6.287h.027c.29 0 .525.254.526.566 0 .312-.233.565-.524.565-.29 0-.527-.255-.527-.567 0-.302.22-.55.498-.564zm-6.035 4.728c.21 2.063-.963 2.934-.963 2.934 1.636-.098 3.485-1.592 3.392-3.51 0 0-.725-.105-2.429.576z" /></svg>
        <p>Studio 3T</p>
      </div>

      {/* Jira */}
      <div className="tech-icons">
        <SiJira /><p>Jira</p>
      </div>

      {/* Bitbucket */}
      <div className="tech-icons">
        <SiBitbucket /><p>Bitbucket</p>
      </div>

      {/* CodeSandBox */}
      <div className="tech-icons">
        <AiFillCodeSandboxSquare /><p>CodeSandBox</p>
      </div>

      {/* CodePen */}
      <div className="tech-icons">
        <AiFillCodepenCircle /><p>Codepen</p>
      </div>

      {/* Replit */}
      <div className="tech-icons">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.265.002a11.911 11.911 0 00-2.437.204c13.876 1.704 10.27 17.94 1.717 17.819 0 0 12.453 1.625 11.673-10.215A11.911 11.911 0 0012.265.002zM8.213.827c-.2.002-.402.008-.61.016A11.856 11.856 0 00.146 13.608C2.93-.421 18.805 4.122 17.9 12.688c0 0 2.85-12.014-9.688-11.861zm1.454 5.035C6.002 5.886.691 7.45.816 16.344a12.013 12.013 0 002.897 4.33c.052.051.108.1.162.149a12.02 12.02 0 001.137.926c.061.044.12.092.181.135a11.93 11.93 0 001.312.779c.132.068.266.13.4.193a11.854 11.854 0 001.199.486c.1.034.195.077.297.109a11.874 11.874 0 001.49.353c.153.027.307.05.461.07a12.016 12.016 0 001.578.123l.06.003c.4 0 .792-.021 1.18-.06-13.949-3.327-8.645-18.924-.114-17.68 0 0-1.469-.41-3.389-.398zm2.436 2.762a3.355 3.355 0 103.354 3.356 3.355 3.355 0 00-3.354-3.356zm-5.95 2.192S2.82 23.09 16.172 23.196a11.978 11.978 0 007.743-9.992c.033-.319.043-.644.05-.97.001-.085.013-.168.013-.255 0-.371-.023-.737-.056-1.1-3.527 13.887-19.132 8.448-17.77-.063z"></path></svg>
        <p>Replit</p>
      </div>

      {/* Vercel */}
      <div className="tech-icons">
        <IoLogoVercel /><p>Vercel</p>
      </div>

      {/* Netlify */}
      <div className="tech-icons">
        <SiNetlify /><p>Netlify</p>
      </div>
    </div >
  );
}

export default Toolstack;
