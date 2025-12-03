# 📚 IT Tutorials & Resources

Welcome to the **IT Tutorials & Resources** repository! This project is a comprehensive collection of learning materials, code examples, and practical projects designed to help developers master various technologies, including **AI Agents**, **TypeScript**, **Python**, **JavaScript**, and **Streamlit**.

Whether you are a beginner looking to understand the basics or an experienced developer exploring advanced AI agent architectures, this repository has something for you.

---

## 🚀 Key Features & Modules

### 🤖 AI Agents (IT MATE PK)
A step-by-step masterclass on building advanced AI agents using **Google Gemini** and **Groq**.
- **Step-by-Step Learning**: From basic agent creation to complex orchestration.
- **Topics Covered**:
  - Tool usage & Custom Functions
  - Context & Session Management
  - Handoffs between agents
  - Tracing & Guardrails
  - Streaming responses

### 📘 TypeScript Mastery
Extensive resources to master TypeScript, the superset of JavaScript.
- **Basic to Advanced**: Covers everything from simple types to concurrency and modules.
- **Practical Assignments**: Includes "45 assignments" and a "Rock, Paper, Scissors" game.
- **Deep Dives**: JSON handling, concurrency patterns, and more.

### 📊 Streamlit Applications
Learn how to build interactive data apps and dashboards in pure Python.
- **Examples**: `happyBirthDay.py` and various class exercises.
- **Media Integration**: Handling images and video within Streamlit apps.

### 🐍 Python & 📜 JavaScript
Foundational scripts and documents to strengthen your core programming skills.
- **Python**: Data types, string manipulation, REST concepts.
- **JavaScript**: Fundamental concepts and tutorials.

---

## 📂 Folder Structure

```text
f:/Arsalan Khan/Tutorials/
├── 📁 IT MATE PK/          # AI Agent Tutorials (Steps 00-15)
│   ├── step00...step15     # Progressive lessons on building agents
├── 📁 Typescript/          # TypeScript Learning Path
│   ├── Basic Typescript/
│   ├── Advanced Typescript/
│   ├── 45 assignments/
│   └── ...
├── 📁 streamlit/           # Streamlit Python Apps & Media
├── 📁 Python/              # Python Basics Scripts
├── 📁 Javascript/          # JavaScript Resources
├── 📁 Crash Course/        # Lecture Notes & Docs
└── 📁 MySQL Documentation/ # Database Resources
```

---

## 🛠️ Getting Started

### Prerequisites
To make the most of this repository, ensure you have the following installed:
- **Python 3.10+**: For AI agents and Streamlit apps.
- **Node.js & npm**: For TypeScript and JavaScript projects.
- **Git**: To clone and manage the repository.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Tutorials
    ```

2.  **Navigate to a specific module:**
    *For example, to explore the AI Agent tutorials:*
    ```bash
    cd "IT MATE PK/step00 (Make agent with gemini and groq)"
    ```

3.  **Install Dependencies:**
    *Most Python folders will require specific packages. It is recommended to create a virtual environment.*
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt # If available, otherwise install packages manually (e.g., pip install google-generativeai streamlit)
    ```

    *For TypeScript/Node projects:*
    ```bash
    npm install
    ```

---

## 🏃 Usage Guide

### Running AI Agent Examples
Navigate to any step folder in `IT MATE PK` and run the Python script:
```bash
python main.py
# or specific file names found in the directory
```

### Running Streamlit Apps
Navigate to the `streamlit` directory:
```bash
streamlit run happyBirthDay.py
```

### Running TypeScript Code
Compile and run using `tsc` and `node`, or use `ts-node` for direct execution:
```bash
npx ts-node main.ts
```

---

## 🔮 Future Improvements
- [ ] Add `requirements.txt` files for each Python module to simplify installation.
- [ ] Create a unified `package.json` for all JavaScript/TypeScript projects.
- [ ] Add more complex projects combining Streamlit UI with AI Agents.
- [ ] Expand the "Crash Course" section with Markdown notes instead of Docx.

---

## 📄 License
This project is for educational purposes. Please check individual folders for specific license information if applicable.
