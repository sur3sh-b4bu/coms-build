@echo off
title COMS - Uninstall Autostart Service
echo ===================================================
echo   Church Office Management System (COMS)
echo   Uninstalling Windows Autostart Task
echo ===================================================
cd /d "%~dp0backend"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0backend\scripts\windows\uninstall-autostart.ps1"
echo.
pause
