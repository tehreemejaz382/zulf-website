@echo off
cd /d "%~dp0"
echo ============================================
echo   ZULF Website - Auto Builder
echo ============================================
echo.
echo Building your website... Please wait.
echo.

call npm run build

echo.
echo ============================================
echo   Build Process Finished
echo ============================================
echo.
pause