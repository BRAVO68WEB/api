#!/bin/bash

# Get current year
YEAR=$(date +"%Y")

# Get current month
MONTH=$(date +"%m")

rm -rf GeoLite2-City.mmdb

URL="https://download.db-ip.com/free/dbip-city-lite-$YEAR-$MONTH.mmdb.gz"
wget -O "GeoLite2-City.gz" "$URL"

# unzip gz file
gzip -d GeoLite2-City.gz


mv GeoLite2-City "GeoLite2-City.mmdb"

rm -rf GeoLite2-City.gz
echo "Done!!"