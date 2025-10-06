import "../styles/style.css";

export const TalentLaboratoryTeam = ({ teamMembers }) => {
  return (
    <div className="team-members">
      {teamMembers.map((teamMember, index) => (
        <div key={index} className="team-member">
          <img src={teamMember.image} alt={teamMember.name} className="team-members_img"/>
          <h3>{teamMember.name}</h3>
          <p>{teamMember.role}</p>
        </div>
      ))}
    </div>
  );
};
