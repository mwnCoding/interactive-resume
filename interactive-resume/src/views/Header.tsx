import { Resume } from "../models/Resume";

interface Props {
    resume: Resume;
}

export default function Header({ resume }: Props) {
    return (
        <header className="Header">
            <img className="" src={resume.portrait} alt="Portrait of person" />
            <div className="HeadingsContainer">
                <h1 className="NameHeading">{resume.name}</h1>
                <h2 className="">{resume.title}</h2>
            </div>
        </header>
    );
}