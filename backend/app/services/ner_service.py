import re

SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue.js",
    "Angular",
    "Git",
    "GitHub",
    "Bootstrap",
    "Figma",
    "Adobe XD",
    "Responsive Design",
    "Accessibility",
    "Cross-browser Compatibility",
    "REST API",
    "Performance Optimization",
    "Python",
    "SQL",
    "Node.js",
    "Redux",
    "TypeScript"
]


def extract_skills(text):

    text = text.lower()

    found_skills = []

    synonym_map = {
        "responsive design": [
            "responsiveness",
            "responsive website",
            "mobile-first"
        ],

        "rest api": [
            "api",
            "apis"
        ],

        "cross-browser compatibility": [
            "cross browser",
            "browser compatibility"
        ]
    }

    for skill in SKILLS:

        if skill.lower() in text:
            found_skills.append(skill)
            continue

        if skill.lower() in synonym_map:

            for synonym in synonym_map[skill.lower()]:

                if synonym in text:
                    found_skills.append(skill)
                    break

    return list(set(found_skills))