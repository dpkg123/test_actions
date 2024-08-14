#!/usr/bin/env python3

import sys, os
import shutil

if len(sys.argv) != 3:
	print(f'Usage: {sys.argv[0]} /dev/<usb-file> <image-file>')
	exit(1)

usb_dev = sys.argv[1]
assert usb_dev.startswith('/dev/'), "USB file must start with: /dev/.."
image_file = sys.argv[2]
assert os.path.exists(image_file), "Image file is not accessible."

os.system(f'umount -l {usb_dev}* >/dev/null 2>&1')
os.system(f'dd if={image_file} of={usb_dev} bs=1M status=progress && sync')
os.system(f'sleep 1 && partprobe && sleep 1')
os.system(f"/bin/echo -e 'n\n\n\n\nt\n\n11\nw\n' | fdisk -w never -t gpt {usb_dev} >/dev/null 2>&1")

if int(os.environ.get('NTFS', 0)) != 1:
	os.system(f'mkfs.vfat -F32 -n my-usb {usb_dev}*4')
else:
	os.system(f'mkfs.ntfs -f -L my-usb {usb_dev}*4')

print('DONE.')
