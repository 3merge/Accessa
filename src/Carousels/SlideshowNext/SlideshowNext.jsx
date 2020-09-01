import React from 'react';
import { ButtonNext } from 'pure-react-carousel';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SlideshowIconButton, {
  ButtonWrapper,
} from '../SlideshowIconButton';

export default (props) => (
  <ButtonWrapper {...props}>
    <ButtonNext aria-label="Next">
      <SlideshowIconButton>
        <NavigateNextIcon />
      </SlideshowIconButton>
    </ButtonNext>
  </ButtonWrapper>
);
