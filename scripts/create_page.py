import os
import inflect

# Initialize the inflect engine
inflect_engine = inflect.engine()

# Define the template directory and target directories
TEMPLATE_DIR = "templates/pages"
PAGES_DIR = "pages"

def create_page(page_name):
    # Get singular and plural forms of the page name
    singular_lowercase = inflect_engine.singular_noun(page_name.lower())
    if not singular_lowercase:
        singular_lowercase = page_name.lower()  # If it can't singularize, assume it's already singular

    singular_uppercase = singular_lowercase.capitalize()
    plural_lowercase = inflect_engine.plural_noun(page_name.lower())
    plural_uppercase = plural_lowercase.capitalize()

    # Define the replacements
    replacements = {
        "{{lowercase}}": singular_lowercase,
        "{{Uppercase}}": singular_uppercase,
        "{{pluralLowercase}}": plural_lowercase,
        "{{pluralUppercase}}": plural_uppercase,
    }

    # Create the target directory if it doesn't exist
    page_dir = os.path.join(PAGES_DIR, singular_lowercase)
    os.makedirs(page_dir, exist_ok=True)

    # Define the files to copy and modify
    files_to_create = [
        (os.path.join(TEMPLATE_DIR, "index.tsx.txt"), os.path.join(page_dir, "index.tsx")),
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

    parser = argparse.ArgumentParser(description="Create a page file based on a template.")
    parser.add_argument("page_name", type=str, help="The name of the page to create.")
    args = parser.parse_args()

    create_page(args.page_name)
