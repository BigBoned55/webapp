# Web Application Repository

This repository contains two applications:

## 1. Vanilla JavaScript Web App

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build JavaScript apps in minutes. Use this repo with the [quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=vanilla-javascript) to build and customize a new static site.

This is a _very basic_ HTML web application using no front-end frameworks, located in the `src/` directory.

## 2. C# WPF Application

A Windows Presentation Foundation (WPF) desktop application built with .NET 9.0, located in the `wpf-app/` directory.

### Requirements
- .NET 9.0 SDK or later
- Windows operating system (WPF is Windows-only)

### Building and Running
```bash
cd wpf-app
dotnet build
dotnet run
```

See `wpf-app/README.md` for more details.

---

This repo has a dev container. This means if you open it inside a [GitHub Codespace](https://github.com/features/codespaces), or using [VS Code with the remote containers extension](https://code.visualstudio.com/docs/remote/containers), it will be opened inside a container with all the dependencies already installed.