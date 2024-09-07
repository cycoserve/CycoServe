import React, { useState } from "react";
import sanitizeHtml from "sanitize-html";

interface ReadMoreProps {
  html: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ html }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "a"]), // Allow img and a tags
    allowedAttributes: {
      a: ["href", "name", "target"], // Allow href, name, and target attributes for a tags
      img: ["src", "alt"], // Allow src and alt attributes for img tags
    },
  });

  const displayHtml = isExpanded ? html : sanitizedHtml;

  return (
    <div className="bg-slate-50 p-2 border rounded-md mb-2">
      <div dangerouslySetInnerHTML={{ __html: displayHtml }} />
      {html !== sanitizedHtml && (
        <button className="font-semibold" onClick={toggleExpand}>
          {isExpanded ? "| Read Less" : "| Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
