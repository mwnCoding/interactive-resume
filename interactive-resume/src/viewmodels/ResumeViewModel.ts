import { useState, useEffect } from "react";
import { Resume } from "../models/Resume";
import resumeData from "../data/resume.json";

export const useResumeViewModel = () => {
    const [resume, setResume] = useState<Resume | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setResume(resumeData);
            setLoading(false);
        }, 1000)
    }, []);

    return { resume, loading };
}

