import styled from 'styled-components';
import Button from '~/modules/common/components/Button';
import Flexbox from '~/modules/common/components/Flexbox';
import Tag from '~/modules/common/components/Tag';
import type { TagVariant } from '~/modules/common/components/Tag/Tag';
import { colors, typography } from '~/modules/common/utils/styles';

const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Name = styled.span`
  ${typography.size.small}
  ${typography.weight.semibold}
  color: ${colors.gray1};
`;

const StyledReason = styled.p`
  ${typography.size.small}
  color: ${colors.gray1};
  margin: 1rem 0 0 0;
`;

export interface LeaveRequestProps {
  id?: string;
  user: {
    id: string;
    avatar: string;
    fullName: string;
    team: string;
    teamColor: TagVariant;
  };
  reason: string;
}

export default function LeaveRequest({ user, reason }: LeaveRequestProps) {
  const { avatar, fullName, team, teamColor } = user;
  return (
    <>
      <Flexbox alignItems='center' justifyContent='space-between'>
        <Flexbox>
          <Avatar src={avatar} alt={fullName} />
          <Flexbox direction='column' justifyContent='space-between'>
            <Name>{fullName}</Name>
            <Tag label={team} variant={teamColor} />
          </Flexbox>
        </Flexbox>

        <Button label='Acknowledge' size='medium' />
      </Flexbox>
      <StyledReason>{reason}</StyledReason>
    </>
  );
}
