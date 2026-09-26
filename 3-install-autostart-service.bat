@echo off
:: Self-elevate to Administrator if not already elevated
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Requesting Administrator privileges...
    powershell -NoProfile -Command "Start-Process cmd -ArgumentList '/c `\"%~f0`\"' -Verb RunAs"
    exit /b
)

title COMS - Install Autostart Service
echo ===================================================
echo   Church Office Management System (COMS)
echo   Installing Windows Boot Autostart Task
echo ===================================================
cd /d "%~dp0backend"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0backend\scripts\windows\install-autostart.ps1"
echo.
pause
