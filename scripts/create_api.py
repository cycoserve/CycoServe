import os
import inflect

# Initialize the inflect engine
inflect_engine = inflect.engine()

# Define the template directory and target directories
TEMPLATE_DIR = "templates"
MODEL_DIR = "pages/api"



def create_dataset(dataset_name):
    # Get singular and plural forms of the dataset name
    singular_lowercase = inflect_engine.singular_noun(dataset_name.lower())
    if not singular_lowercase:
        singular_lowercase = (
            dataset_name.lower()
        )  # If it can't singularize, assume it's already singular

    singular_uppercase = singular_lowercase.capitalize()
    plural_lowercase = inflect_engine.plural_noun(dataset_name.lower())
    plural_uppercase = plural_lowercase.capitalize()

    # Define the replacements
    replacements = {
        "{{lowercase}}": singular_lowercase,
        "{{Uppercase}}": singular_uppercase,
        "{{pluralLowercase}}": plural_lowercase,
        "{{pluralUppercase}}": plural_uppercase,
    }

    # Create target directories if they don't exist
    api_dir = os.path.join(MODEL_DIR, plural_lowercase)  # plural


    os.makedirs(api_dir, exist_ok=True)


    # Define the files to copy and modify
    files_to_create = [
        (
            os.path.join(TEMPLATE_DIR, "api", "lowercase", "index.ts.txt"),
            os.path.join(api_dir, "index.ts"),
        ),
        (
            os.path.join(TEMPLATE_DIR, "api", "lowercase", "[slug].ts.txt"),
            os.path.join(api_dir, "[slug].ts"),
        ),
       
    ]

    for src, dest in files_to_create:
        # Ensure the source file exists
        if not os.path.isfile(src):
            print(f"Source file not found: {src}")
            continue
        with open(src, "r") as file:
            content = file.read()
            for key, value in replacements.items():
                content = content.replace(key, value)
        with open(dest, "w") as file:
            file.write(content)


if __name__ == "__main__": 
    
    import argparse

    parser = argparse.ArgumentParser(
        description="Create dataset files based on templates."
    )
    parser.add_argument(
        "dataset_name", type=str, help="The name of the dataset to create."
    )
    args = parser.parse_args()

    create_dataset(args.dataset_name)
