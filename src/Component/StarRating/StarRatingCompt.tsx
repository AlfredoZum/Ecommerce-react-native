import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStar as faStarO,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStar as faStarSolid,
  faStarHalfStroke as faStarHalfSolid,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  ratingValue: number;
  maxRating?: number;
  starSize?: number;
  fullColor?: string;
  emptyColor?: string;
  halfColor?: string;
}

const StarRating: React.FC<Props> = ({
  ratingValue,
  maxRating = 5,
  starSize = 24,
  fullColor = 'gold',
  emptyColor = 'gray',
  halfColor = 'gold',
}) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    let icon = faStarO;
    let iconColor = emptyColor;

    if (i <= Math.floor(ratingValue)) {
      icon = faStarSolid;
      iconColor = fullColor;
    } else if (i === Math.ceil(ratingValue) && ratingValue % 1 !== 0) {
      icon = faStarHalfSolid;
      iconColor = halfColor;
    }

    stars.push(
      <FontAwesomeIcon key={i} icon={icon} size={starSize} color={iconColor} />,
    );
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StarRating;
