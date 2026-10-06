import os

def save_resume(file, upload_folder):
    os.makedirs(upload_folder, exist_ok=True)

    filepath = os.path.join(upload_folder, file.filename)

    file.save(filepath)

    return filepath