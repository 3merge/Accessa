import React from 'react';
import { ButtonBack } from 'pure-react-carousel';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SlideshowIconButton, {
  ButtonWrapper,
} from '../SlideshowIconButton';

export default (props) => (
  <ButtonWrapper {...props}>
    <ButtonBack>
      <SlideshowIconButton>
        <NavigateBeforeIcon />
      </SlideshowIconButton>
    </ButtonBack>
  </ButtonWrapper>
);
