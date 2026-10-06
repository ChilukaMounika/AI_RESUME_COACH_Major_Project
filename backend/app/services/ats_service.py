import re


# Skills required for the target role
REQUIRED_SKILLS = [
    "Python",
    "SQL",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Machine Learning",
    "Data Analysis",
    "Git",
    "Docker"
]


# Course recommendations
COURSE_RECOMMENDATIONS = {
    "Python": {
        "course": "Python for Everybody",
        "platform": "Coursera"
    },
    "SQL": {
        "course": "SQL for Data Science",
        "platform": "Coursera"
    },
    "React": {
        "course": "React - The Complete Guide",
        "platform": "Udemy"
    },
    "JavaScript": {
        "course": "JavaScript Essentials",
        "platform": "Udemy"
    },
    "HTML": {
        "course": "HTML & CSS Bootcamp",
        "platform": "Udemy"
    },
    "CSS": {
        "course": "CSS Masterclass",
        "platform": "Udemy"
    },
    "Machine Learning": {
        "course": "Machine Learning Specialization",
        "platform": "Coursera"
    },
    "Data Analysis": {
        "course": "Google Data Analytics",
        "platform": "Coursera"
    },
    "Git": {
        "course": "Git and GitHub Bootcamp",
        "platform": "Udemy"
    },
    "Docker": {
        "course": "Docker Mastery",
        "platform": "Udemy"
    }
}


def analyze_resume_text(resume_text):
    """
    Analyze extracted resume text and return ATS insights.
    """

    resume_lower = resume_text.lower()

    matching_skills = []
    missing_skills = []

    # Find matching skills
    for skill in REQUIRED_SKILLS:
        if skill.lower() in resume_lower:
            matching_skills.append(skill)
        else:
            missing_skills.append(skill)

    # ATS Score
    ats_score = int(
        (len(matching_skills) / len(REQUIRED_SKILLS)) * 100
    )

    # Strengths
    strengths = []

    if len(matching_skills) >= 7:
        strengths.append(
            "Strong alignment with required skills."
        )

    if "project" in resume_lower:
        strengths.append(
            "Projects section is included."
        )

    if "education" in resume_lower:
        strengths.append(
            "Educational background is clearly mentioned."
        )

    if not strengths:
        strengths.append(
            "Resume includes relevant information."
        )

    # Improvements
    improvements = []

    if missing_skills:
        improvements.append(
            "Consider learning the missing technical skills."
        )

    if "project" not in resume_lower:
        improvements.append(
            "Add projects to strengthen your resume."
        )

    if "experience" not in resume_lower:
        improvements.append(
            "Include internships or practical experience if available."
        )

    # Recommended courses
    recommendations = []

    for skill in missing_skills:
        if skill in COURSE_RECOMMENDATIONS:
            recommendations.append({
                "skill": skill,
                "course": COURSE_RECOMMENDATIONS[skill]["course"],
                "platform": COURSE_RECOMMENDATIONS[skill]["platform"]
            })

    return {
        "ats_score": ats_score,
        "matching_skills": matching_skills,
        "missing_skills": missing_skills,
        "strengths": strengths,
        "improvements": improvements,
        "recommendations": recommendations
    }