import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';

const Wrapper = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #2C2C2C;
  }
  ::-webkit-scrollbar-thumb {
      background: #9F9F9F;
      border-radius: 10px;
  }

  .markdown h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .markdown h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }

  .markdown p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .markdown a {
    color: #2563eb;
    text-decoration: underline;
  }

  .markdown ul {
    list-style-type: disc;
    padding-left: 1.5rem; 
    margin-bottom: 1rem;
  }

  .markdown ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .markdown li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  .markdown strong {
    font-weight: 700;
    color: #ffffffff; /* neutral dark gray */
  }

  .markdown code {
    background-color: #f3f4f6; /* light gray background */
    color: #d6336c; /* subtle magenta for inline code */
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-size: 0.95em;
    font-family: 'Fira Code', 'Courier New', monospace;
  }

  .markdown pre {
    background-color: #1e293b; /* dark slate */
    color: #e2e8f0; /* light text */
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    margin-bottom: 1rem;
  }

  .markdown pre code {
    background: none; /* prevent double backgrounds */
    color: inherit;
    padding: 0;
    font-size: 0.9em;
  }
`;

function ProjectCard({ project, projectData }) {

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/NMPC27/${project}/main/README.md`)
      .then((res) => res.text())
      .then((text) => {
        // Replace relative image paths with full GitHub URLs
        const fixedText = text.replace(
          /!\[(.*?)\]\((?!https?:\/\/)(.*?)\)/g,
          (match, alt, src) =>
            `![${alt}](https://raw.githubusercontent.com/NMPC27/${project}/main/${src})`
        );
        setContent(fixedText);
      })
      .catch((err) => console.error("Error fetching README:", err));
  }, []);

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project}
        </p>
      </div>
      <Wrapper>
        <div style={{maxHeight: "600px"}} className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 overflow-y-auto">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">github:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300"><a href={`https://github.com/NMPC27/${project}`} target="_blank">{`https://github.com/NMPC27/${project}`}</a></span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">demo:</span>
              <span className="text-orange-400">
                { projectData[project].demo == null ?
                  "null"
                  :
                  <a href={projectData[project].demo} target="_blank">{projectData[project].demo}</a>
                }
              </span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">visit:{" "}</span>
              <span className="text-cyan-400">
                { projectData[project].visit == null ?
                  "null"
                  :
                  <a href={projectData[project].visit} target="_blank">{projectData[project].visit}</a>
                }
                </span>
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`};`}</span></div>
            <br/>
          </code>
            <div className="markdown">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectCard;