import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, typography } from '~/modules/common/utils/styles';
import { TransientProps } from '~/types';
import { Bell, ChevronDown } from '../Icons';
import Avatar from './avatar.png';
import Logo from './Logo.svg';

type PropsToTransient = 'fixed';

const StyledHeader = styled.header<TransientProps<HeaderProps, PropsToTransient>>`
  ${({ $fixed }) => {
    const fixed = $fixed as HeaderProps;
    return (
      fixed &&
      css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
      `
    );
  }}

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 1rem 1.5rem;
  background-color: ${colors.white};
  box-shadow: 0px 1px 4px rgba(205, 207, 209, 0.5);
  .right-content {
    display: flex;
    align-items: center;
  }
  .user {
    margin-left: 2rem;
    display: flex;
    align-items: center;
    > * + * {
      margin-left: 0.5rem;
    }
    ${typography.size.small}
  }
`;

interface HeaderProps {
  fixed?: boolean;
}

export function Header({ fixed, ...restProps }: HeaderProps) {
  return (
    <StyledHeader $fixed={fixed} {...restProps}>
      <img src={Logo} alt='ALM' />

      <div className='right-content'>
        <Bell color={colors.gray2} />

        <div className='user'>
          <img src={Avatar} alt='avatar of Olivia Joe' />
          <span>Olivia Joe</span>
          <ChevronDown color={colors.gray2} />
        </div>
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  fixed: PropTypes.bool,
};
