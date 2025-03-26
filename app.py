from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

# Sample text for typing test
sample_texts = [
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All work and no play makes Jack a dull boy.",
    "Practice makes perfect when learning to type.",
    "Success is not final, failure is not fatal.",
    "Life is what happens while you're busy making other plans.",
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Be the change you wish to see in the world.",
    "Imagination is more important than knowledge.",
    "The best way to predict the future is to create it.",
    "Every moment is a fresh beginning.",
    "Keep calm and carry on typing.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "The Internet is not something that you just dump something on."
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-text')
def get_text():
    return jsonify({'text': random.choice(sample_texts)})

if __name__ == '__main__':
    app.run(debug=True)
