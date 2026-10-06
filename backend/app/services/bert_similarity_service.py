from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

print("Loading BERT model...")

model = SentenceTransformer("all-MiniLM-L6-v2")

print("BERT loaded successfully.")


def calculate_similarity(text1, text2):
    """
    Calculate semantic similarity between two texts.
    """

    embeddings = model.encode([text1, text2])

    similarity = cosine_similarity(
        [embeddings[0]],
        [embeddings[1]]
    )[0][0]

    return float(similarity)


def calculate_ats_score(resume_text, jd_text):
    """
    Resume vs JD semantic similarity score.
    """

    similarity = calculate_similarity(
        resume_text,
        jd_text
    )

    return round(similarity * 100)