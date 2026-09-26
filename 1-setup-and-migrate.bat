@echo off
title COMS - Database Setup and Install
echo ===================================================
echo   Church Office Management System (COMS)
echo   Step 1: Installing Dependencies and Migrating DB
echo ===================================================
cd /d "%~dp0backend"
if not exist ".env" (
    echo Creating .env file from .env.example...
    copy ".env.example" ".env"
    echo.
    echo [IMPORTANT] Please verify backend\.env credentials if your MySQL settings differ!
)
echo Installing backend dependencies...
call npm install --omit=dev
echo Running database migrations...
node scripts/prepare-test-db.js
echo.
echo Database and dependencies setup completed successfully!
pause
