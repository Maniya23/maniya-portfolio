import os
import sys
import json
import google.generativeai as genai

# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Read API key from file
api_key_path = os.path.join(script_dir, 'api_key.txt')
with open(api_key_path, 'r') as file:
    api_key = file.read().strip()

genai.configure(api_key=api_key)

# Create the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

# Read input from stdin
user_question = sys.stdin.readline().strip()

# Read conversation data from JSON file
conversation_path = os.path.join(script_dir, 'conversation_data.json')
with open(conversation_path, 'r') as file:
    data = json.load(file)

# Format conversations for the model
conversation = []
for qa in data['conversations']:
    conversation.append(f"Question {qa['question']}")
    conversation.append(f"Answer {qa['answer']}")

# Add the user's question
conversation.append(f"Question {user_question}")

# Generate response
response = model.generate_content(conversation)

print(response.text)
