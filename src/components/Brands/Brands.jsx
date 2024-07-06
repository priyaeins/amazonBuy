import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import image1 from '../../assets/1.jpeg';
import image2 from '../../assets/2.jpeg';
import image3 from '../../assets/3.jpeg';
import image4 from '../../assets/4.jpeg';
import image5 from '../../assets/5.jpeg';
import image6 from '../../assets/6.jpeg';

const Brands = () => {
  const srcset = (image, width, height, rows = 1, cols = 1) => ({
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  });

  const CustomImageList = () => (
    <ImageList
      sx={{
        width: '100%', // Adjust the width as needed
        height: 'auto', // Adjust the height as needed
        transform: 'translateZ(0)',
      }}
      rowHeight={200} // Adjust rowHeight as needed
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)} // Adjust width and height here
              alt={item.title}
              loading="lazy"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Ensure the image covers the entire container
              }}
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );

  const itemData = [
    {
      img: image1,
      title: 'Brand 1',
      featured: true,
    },
    {
      img: image2,
      title: 'Brand 2',
    },
    {
      img: image3,
      title: 'Brand 3',
    },
    {
      img: image4,
      title: 'Brand 4',
    },
    {
      img: image5,
      title: 'Brand 5',
      featured: true,
    },
    {
      img: image6,
      title: 'Brand 6',
    },
  ];

  return <CustomImageList />;
};

export default Brands;
