import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './NFTCard.css';

const NFTCard = ({
  profileImage,
  displayName,
  username,
  isVerified,
  nftImage,
  rating,
  bookmarks,
  price,
}) => {
  const ratingBorder = `conic-gradient(#00e676 ${rating * 36}deg, #ccc 0deg)`;

  return (
    <Card className="nft-card">
      <div className="nft-card-background" style={{ backgroundImage: `url(${nftImage})` }} />
      <div className="nft-card-overlay" />
      <CardContent className="nft-card-content">
        <Box className="nft-card-header">
          <Box className="nft-card-header-left">
            <Avatar src={profileImage} alt={displayName} className="avatar" />
            <Box>
              <Box className="display-name">
                <Typography variant="h6">{displayName}</Typography>
                {isVerified && <CheckCircleIcon color="primary" fontSize="small" />}
              </Box>
              <Typography variant="body2" color="textSecondary">
                {username}
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
        <Box className="nft-card-image-container">
          <img src={nftImage} alt="NFT" />
          <Box className="nft-card-rating" style={{ background: ratingBorder }}>
            <Typography variant="body2">{rating}</Typography>
          </Box>
          <IconButton className="nft-card-share-icon">
            <ShareIcon />
          </IconButton>
          <Box className="nft-card-info">
            <Typography variant="body2">{bookmarks} bookmarks</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">{price} ETH</Typography>
              <IconButton className="bookmark-icon">
                <BookmarkIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

NFTCard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  nftImage: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

NFTCard.defaultProps = {
  isVerified: false,
};

export default NFTCard;
