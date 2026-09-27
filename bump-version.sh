#!/bin/bash
# Seken & Scan - Automated Cache-Busting Version Updater
# Menghasilkan versi berdasarkan tanggal dan jam (contoh: 2026.09.28.0306)

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
echo "Updating cache-busting query in index.html to: v=$TIMESTAMP"

# Menggunakan sed kompatibel macOS (BSD) dan Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' -E "s/styles\.css\?v=[^\"']+/styles.css?v=$TIMESTAMP/g" index.html
  sed -i '' -E "s/script\.js\?v=[^\"']+/script.js?v=$TIMESTAMP/g" index.html
else
  sed -i -E "s/styles\.css\?v=[^\"']+/styles.css?v=$TIMESTAMP/g" index.html
  sed -i -E "s/script\.js\?v=[^\"']+/script.js?v=$TIMESTAMP/g" index.html
fi

echo "Berhasil! Versi aset di index.html telah diperbarui ke: $TIMESTAMP"
