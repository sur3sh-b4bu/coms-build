# ⛪ Church Office Management System (COMS) - Production Deployment Build

Pre-compiled, zero-build production distribution of the Church Office Management System (COMS). Ready for immediate deployment on Windows IIS.

---

## 🚀 Quick Deployment Guide on Client Machine

### 1. Prerequisites on Target Computer
1. **Node.js** (v18 or v20+ LTS) — [nodejs.org](https://nodejs.org/)
2. **MySQL Server** (v8.0+ or MariaDB 10.4+) — ensure MySQL service is running.
3. **IIS Modules**:
   - **IIS URL Rewrite Module 2.1**: [Download URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
   - **Application Request Routing (ARR) 3.0**: [Download ARR](https://www.iis.net/downloads/microsoft/application-request-routing)

---

### 2. Setup Database & Backend (1-Click)
1. Clone or copy this repository to the client computer (e.g. `C:\inetpub\wwwroot\coms` or `D:\coms-build`):
   ```powershell
   git clone https://github.com/sur3sh-b4bu/coms-build.git C:\inetpub\wwwroot\coms
   ```
2. Open the cloned folder.
3. *(Optional)* If your MySQL user/password differs from default `root` / `root`, edit `backend\.env.example` or create `backend\.env` before running setup.
4. Double-click **`1-setup-and-migrate.bat`**:
   - Automatically installs backend production packages and applies all database migrations & seed data.
5. Start the backend:
   - **Option A (Interactive)**: Double-click **`2-start-backend.bat`** (shows terminal window).
   - **Option B (Silent Background)**: Double-click **`start-background.vbs`** (runs quietly with no console window).
   - **Option C (Windows Auto-Start on Boot)**: Right-click **`3-install-autostart-service.bat`** > *Run as administrator* (creates Windows Task Scheduler service that auto-starts on boot and survives restarts).

---

### 3. Setup Windows IIS

1. Open **Internet Information Services (IIS) Manager**.
2. **Enable ARR Reverse Proxy** (Required for API proxying):
   - In IIS Manager, click your **Server Node** (top of the Connections pane).
   - Double-click **Application Request Routing Cache**.
   - In the Actions pane on the right, click **Server Proxy Settings...**.
   - Check **Enable proxy**, then click **Apply** in the Actions pane.
3. **Add Website** (or configure Default Web Site):
   - Right-click **Sites** > **Add Website**:
     - **Site name**: `COMS`
     - **Physical path**: `C:\inetpub\wwwroot\coms\wwwroot` *(or your clone path `\wwwroot`)*
     - **Port**: `80` (or `8080` / custom port)
4. Open your browser and navigate to:
   - `http://localhost` (or `http://localhost:8080` / your computer's LAN IP).

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
│   ├── web.config                 # IIS SPA rewrite & /api reverse proxy configuration
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
├── 2-start-backend.bat            # 1-Click backend server launcher
├── 3-install-autostart-service.bat# Install Windows auto-start on boot task
├── 4-uninstall-autostart-service.bat # Remove auto-start task
├── start-background.vbs           # Background launcher (no console window)
├── web.config                     # Root IIS web.config
└── README.md
```

---

### 🛠️ Troubleshooting

- **502.5 / 502.3 Bad Gateway on `/api` calls**: Make sure the backend server is running on port `4000` (`2-start-backend.bat` or Task Scheduler) and ARR Proxy is enabled in IIS Manager.
- **Angular Routes 404 on page refresh**: Ensure **IIS URL Rewrite Module** is installed and `web.config` is present in `wwwroot`.
- **Database connection error**: Verify MySQL is running (`services.msc`) and check credentials in `backend\.env`.
