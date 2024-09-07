import React from 'react';

interface DetailsProps {
  htmlContent: string;
}

const Details: React.FC<DetailsProps> = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default Details;
