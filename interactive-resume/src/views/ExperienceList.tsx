import { Resume } from "../models/Resume";
import ExperienceItem from "./ExpeienceItem";

interface Props {
    resume: Resume;
}

export default function ExperienceList({ resume } :Props) {
    const listItems = resume.experience?.map(( experience, index) => {
        return (
            ExperienceItem({ experience })
        )
    })

    return (
        <ul className="ExperienceList">
            {listItems}
        </ul>
    )
}