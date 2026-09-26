# ⛪ Church Office Management System (COMS) - Production Deployment Build

Pre-compiled, zero-build production distribution of the Church Office Management System (COMS). Ready for immediate deployment on Windows IIS with **iisnode** or standalone background service.

---

## 🚀 Quick Deployment Guide on Client Machine

### 1. Prerequisites on Target Computer
1. **Node.js** (v18 or v20+ LTS) — [nodejs.org](https://nodejs.org/)
2. **MySQL Server** (v8.0+ or MariaDB 10.4+) — ensure MySQL service is running.
3. **IIS Modules**:
   - **IIS URL Rewrite Module 2.1**: [Download URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
   - **iisnode for IIS**: [Download iisnode (iisnode-full-v0.2.21-x64.msi)](https://github.com/Azure/iisnode/releases)

---

### 2. Setup Database & Backend (1-Click)
1. Clone or copy this repository to the client computer (e.g. `C:\inetpub\wwwroot\coms` or `C:\coms-build`):
   ```powershell
   git clone https://github.com/sur3sh-b4bu/coms-build.git C:\inetpub\wwwroot\coms
   ```
2. Open the cloned folder.
3. *(Optional)* If your MySQL user/password differs from default `root` / `root`, edit `backend\.env.example` or create `backend\.env` before running setup.
4. Double-click **`1-setup-and-migrate.bat`**:
   - Automatically installs backend production packages and applies all database migrations & seed data.

---

### 3. Setup Windows IIS (iisnode Host)

1. Open **Internet Information Services (IIS) Manager**.
2. Right-click **Sites** > **Add Website**:
   - **Site name**: `COMS`
   - **Physical path**: `C:\inetpub\wwwroot\coms\wwwroot` *(or your clone path `\wwwroot`)*
   - **Port**: `80` (or `8080` / custom port)
3. Grant IIS Application Pool permissions (if needed):
   - Right-click `wwwroot` folder > **Properties** > **Security** > **Edit** > **Add** `IIS_IUSRS` with **Read & execute** permissions.
4. Open your browser and navigate to:
   - `http://localhost` (or `http://localhost:8080` / your computer's LAN IP).

> 💡 **Note on `iisnode/` folder**: When IIS runs your site, IIS creates an `iisnode/` folder dynamically inside `wwwroot` to hold runtime log files (e.g. `server.js.logs`). This folder is auto-created by IIS at runtime and is intentionally excluded from Git.

---

### 🔑 Default Logins

| Role | Username | Temporary Password |
|---|---|---|
| **Church Admin** | `admin` | `Admin@12345` |
| **Master Administrator** | `masteradmin` | `MasterAdmin@12345` |

*(You will be prompted to set a new secure password on first sign-in)*

---

### 📁 Repository Structure

```
├── wwwroot/                       # Pre-compiled Angular production build for IIS
│   ├── index.html
│   ├── server.js                  # iisnode bridge entry point
│   ├── web.config                 # IIS SPA rewrite & iisnode API handler
│   ├── assets/
│   ├── fonts/
│   └── *.js, *.css
├── backend/                       # Node.js Express backend
│   ├── src/                       # Application code & routes
│   ├── database/                  # Complete SQL migrations & seed data
│   ├── scripts/                   # Migration, backup & Windows service utilities
│   ├── package.json
│   └── .env.example
├── 1-setup-and-migrate.bat        # 1-Click database setup & migration script
├── 2-start-backend.bat            # Standalone launcher (terminal window)
├── 3-install-autostart-service.bat# Windows Task Scheduler auto-start on boot installer
├── 4-uninstall-autostart-service.bat # Remove auto-start task
├── start-background.vbs           # Background launcher
├── web.config                     # Root IIS web.config
└── README.md
```
