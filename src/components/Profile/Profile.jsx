export const Profile = ({ info }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={info.avatar} alt={info.name} className="avatar" />
        <p className="name">{info.username}</p>
        <p className="tag">@{info.tag}</p>
        <p className="location">{info.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{info.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{info.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{info.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
