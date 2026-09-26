# ⛪ Church Office Management System (COMS) - Production Deployment Build

Pre-compiled, zero-build production distribution of the Church Office Management System (COMS). Ready for immediate deployment on Windows IIS with Application Request Routing (ARR) reverse proxy.

---

## 🚀 Quick 3-Step Deployment Guide on Client Machine

### 1. Prerequisites on Target Computer
1. **Node.js** (v18 or v20+ LTS) — [nodejs.org](https://nodejs.org/)
2. **MySQL Server** (v8.0+ or MariaDB 10.4+) — ensure MySQL service is running.
3. **IIS Modules**:
   - **IIS URL Rewrite Module 2.1**: [Download URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
   - **Application Request Routing (ARR) 3.0**: [Download ARR](https://www.iis.net/downloads/microsoft/application-request-routing)

---

### Step 1: Setup Database & Backend
1. Clone or copy this repository to the client computer:
   ```powershell
   git clone https://github.com/sur3sh-b4bu/coms-build.git C:\inetpub\wwwroot\coms
   ```
2. Open the cloned folder.
3. *(Optional)* If your MySQL user/password differs from default `root` / `root`, edit `backend\.env.example` or `backend\.env`.
4. Double-click **`1-setup-and-migrate.bat`**:
   - Automatically installs backend production packages and applies all database migrations & seed data.

---

### Step 2: Enable Proxy in IIS Manager (1-Time Setup)

Because IIS forwards `/api` requests to the Node backend on port 4000, IIS needs the Proxy setting turned on:

1. Open **Internet Information Services (IIS) Manager**.
2. Click on your **Server Name** at the very top of the left panel (*Connections* pane).
3. In the middle pane, double-click **Application Request Routing Cache**.
4. In the right pane (*Actions*), click **Server Proxy Settings...**.
5. Check the box **Enable proxy**, then click **Apply** on the top right.

*(Alternatively, run PowerShell as Administrator)*:
```powershell
& "$env:windir\system32\inetsrv\appcmd.exe" set config -section:system.webServer/proxy /enabled:"True" /commit:apphost
```

---

### Step 3: Start Backend & Setup IIS Website

1. **Start Backend**:
   - **Interactive**: Double-click **`2-start-backend.bat`** *(shows console window on port 4000)*.
   - **Windows Service (Background Auto-Start at Boot)**: Right-click **`3-install-autostart-service.bat`** > *Run as administrator*.
2. **Point IIS to `wwwroot`**:
   - In IIS Manager, right-click **Sites** > **Add Website**:
     - **Site name**: `COMS`
     - **Physical path**: `C:\inetpub\wwwroot\coms\wwwroot` *(or your clone path `\wwwroot`)*
     - **Port**: `80` (or `8080` / custom port)
3. Open your browser and navigate to:
   - **`http://localhost`** (or `http://localhost:8080` / your computer's LAN IP).

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
│   ├── web.config                 # IIS SPA rewrite & /api reverse proxy to port 4000
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
├── 2-start-backend.bat            # 1-Click backend server launcher (port 4000)
├── 3-install-autostart-service.bat# Windows Task Scheduler auto-start on boot installer
├── 4-uninstall-autostart-service.bat # Remove auto-start task
├── start-background.vbs           # Background launcher (no console window)
├── web.config                     # Root IIS web.config
└── README.md
```
