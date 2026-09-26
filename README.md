# Church Office Management System (COMS) - Production Deployment Build

Pre-compiled, zero-build production distribution of the Church Office Management System (COMS). Ready for immediate deployment on Windows IIS or standalone execution.

---

## 🚀 Quick Deployment Guide on Client Machine

### 1. Prerequisites
- **Node.js** (v18 or newer)
- **MySQL Server** (v8.0+ or MariaDB 10.4+)
- **Windows IIS** (with **URL Rewrite module** and **Application Request Routing (ARR)** installed)

---

### 2. Setup Database & Backend (1-Click)
1. Clone this repository onto the client computer:
   ```powershell
   git clone https://github.com/sur3sh-b4bu/coms-build.git C:\inetpub\wwwroot\coms
   ```
2. Double-click `1-setup-and-migrate.bat` (or run it via command line).
   - It will install production packages and automatically apply all 42 MySQL database migrations.
3. Start the backend:
   - Double-click `2-start-backend.bat` (or double-click `start-background.vbs` to run quietly in background without a terminal window).

---

### 3. Setup Windows IIS

1. Open **Internet Information Services (IIS) Manager**.
2. Right-click **Sites** > **Add Website**:
   - **Site name**: `COMS`
   - **Physical path**: `C:\inetpub\wwwroot\coms\wwwroot`
   - **Port**: `80` (or your preferred port, e.g., `8080`)
3. **Enable ARR Reverse Proxy** (Required for API proxying):
   - In IIS Manager, click your server root node.
   - Double-click **Application Request Routing Cache**.
   - Click **Server Proxy Settings...** on the right sidebar.
   - Check **Enable proxy**, click **Apply**.

Your Church Office Management System is now live and fully functioning!

---

## 📁 Repository Structure

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
│   ├── scripts/                   # Migration & backup utilities
│   ├── package.json
│   └── .env.example
├── 1-setup-and-migrate.bat        # 1-Click database setup script
├── 2-start-backend.bat            # 1-Click backend server launcher
├── start-background.vbs           # Background launcher (no console window)
└── README.md
```
