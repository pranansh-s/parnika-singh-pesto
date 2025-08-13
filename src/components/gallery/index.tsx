'use client';

import Image from 'next/image';

import { Tweet } from 'react-tweet';
import tw from 'tailwind-styled-components';

type IGalleryProps = {
  paths: string[];
};

const Gallery: React.FC<IGalleryProps> = ({ paths }) => {
  return (
    <GalleryContainer className="gallery">
      {paths.map((display, idx) =>
        display.startsWith('/') ? (
          <Image width={750} height={750} key={idx} src={display} alt={`${display}-${idx}`} />
        ) : (
          <Tweet key={idx} id={display} />
        )
      )}
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = tw.div`
  columns-1
  items-center
  overflow-clip
  md:columns-2
  lg:columns-3
`;
