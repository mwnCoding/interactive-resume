import { Experience } from "../models/Resume";

interface Props {
    experience: Experience;
}

export default function ExperienceItem( { experience }: Props) {
    return (
        <li className="ExperienceListItem">
            <h3>{experience.role.name}</h3>
            <h4>{experience.company.name}</h4>
            <p>{experience.description}</p>
            <div className="ExperienceDatesContainer">
                <p>{new Date(experience.startDate).toLocaleDateString() + "-" + new Date(experience.endDate).toLocaleDateString()}</p>
            </div>
        </li>
    );
}