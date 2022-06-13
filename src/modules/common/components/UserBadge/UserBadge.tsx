import styled from 'styled-components';
import Flexbox from '~/modules/common/components/Flexbox';

import { Tag, TagVariant } from '~/modules/common/components/Tag/Tag';
import { typography, colors } from '~/modules/common/utils/styles';

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

interface UserBadgeProps {
  user: {
    avatar: string;
    fullName: string;
    team: string;
    teamColor: TagVariant;
  };
}
export function UserBadge({ user }: UserBadgeProps) {
  const { avatar, fullName, team, teamColor } = user;
  return (
    <Flexbox>
      <Avatar src={avatar} alt={fullName} />
      <Flexbox direction='column' justifyContent='space-between'>
        <Name>{fullName}</Name>
        <Tag label={team} variant={teamColor} />
      </Flexbox>
    </Flexbox>
  );
}

export default UserBadge;
