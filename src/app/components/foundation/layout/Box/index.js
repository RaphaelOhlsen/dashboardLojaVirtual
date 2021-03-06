import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}

  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}

  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('left')}
  ${propToStyle('right')}
  ${propToStyle('cursor')}
  ${propToStyle('width')}
  ${propToStyle('height')}

  ${propToStyle('width')}
  ${propToStyle('minWidth')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${({ theme, borderRadiusTheme }) =>
    borderRadiusTheme && `border-radius: ${theme.borderRadiusTheme}`}
`;
