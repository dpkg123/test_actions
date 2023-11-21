import os
import sys

os.system("apt-get -y install git live-build debian-archive-keyring gpg dosfstools genisoimage squashfs-tools xorriso grub-common grub-pc-bin grub-efi-amd64-bin nano")
os.system("cd && lb config noauto --bootappend-live boot=live components locales=zh_CN.UTF-8 username=test password=test && lb build")
