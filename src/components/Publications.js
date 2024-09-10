import React from 'react';
import '../styles/Publications.css';

const Publications = () => {
  const publications = [
    {
      authors: "Doe, J., & Smith, J.",
      year: "2023",
      title: "Artificial intelligence in complex networks",
      journal: "Journal of AI Research",
      volume: "15",
      issue: "2",
      pages: "123-145",
      doi: "https://doi.org/10.1234/ai.2023.0152"
    },
    {
      authors: "White, E., & Brown, M.",
      year: "2022",
      title: "Networked systems for efficient data processing",
      journal: "Journal of Data Systems",
      volume: "12",
      issue: "3",
      pages: "56-75",
      doi: "https://doi.org/10.5678/ds.2022.1234"
    },
    {
      authors: "Green, D., & Black, S.",
      year: "2021",
      title: "The future of AI and networked systems",
      journal: "Future Technologies",
      volume: "10",
      issue: "1",
      pages: "101-120",
      doi: "https://doi.org/10.7890/ft.2021.1010"
    }
    // Add more publications as needed
  ];

  return (
    <div className="publications-container">
      <h1>Publications</h1>
      <ul className="publication-list">
        {publications.map((pub, index) => (
          <li key={index} className="publication-item">
            {pub.authors} ({pub.year}). <i>{pub.title}</i>. <i>{pub.journal}</i>, {pub.volume}({pub.issue}), {pub.pages}. 
            <a href={pub.doi} target="_blank" rel="noopener noreferrer"> {pub.doi}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
