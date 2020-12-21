import React from 'react';
import './ExploreContainer.css';
import Epg from './Epg.js';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <Epg name="tve1" />
    </div>
  );
};

export default ExploreContainer;
