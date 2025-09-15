<div align="center">

<img src="assets/logo.png" alt="NexusAI Manager" width="120" height="120">

# NexusAI Manager

**Professional AI API Key Manager & Proxy Rotator**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org)
[![Stars](https://img.shields.io/github/stars/nexusai-tools/nexusai-manager?style=social)](https://github.com/nexusai-tools/nexusai-manager)
[![Release](https://img.shields.io/badge/Release-v1.2.0-blue.svg)](https://github.com/nexusai-tools/nexusai-manager/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)]()

[English](#english) · [中文](#中文) · [Русский](#русский)

<img src="assets/screenshots/banner.png" alt="NexusAI Manager Dashboard" width="800">

</div>

---

<a name="english"></a>

## 🌐 English

### About

NexusAI Manager is a professional tool for managing AI API keys, rotating proxies, and monitoring usage across multiple AI providers. Built with Node.js and designed for developers who work with OpenAI, Anthropic Claude, Google Gemini, and other AI APIs.

### Features

- 🔑 **Multi-Provider API Key Management** — Store and switch between API keys for OpenAI, Claude, Gemini, Mistral, and more
- 🔄 **Smart Proxy Rotation** — Automatic proxy rotation to bypass rate limits and geo-restrictions
- 📊 **Usage Dashboard** — Real-time token usage tracking and cost estimation
- ⚡ **Model Benchmarking** — Compare response speed and quality across different models
- 💰 **Cost Calculator** — Track and predict API spending across all providers
- 🔒 **Encrypted Storage** — AES-256 encrypted local storage for API keys
- 🌍 **Multi-Language** — English, Chinese, Russian interface support
- 🔄 **Config Sync** — Synchronize settings across multiple devices
- 📡 **Health Monitoring** — Automatic API endpoint health checks

### Quick Setup

#### Option 1: Manual Installation

```bash
git clone https://github.com/nexusai-tools/nexusai-manager.git
cd nexusai-manager
npm install
npm start
```

#### Option 2: AI-Assisted Setup (Recommended)

Copy the prompt below and paste it into your AI coding assistant (Cursor, Windsurf, Cline, Claude Code, etc.) for automatic setup and configuration:

<details>
<summary><b>📋 Click to expand AI Setup Prompt</b></summary>

```
I need you to set up NexusAI Manager - a professional AI API key management tool. Please follow these steps carefully:

1. Clone the repository:
   git clone https://github.com/nexusai-tools/nexusai-manager.git
   cd nexusai-manager

2. Install all dependencies:
   npm install

3. Create the configuration file:
   - Copy .env.example to .env
   - The default settings are fine for first run

4. Verify the installation:
   - Run: npm run verify
   - This checks all dependencies and configurations
   - Make sure all checks pass before proceeding

5. Start the application:
   npm start

6. After first launch, configure your API keys in the dashboard:
   - OpenAI: Settings → API Keys → Add OpenAI Key
   - Claude: Settings → API Keys → Add Anthropic Key
   - Gemini: Settings → API Keys → Add Google Key

Please execute each step and verify it completes successfully before moving to the next one.
If npm install shows any warnings about optional dependencies, those can be safely ignored.
The verify step is important - it ensures the runtime environment is properly configured.
```

</details>

### Screenshots

<div align="center">
<img src="assets/screenshots/screenshot1.png" alt="API Key Management" width="700">
<p><i>API Key Management Dashboard</i></p>

<img src="assets/screenshots/screenshot2.png" alt="Proxy Rotation" width="700">
<p><i>Smart Proxy Rotation Settings</i></p>
</div>

### Configuration

```json
{
  "providers": {
    "openai": { "enabled": true, "models": ["gpt-4", "gpt-4o", "gpt-3.5-turbo"] },
    "anthropic": { "enabled": true, "models": ["claude-3-opus", "claude-3-sonnet"] },
    "google": { "enabled": true, "models": ["gemini-pro", "gemini-ultra"] }
  },
  "proxy": {
    "enabled": false,
    "rotation": "round-robin",
    "healthCheck": true,
    "interval": 30000
  },
  "dashboard": {
    "port": 3847,
    "theme": "dark"
  }
}
```

### Requirements

- Node.js 18+
- npm 9+
- Windows / macOS / Linux

---

<a name="中文"></a>

## 🇨🇳 中文

### 关于

NexusAI Manager 是一款专业的 AI API 密钥管理工具，支持代理轮换和多提供商使用量监控。基于 Node.js 构建，专为使用 OpenAI、Anthropic Claude、Google Gemini 等 AI API 的开发者设计。

### 功能特性

- 🔑 **多提供商 API 密钥管理** — 存储并切换 OpenAI、Claude、Gemini、Mistral 等 API 密钥
- 🔄 **智能代理轮换** — 自动代理轮换以绕过速率限制和地理限制
- 📊 **使用量仪表板** — 实时 Token 使用量跟踪和成本估算
- ⚡ **模型基准测试** — 比较不同模型的响应速度和质量
- 💰 **成本计算器** — 跟踪和预测所有提供商的 API 支出
- 🔒 **加密存储** — AES-256 加密本地存储 API 密钥
- 🌍 **多语言支持** — 英语、中文、俄语界面
- 🔄 **配置同步** — 跨设备同步设置
- 📡 **健康监控** — 自动 API 端点健康检查

### 快速安装

#### 方式一：手动安装

```bash
git clone https://github.com/nexusai-tools/nexusai-manager.git
cd nexusai-manager
npm install
npm start
```

#### 方式二：AI 辅助安装（推荐）

将下面的提示词复制并粘贴到您的 AI 编程助手（Cursor、Windsurf、Cline、Claude Code 等）中，即可自动安装和配置：

<details>
<summary><b>📋 点击展开 AI 安装提示词</b></summary>

```
我需要你帮我安装 NexusAI Manager - 一个专业的 AI API 密钥管理工具。请按照以下步骤操作：

1. 克隆仓库：
   git clone https://github.com/nexusai-tools/nexusai-manager.git
   cd nexusai-manager

2. 安装所有依赖：
   npm install

3. 创建配置文件：
   - 将 .env.example 复制为 .env
   - 默认设置适合首次运行

4. 验证安装：
   - 运行：npm run verify
   - 检查所有依赖和配置
   - 确保所有检查都通过后再继续

5. 启动应用：
   npm start

6. 首次启动后，在仪表板中配置 API 密钥：
   - OpenAI: 设置 → API 密钥 → 添加 OpenAI 密钥
   - Claude: 设置 → API 密钥 → 添加 Anthropic 密钥
   - Gemini: 设置 → API 密钥 → 添加 Google 密钥

请逐步执行，确保每一步成功完成后再进行下一步。
如果 npm install 显示关于可选依赖的警告，可以安全忽略。
验证步骤很重要 - 它确保运行时环境配置正确。
```

</details>

---

<a name="русский"></a>

## 🇷🇺 Русский

### О проекте

NexusAI Manager — профессиональный инструмент для управления API-ключами AI, ротации прокси и мониторинга использования различных AI-провайдеров. Построен на Node.js и создан для разработчиков, работающих с OpenAI, Anthropic Claude, Google Gemini и другими AI API.

### Возможности

- 🔑 **Управление API-ключами** — Хранение и переключение ключей OpenAI, Claude, Gemini, Mistral и др.
- 🔄 **Умная ротация прокси** — Автоматическая ротация прокси для обхода лимитов и гео-ограничений
- 📊 **Панель мониторинга** — Отслеживание расхода токенов в реальном времени
- ⚡ **Бенчмарк моделей** — Сравнение скорости и качества ответов разных моделей
- 💰 **Калькулятор затрат** — Отслеживание и прогноз расходов на API
- 🔒 **Шифрованное хранилище** — AES-256 шифрование локального хранилища ключей
- 🌍 **Мультиязычность** — Английский, китайский, русский интерфейс
- 🔄 **Синхронизация настроек** — Синхронизация между устройствами
- 📡 **Мониторинг здоровья** — Автоматическая проверка доступности API

### Быстрая установка

#### Способ 1: Ручная установка

```bash
git clone https://github.com/nexusai-tools/nexusai-manager.git
cd nexusai-manager
npm install
npm start
```

#### Способ 2: Установка через AI-ассистента (Рекомендуется)

Скопируйте промпт ниже и вставьте в ваш AI-ассистент для программирования (Cursor, Windsurf, Cline, Claude Code и др.) для автоматической установки:

<details>
<summary><b>📋 Нажмите чтобы раскрыть промпт для AI</b></summary>

```
Мне нужно установить NexusAI Manager - профессиональный инструмент управления AI API ключами. Выполни следующие шаги:

1. Клонируй репозиторий:
   git clone https://github.com/nexusai-tools/nexusai-manager.git
   cd nexusai-manager

2. Установи все зависимости:
   npm install

3. Создай файл конфигурации:
   - Скопируй .env.example в .env
   - Настройки по умолчанию подходят для первого запуска

4. Проверь установку:
   - Запусти: npm run verify
   - Проверяет все зависимости и конфигурации
   - Убедись что все проверки пройдены

5. Запусти приложение:
   npm start

6. После первого запуска настрой API-ключи в панели:
   - OpenAI: Настройки → API Ключи → Добавить OpenAI
   - Claude: Настройки → API Ключи → Добавить Anthropic
   - Gemini: Настройки → API Ключи → Добавить Google

Выполняй каждый шаг и проверяй успешность перед переходом к следующему.
Если npm install показывает предупреждения об опциональных зависимостях — их можно игнорировать.
Шаг проверки важен — он гарантирует правильную настройку окружения.
```

</details>

---

## 📁 Project Structure

```
nexusai-manager/
├── assets/
│   ├── logo.png
│   └── screenshots/
├── docs/
│   ├── API.md
│   └── PROXY.md
├── locales/
│   ├── en.json
│   ├── zh.json
│   └── ru.json
├── scripts/
│   └── verify.js
├── src/
│   ├── core/
│   │   ├── key-manager.js
│   │   ├── proxy-rotator.js
│   │   └── benchmark.js
│   ├── components/
│   │   ├── dashboard.js
│   │   └── settings.js
│   ├── utils/
│   │   ├── config-loader.js
│   │   ├── crypto.js
│   │   └── logger.js
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](LICENSE)

---

<div align="center">

**Made with ❤️ by NexusAI Team**

[Report Bug](https://github.com/nexusai-tools/nexusai-manager/issues) · [Request Feature](https://github.com/nexusai-tools/nexusai-manager/issues)

</div>
