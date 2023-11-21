import os
import sys

os.system("apt-get -y install git live-build debian-archive-keyring gpg dosfstools genisoimage squashfs-tools xorriso grub-common grub-pc-bin grub-efi-amd64-bin nano")
os.system("mkdir -p -v /ci && cd /ci && lb config && lb build")
