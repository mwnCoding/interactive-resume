export interface Resume {
    name: string;
    title: string;
    about: string;
    experience?: Experience[];
    skills: Skill[];
    education: Education[];
    portrait: string;
    companies: Company[];
    technologies: Technology[];
    roles: Role[];
}

export interface Experience {
    company: Company;
    role: Role;
    startDate: string;
    endDate: string;
    description: string;
    technologies: Technology[];
}

export interface Education {

}

export interface Company {
    name: string;
    description: string;
    logo: string;
    website: string;
}

export interface Skill {
    name: string;
    categories: SkillCategory[];
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface Technology {
    name: string;
}

export interface Role {
    name: string;
}