import React from 'react';
import { ImageGallery } from '../components/ImageGallery.jsx';

export const Gallery = ({
  onNavigateToComparison,
  onNavigateToTelescope,
  onNavigateToSketch
}) => {
  return (
    <ImageGallery
      onNavigateToComparison={onNavigateToComparison}
      onNavigateToTelescope={onNavigateToTelescope}
      onNavigateToSketch={onNavigateToSketch}
    />
  );
};
