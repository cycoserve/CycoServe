# Install Git on a VPS

#### 1. **Install Git on the VPS**

First, ensure that Git is installed on your VPS.

*   SSH into your VPS:

    ```bash
    bashCopy codessh user@your-vps-ip
    ```
*   Install Git:

    ```bash
    bashCopy codesudo apt update
    sudo apt install git
    ```

#### 2. **Generate an SSH Key on the VPS**

You need an SSH key pair to authenticate your VPS with GitHub.

*   Generate the SSH key pair:

    ```bash
    bashCopy codessh-keygen -t ed25519 -C "your-email@example.com"
    ```

    If prompted, save the key in the default location (`/home/your-user/.ssh/id_ed25519`) and set a passphrase (optional).

#### 3. **Add the SSH Key to SSH Agent**

Start the SSH agent and add the key:

```bash
bashCopy codeeval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

#### 4. **Copy the Public Key**

Copy your public key to your clipboard:

```bash
bashCopy codecat ~/.ssh/id_ed25519.pub
```

Copy the output of this command.

#### 5. **Add SSH Key to GitHub**

* Go to your GitHub account: [https://github.com/](https://github.com/)
* Navigate to **Settings** > **SSH and GPG keys** > **New SSH key**.
* Paste your public key in the "Key" field and give it a title (e.g., "VPS Server").

#### 6. **Test the SSH Connection**

Run the following command to test if the VPS can connect to GitHub:

```bash
bashCopy codessh -T git@github.com
```

If connected successfully, you'll see a message like:

```plaintext
plaintextCopy codeHi username! You've successfully authenticated, but GitHub does not provide shell access.
```

#### 7. **Clone a Repository (or Set Up Remote)**

*   Clone a repository to the VPS:

    ```bash
    bashCopy codegit clone git@github.com:username/repository-name.git
    ```

    **Or**, if you already have a project on your VPS and want to link it to a GitHub repo:

    ```bash
    bashCopy codegit remote add origin git@github.com:username/repository-name.git
    ```

#### 8. **Push Code to GitHub**

To push changes from the VPS to GitHub:

```bash
bashCopy codegit add .
git commit -m "Your commit message"
git push origin main
```

Now, your VPS is connected to GitHub, and you can push code directly!
