#!/bin/sh

cd /zig/
apt build-dep . -y
dpkg-buildpackage -b -us -uc
