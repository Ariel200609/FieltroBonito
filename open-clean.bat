@echo off
echo Abriendo navegador con cache limpia...
start chrome --incognito --disable-cache --disable-application-cache --disable-offline-load-stale-cache http://localhost:5173
echo.
echo Si no tienes Chrome, abre tu navegador en modo incognito y ve a:
echo http://localhost:5173
pause
