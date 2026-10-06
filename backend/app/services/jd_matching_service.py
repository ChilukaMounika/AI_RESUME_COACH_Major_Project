from app.services.ner_service import extract_skills
from app.services.bert_similarity_service import calculate_similarity
from app.services.skills_data import FREE_COURSES


def analyze_resume_against_jd(resume_text, jd_text):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    print("\n========================")
    print("Resume Skills:", resume_skills)
    print("JD Skills:", jd_skills)
    print("========================\n")

    matching_skills = []
    missing_skills = []

    similarities = []

    for jd_skill in jd_skills:

        best_similarity = 0

        print(f"\nChecking JD Skill: {jd_skill}")

        for resume_skill in resume_skills:

            # Exact match
            if jd_skill.lower() == resume_skill.lower():

                similarity = 1.0

            else:
                similarity = calculate_similarity(
                    jd_skill,
                    resume_skill
                )

            print(
                f"{jd_skill} vs {resume_skill} = {similarity}"
            )

            if similarity > best_similarity:
                best_similarity = similarity

        print(
            f"Best similarity for {jd_skill}: {best_similarity}"
        )

        # Threshold
        if best_similarity >= 0.75:

            matching_skills.append(jd_skill)

            similarities.append(best_similarity)

        else:

            missing_skills.append(jd_skill)

            similarities.append(0)

    # Remove duplicates
    matching_skills = list(set(matching_skills))
    missing_skills = list(set(missing_skills))

    # ATS Score
    if similarities:

        ats_score = round(
            (sum(similarities) / len(similarities)) * 100
        )

    else:
        ats_score = 0

    # Strengths
    strengths = []

    if matching_skills:
        strengths.append(
            f"Matched {len(matching_skills)} important skills."
        )

    if ats_score >= 80:

        strengths.append(
            "Excellent semantic alignment with the job description."
        )

    elif ats_score >= 60:

        strengths.append(
            "Good alignment with the required skills."
        )

    elif ats_score >= 40:

        strengths.append(
            "Basic relevant skills are present."
        )

    # Improvements
    improvements = []

    if missing_skills:

        improvements.append(
            "Consider learning the missing skills to improve ATS compatibility."
        )

    if ats_score < 60:

        improvements.append(
            "Enhance your resume by adding projects related to the missing technologies."
        )

    # Recommendations
    recommendations = []

    for skill in missing_skills:

        if skill in FREE_COURSES:

            recommendations.extend(
            FREE_COURSES[skill]
        )

    return {
        "ats_score": int(ats_score),

        "matching_skills": matching_skills,

        "missing_skills": missing_skills,

        "strengths": strengths,

        "improvements": improvements,

        "recommendations": recommendations
    }