@echo off
title COMS Backend Server
echo ===================================================
echo   Church Office Management System (COMS)
echo   Backend Server starting on http://localhost:4000
echo ===================================================
cd /d "%~dp0backend"
npm start
