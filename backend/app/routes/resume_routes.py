from flask import Blueprint, jsonify, request

from app.services.resume_service import save_resume
from app.services.pdf_service import extract_text_from_pdf
from app.services.jd_matching_service import analyze_resume_against_jd

resume_bp = Blueprint("resume", __name__)


@resume_bp.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "AI Resume Coach Backend Running"
    })


@resume_bp.route("/analyze", methods=["POST"])
def analyze_resume():

    try:
        # Check whether resume is uploaded
        if "resume" not in request.files:
            return jsonify({
                "error": "No resume uploaded"
            }), 400

        file = request.files["resume"]

        # Empty filename
        if file.filename == "":
            return jsonify({
                "error": "No file selected"
            }), 400

        # Get Job Description
        job_description = request.form.get(
            "job_description",
            ""
        )

        if not job_description.strip():
            return jsonify({
                "error": "Job Description is required"
            }), 400

        # Save Resume
        filepath = save_resume(
            file,
            "uploads"
        )

        # Extract Resume Text
        extracted_text = extract_text_from_pdf(
            filepath
        )

        # Skill Matching + ATS Calculation
        result = analyze_resume_against_jd(
            extracted_text,
            job_description
        )

        # Return Response
        return jsonify({

            "message":
                "Analysis completed successfully",

            "filename":
                file.filename,

            "ats_score":
                result["ats_score"],

            "matching_skills":
                result["matching_skills"],

            "missing_skills":
                result["missing_skills"],

            "strengths":
                result["strengths"],

            "improvements":
                result["improvements"],

            "recommendations":
                result["recommendations"]

        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500