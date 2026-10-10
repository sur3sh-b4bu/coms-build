# ⛪ Church Office Management System (COMS) - Production Deployment Build

Pre-compiled, zero-build production distribution of the **Church Office Management System (COMS)**. Ready for immediate deployment on Windows IIS with Application Request Routing (ARR) reverse proxy or standalone local environments.

---

## 📋 Table of Contents

1. [Package Overview & File Reference](#-package-overview--file-reference)
2. [Prerequisites on Target Computer](#-prerequisites-on-target-computer)
3. [Step-by-Step Installation Guide](#-step-by-step-installation-guide)
   - [Step 1: Setup Database & Backend](#step-1-setup-database--backend)
   - [Step 2: Enable IIS Proxy (1-Time Setup)](#step-2-enable-iis-proxy-1-time-setup)
   - [Step 3: Setup IIS Website](#step-3-setup-iis-website)
   - [Step 4: Launch Backend Service](#step-4-launch-backend-service)
4. [Default Logins](#-default-logins)
5. [Database Maintenance & Updates](#-database-maintenance--updates)
6. [LAN / Network Access Configuration](#-lan--network-access-configuration)
7. [Troubleshooting & FAQ](#-troubleshooting--faq)

---

## 📦 Package Overview & File Reference

| File / Folder | What It Is & What It Does |
|---|---|
| **`wwwroot/`** | Pre-compiled Angular production build. Point your IIS Website physical path directly to this folder. Contains `index.html`, bundles, fonts, and assets. |
| **`wwwroot/web.config`** | IIS configuration handling SPA client-side routes (Angular HTML5 pushState) and reverse proxying `/api` & `/socket.io` to Node.js backend on `http://127.0.0.1:4000`. |
| **`backend/`** | Production Node.js Express API. Includes SQL database migration scripts, reports engine (PDF generation), and master registries. |
| **`backend/.env.example`** | Environment template for database credentials, server port, session secret, and default admin settings. |
| **`1-setup-and-migrate.bat`** | **1-Click Installer**: Automatically creates `.env`, installs backend dependencies (`npm install --omit=dev`), runs database schema migrations, and seeds required base masters. |
| **`2-start-backend.bat`** | **Manual Starter**: Launches the Node.js API server on port 4000 in an interactive console window. (Useful for testing or debugging). |
| **`3-install-autostart-service.bat`** | **Windows Service Installer**: Registers a Windows Task Scheduler task (`COMS API`) that automatically launches the backend server in the background at Windows boot as a resilient service. |
| **`4-uninstall-autostart-service.bat`** | **Windows Service Uninstaller**: Removes the `COMS API` scheduled task. |
| **`start-background.vbs`** | Silent VBScript wrapper used by the background service to start Node.js without opening a command prompt window. |
| **`update-client-db.bat`** | **1-Click DB Updater**: Applies the latest schema updates, missing columns, indexes, and settings to an existing database safely. |
| **`full_db_schema_verify_and_update_coms.sql`** | Comprehensive idempotent SQL script containing all table definitions, column syncs, and index verifications. |

---

## 🛠️ Prerequisites on Target Computer

Before installing, ensure the following software is installed on the host machine:

1. **Node.js**: v18 or v20+ LTS — [nodejs.org](https://nodejs.org/)
2. **MySQL Server**: v8.0+ or MariaDB 10.4+ — [dev.mysql.com](https://dev.mysql.com/downloads/mysql/) *(Ensure the MySQL service is running and `root` credentials are known)*.
3. **IIS Modules** *(Required for IIS hosting)*:
   - **IIS URL Rewrite Module 2.1**: [Download URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
   - **Application Request Routing (ARR) 3.0**: [Download ARR](https://www.iis.net/downloads/microsoft/application-request-routing)

---

## 🚀 Step-by-Step Installation Guide

### Step 1: Setup Database & Backend

1. Extract or clone this build directory onto the client machine (e.g., `C:\inetpub\wwwroot\coms` or `C:\COMS`).
2. Open the `backend/` folder and inspect `backend/.env.example`.
3. If your MySQL root password is not `root`, create or edit `backend/.env`:
   ```ini
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=coms_db
   PORT=4000
   ```
4. Double-click **`1-setup-and-migrate.bat`**.
   - This script creates `coms_db` if not present, applies all migrations, and seeds the necessary framework records.
   - Wait until it prints: `Database and dependencies setup completed successfully!`

---

### Step 2: Enable IIS Proxy (1-Time Setup)

Because IIS handles the web traffic and forwards `/api` requests to the Node.js backend on port 4000, IIS must have ARR Proxy enabled:

1. Open **Internet Information Services (IIS) Manager** (`inetmgr`).
2. In the left **Connections** pane, click on the **Server Name** (root server node).
3. In the center pane, double-click **Application Request Routing Cache**.
4. In the right **Actions** pane, click **Server Proxy Settings...**.
5. Check the box **Enable proxy**, leave default settings, and click **Apply** (top right).

*Or run PowerShell as Administrator:*
```powershell
& "$env:windir\system32\inetsrv\appcmd.exe" set config -section:system.webServer/proxy /enabled:"True" /commit:apphost
```

---

### Step 3: Setup IIS Website

1. In IIS Manager, right-click **Sites** > **Add Website...**:
   - **Site name**: `COMS`
   - **Physical path**: `C:\inetpub\wwwroot\coms\wwwroot` *(Point to the `wwwroot` subdirectory of this repository)*
   - **Binding**: `http`, IP: `All Unassigned`, Port: `80` (or `8080`)
2. Click **OK**.

---

### Step 4: Launch Backend Service

You can run the backend in either of two modes:

#### Option A: Background Auto-Start Service (Recommended for Production)
- Right-click **`3-install-autostart-service.bat`** and choose **Run as administrator**.
- This registers the background task that starts automatically with Windows and restarts automatically if terminated.

#### Option B: Interactive Console (For Testing)
- Double-click **`2-start-backend.bat`**.
- Keep the console window open.

---

### Step 5: Open the Application

Open your browser and navigate to:
- **`http://localhost`** (or `http://localhost:8080` if using port 8080).

---

## 🔑 Default Logins

| Role | Username | Temporary Password | Scope |
|---|---|---|---|
| **Church Administrator** | `admin` | `Admin@12345` | Manages single church (Mass Intentions, Certificates, Masters, Reports) |
| **Master Administrator** | `masteradmin` | `MasterAdmin@12345` | Superuser across all churches, central management & switcher |

> **Note**: Both accounts will prompt you to choose a new secure password upon your first sign-in.

---

## 🔄 Database Maintenance & Updates

To update an existing database installation when upgrading versions or adding new features:
1. Double-click **`update-client-db.bat`**.
2. It executes `backend/scripts/update-new-columns.js` which verifies all columns, missing indexes, new permissions, and configuration tables without data loss.

---

## 🌐 LAN / Network Access Configuration

To allow other computers on the office local network (LAN) to access the application:

1. **Find Host IP Address**:
   - Open Command Prompt and type `ipconfig` (e.g., `192.168.1.100`).
2. **Open Port in Windows Firewall**:
   - Run PowerShell as Administrator:
     ```powershell
     New-NetFirewallRule -DisplayName "COMS Web (Port 80)" -Direction Inbound -LocalPort 80 -Protocol TCP -Action Allow
     ```
3. **Access from Other Computers**:
   - Open browser on client PC: `http://192.168.1.100`

---

## ❓ Troubleshooting & FAQ

- **HTTP Error 500.19 / 500.52 (URL Rewrite Error)**:
  - Make sure **IIS URL Rewrite Module 2.1** is installed.
- **HTTP Error 502.3 / Bad Gateway on `/api/...`**:
  - Verify backend is running on port 4000 (`http://localhost:4000/api/health`).
  - Verify **ARR Proxy** is enabled in IIS root server settings.
- **Database Connection Refused**:
  - Verify MySQL service is running in `services.msc`.
  - Check MySQL username and password in `backend\.env`.
- **Restarting Background Service**:
  - Run elevated PowerShell: `taskkill /f /im node.exe` (the Windows Task Scheduler service will automatically relaunch it within 10 seconds).
