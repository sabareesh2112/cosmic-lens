import React from 'react';
import { Hero } from '../components/Hero.jsx';

export const Home = ({
  onExploreObjects,
  onExploreTelescopes,
  onExploreComparison
}) => {
  return (
    <Hero
      onExplore={onExploreObjects}
      onExploreTelescopes={onExploreTelescopes}
      onExploreComparison={onExploreComparison}
    />
  );
};
