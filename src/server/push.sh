#!/bin/bash

set -eux

git pull
git add .
git commit -m "$(date)"
git push
