import { colors, dimensions, typography } from '@erxes/ui/src/styles';
import { rgba } from '@erxes/ui/src/styles/ecolor';
import { DateContainer } from '@erxes/ui/src/styles/main';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const coreSpace = `${dimensions.coreSpacing}px`;
const unitSpace = `${dimensions.unitSpacing}px`;

const ActionButtons = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  transition: all 0.3s ease;
  width: 0;

  * {
    padding: 0;
    margin-left: ${dimensions.unitSpacing}px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const ColorPick = styled.div`
  border-radius: 4px;
  display: inline-block;
  padding: 3px;
  border: 1px solid ${colors.borderDarker};
  cursor: pointer;
`;

const ColorPicker = styled.div`
  width: 80px;
  height: 27px;
  border-radius: 2px;
`;

const MarkdownWrapper = styled.div`
  position: relative;
  background: ${colors.colorWhite};
  border: 1px solid ${colors.colorShadowGray};
  border-radius: 2px;
  margin: ${dimensions.unitSpacing - 5}px 0;

  > div {
    background: none;
  }

  button {
    position: absolute;
    right: ${coreSpace};
    top: ${coreSpace};
  }

  pre {
    border: none;
    background: none;
    margin: 0;
    padding: 20px;
  }
`;

const ExpandWrapper = styled.div`
  flex: 1;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Description = styled.div`
  color: ${colors.colorCoreGray};
  font-size: 12px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const SubHeading = styled.h4`
  border-bottom: 1px dotted ${colors.colorShadowGray};
  padding-bottom: ${dimensions.unitSpacing}px;
  font-size: ${typography.fontSizeHeading7}px;
  margin: ${dimensions.coreSpacing}px 0 ${dimensions.unitSpacing}px;
  color: ${colors.colorCoreDarkGray};

  span {
    display: block;
    text-transform: none;
    font-weight: normal;
    margin-top: ${dimensions.unitSpacing}px;
    color: ${colors.colorCoreGray};
    font-size: 12px;
  }
`;

const WidgetBackgrounds = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export {
  MarkdownWrapper,
  ColorPick,
  ColorPicker,
  ActionButtons,
  ExpandWrapper,
  Description,
  FlexRow,
  SubHeading,
  WidgetBackgrounds
};