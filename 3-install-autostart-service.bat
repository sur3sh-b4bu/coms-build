@echo off
title COMS - Install Autostart Service
echo ===================================================
echo   Church Office Management System (COMS)
echo   Installing Windows Boot Autostart Task
echo ===================================================
cd /d "%~dp0backend"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0backend\scripts\windows\install-autostart.ps1"
echo.
pause
