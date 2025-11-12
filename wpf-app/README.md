# WPF Application

This is a basic C# WPF (Windows Presentation Foundation) application.

## Requirements

- .NET 9.0 SDK or later
- Windows operating system (WPF is Windows-only)

## Building the Application

```bash
cd wpf-app
dotnet build
```

## Running the Application

```bash
cd wpf-app
dotnet run
```

Note: This application can only be built and run on Windows systems as WPF is a Windows-specific technology.

## Project Structure

- `WpfApp.csproj` - Project file containing build configuration
- `App.xaml` - Application definition and resources
- `App.xaml.cs` - Application code-behind
- `MainWindow.xaml` - Main window UI definition
- `MainWindow.xaml.cs` - Main window code-behind

## Features

- Basic WPF window with a button
- Click event handling
- Simple UI layout using StackPanel and Grid
