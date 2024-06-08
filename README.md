# Express Boilerplate Generator (express-gen)

`express-app-generator` is a CLI tool to generate boilerplate Express.js applications. This tool simplifies the process of setting up a new Express.js project with common middleware and configurations.

## Features

- Generates a new Express.js application boilerplate
- Includes common middleware like cors, helmet, and cookie-parser
- Uses dotenv for environment variable management
- Supports TypeScript with type definitions for Express and Node.js

## Prerequisites

- Node.js
- npm
- TypeScript

## Installation

1. Clone the repository to your local machine:

`git clone https://github.com/BigBr41n/express-gen.git`

2. Install the dependencies:

```
npm install
```

3. Linking the Tool Globally

To use `express-app-generator` as a global tool on your machine, you need to create a symbolic link to the executable file.

### Step-by-Step Guide to Link the Tool Globally

1. Remove any existing symlink:
   If you have previously created a symlink that might be pointing to an incorrect path, remove it:
   ```
   sudo rm /usr/local/bin/express-gen
   ```
2. Create a new symlink:
   Replace the path with the actual path to your project directory:

```
sudo ln -s /home/yourusername/Desktop/github/Express-app-generator/dist/bin/Express-Boilerplate-Generator.js /usr/local/bin/express-gen
```

3. Ensure the script has execute permissions:
   Make sure the script file is executable:

```
chmod +x /home/yourusername/Desktop/github-portfolio/Express-app-generator/dist/bin/Express-Boilerplate-Generator.js
```

4. Verify the PATH environment variable:
   Ensure `/usr/local/bin` is included in your PATH. You can check this by running:

```
echo $PATH
```

If `/usr/local/bin` is not listed, add it to your PATH by modifying your shell profile (e.g., `~/.zshrc` for zsh or `~/.bashrc` for bash):

```
export PATH=$PATH:/usr/local/bin
```

After adding it, reload your shell profile:

    ```
    source ~/.zshrc  # or source ~/.bashrc
    ```

## Usage

Once the tool is linked globally, you can generate a new Express.js project by running:

```
express-gen my-new-project
```

This will create a new directory named `my-new-project` with the boilerplate code.

## Project Structure

```
.
├── bin
│   └── Express-Boilerplate-Generator.ts
├── commands
│   └── create.ts
├── dist
│   ├── bin
│   │   └── Express-Boilerplate-Generator.js
│   ├── commands
│   │   └── create.js
│   └── templates
│       ├── app.js
│       ├── db_config.js
│       ├── router.js
│       └── server.js
├── package.json
├── package-lock.json
├── README.md
├── templates
│   ├── app.ts
│   ├── db_config.ts
│   ├── router.ts
│   └── server.ts
└── tsconfig.json
```

## Development

If you want to contribute to the development of `express-app-generator`, just fork it and start your creativity.

## Problems

still there are some problems & bugs will be fixed later
the tool now is 98% functional
