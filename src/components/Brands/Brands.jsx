import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import image1 from '../../assets/1.jpeg';
import image2 from '../../assets/2.jpeg';
import image3 from '../../assets/3.jpeg';
import image4 from '../../assets/4.jpeg';
import image5 from '../../assets/5.jpeg';
import image6 from '../../assets/6.jpeg';
import image11 from '../../assets/11.jpg';
import image22 from '../../assets/22.jpg';
import image33 from '../../assets/33.jpg';
import image44 from '../../assets/44.jpg';
import image55 from '../../assets/55.jpg';
import image66 from '../../assets/66.jpg';
import image77 from '../../assets/77.jpg';
import image88 from '../../assets/88.jpg';
import image99 from '../../assets/99.jpg';

const Brands = () => {
  const [filledStars, setFilledStars] = React.useState(new Array(15).fill(false));

  const handleStarIconClick = (index) => {
    const newFilledStars = [...filledStars];
    newFilledStars[index] = !newFilledStars[index];
    setFilledStars(newFilledStars);
  };

  const itemData = [
    { img: image1, title: 'Brand 1', featured: true },
    { img: image2, title: 'Brand 2' },
    { img: image3, title: 'Brand 3' },
    { img: image4, title: 'Brand 4' },
    { img: image5, title: 'Brand 5', featured: true },
    { img: image6, title: 'Brand 6' },
    { img: image11, title: 'Brand 11' },
    { img: image22, title: 'Brand 22' },
    { img: image33, title: 'Brand 33' },
    { img: image44, title: 'Brand 44' },
    { img: image55, title: 'Brand 55' },
    { img: image66, title: 'Brand 66' },
    { img: image77, title: 'Brand 77' },
    { img: image88, title: 'Brand 88' },
    { img: image99, title: 'Brand 99' },
  ];

  return (
    <ImageList
      sx={{
        width: '100%',
        height: 'auto',
        animation: 'alternate-reverse',
        transform: 'translateZ(0)',
      }}
      gap={30}
      cols={5}
    >
      {itemData.map((item, index) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
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
                  onClick={() => handleStarIconClick(index)}
                >
                  {filledStars[index] ? <StarIcon /> : <StarBorderIcon />}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default Brands;
