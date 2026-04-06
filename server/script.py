import os
import sys
import json
from google import genai

# Directory project root (parent of server/)
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Env on Render (any one is enough; GEMINI_API_KEY is not required). Local: api_key.txt
api_key = (
    os.environ.get("GEMINI_API_KEY")
    or os.environ.get("GOOGLE_API_KEY")
    or os.environ.get("API_KEY")
).strip()
if not api_key:
    api_key_path = os.path.join(base_dir, "api_key.txt")
    with open(api_key_path, "r") as file:
        api_key = file.read().strip()

client = genai.Client(api_key=api_key)

# See https://ai.google.dev/gemini-api/docs/quickstart
MODEL = "gemini-3-flash-preview"

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

user_question = sys.stdin.readline().strip()

conversation_path = os.path.join(base_dir, "conversation_data.json")
with open(conversation_path, "r") as file:
    data = json.load(file)

lines = []
for qa in data["conversations"]:
    lines.append(f"Question {qa['question']}")
    lines.append(f"Answer {qa['answer']}")
lines.append(f"Question {user_question}")

prompt = "\n".join(lines)

response = client.models.generate_content(
    model=MODEL,
    contents=prompt,
    config=generation_config,
)

print(response.text)
