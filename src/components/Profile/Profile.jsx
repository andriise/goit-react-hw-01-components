import PropTypes from 'prop-types';
import { ProfileCard, StatsList, ProfileSection } from './Profile.styled';
export const Profile = ({ info }) => {
  return (
    <ProfileCard>
      <ProfileSection>
        <img src={info.avatar} alt={info.name} />
        <p>{info.username}</p>
        <p>@{info.tag}</p>
        <p>{info.location}</p>
      </ProfileSection>

      <StatsList>
        <li>
          <span>Followers</span>
          <span> {info.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span> {info.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span> {info.stats.likes}</span>
        </li>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  info: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
