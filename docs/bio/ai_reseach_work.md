Efficient Domain Adaptation for Real-World LLM Use Cases: Large base models give us a huge starting point — but they still need help to understand specific domains and workflows.
Working with Luong NGUYEN, I explored how to enhance foundation models through:
    ✨ Supervised fine-tuning 
    ✨ PEFT / LoRA adapters 
    ✨ Instruction-style data synthesis pipeline: /Users/nosakharedanielahanor/Developer/MI/raw-to-rich
    ✨ Evaluation pipeline: /Users/nosakharedanielahanor/Developer/MI/llm-eval
    ✨ Model merging techniques

    📌 Use Case: Phishing Email Analysis
    We transformed a security dataset into instructional examples, fine-tuned a lightweight adapter, and enabled the model to reason about threats — not just classify them.

    The results: ✅ Better alignment to domain-specific tasks ✅ No need to retrain billions of parameters ✅ Data stays in-house for security & compliance

    🔗 Try the Live Demo: https://huggingface.co/spaces/nosadaniel/fined-model

    🧰 Open-Source Resources:
    1. LoRA Adapter: https://huggingface.co/nosadaniel/llama3-1-8b-tuned
    2. Instruction Dataset: https://huggingface.co/datasets/nosadaniel/phishing-email-training-dataset
    3. Training Notebook: https://colab.research.google.com/drive/1hjLVIx0QZ57dNkAaLahPSwoYZNQkpVXz