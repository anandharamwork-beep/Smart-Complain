from flask import Flask, render_template, request

app = Flask(__name__)

# Simple AI categorization
def categorize_complaint(text):
    text = text.lower()

    if "road" in text or "pothole" in text:
        return "Road Department"

    elif "water" in text or "pipe" in text:
        return "Water Department"

    elif "electricity" in text or "power" in text:
        return "Electricity Department"

    elif "garbage" in text or "waste" in text:
        return "Sanitation Department"

    else:
        return "General Department"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form["name"]
    complaint = request.form["complaint"]

    department = categorize_complaint(complaint)

    return render_template(
        "result.html",
        name=name,
        complaint=complaint,
        department=department
    )

if __name__ == "__main__":
    app.run(debug=True)
