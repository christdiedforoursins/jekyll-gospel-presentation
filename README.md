# Single Gospel Tract Message Jekyll Template

This project is a single-page gospel tract message built using Jekyll and hosted on GitHub Pages. The goal is to make the gospel message easily accessible online through a simple, responsive web page. The project is designed to be easily deployable via GitHub Actions.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Simple and Responsive Design:** A clean, single-page layout optimized for mobile and desktop devices.
- **Built with Jekyll:** Built using Jekyll for easy customization and templating.

## Demo Site

The demo site can be accessed [here](https://www.gospelmessage.info/)

<div><img src="https://github.com/user-attachments/assets/93942752-b7c6-415b-8618-0b4540af8ba3" width="300" height="300"></div>
<div><img src="https://github.com/user-attachments/assets/aba30992-2190-45f1-ac2e-6d54ca6c679b" width="300" height="322"></div>

## Getting Started

### Prerequisites

To work on this project, you'll need the following:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) 
- [Jekyll](https://jekyllrb.com/docs/installation/) 
- A GitHub account

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/gospel-tract-template.git
    cd gospel-tract-template
    ```

2. **Install Dependencies:**
    ```bash
    bundle install
    ```

3. **Serve Locally:**
    ```bash
    bundle exec jekyll serve
    ```
    Open your browser to `http://localhost:4000` to see the site.

## Usage

- **Customizing the Content:**
  - Modify the content of `_includes/tract_message.md` to change the text of the gospel message.
  - Customize the design by editing the `_layouts/default.html` and `_sass/*.scss` files.

## Deployment

### GitHub Pages

This project is set up to automatically deploy to GitHub Pages using GitHub Actions.

1. **Push Changes:**
    Push changes to the `gh-pages-demo-site` branch, and the site will be automatically built and deployed to `https://your-username.github.io/gospel-tract-template`.

2. **Configure GitHub Pages:**
    - Go to your repository settings on GitHub.
    - Under "Pages", set the source to the `gh-pages` branch (created by the CI/CD pipeline).

The workflow file is located at `.github/workflows/jekyll.yml`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
