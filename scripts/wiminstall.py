#!/usr/bin/env python3

import os, sys, re, ctypes
import subprocess
import base64, lzma

assert os.path.exists('/usr/bin/wimapply'), "Package `wimtools` is not installed."

if len(sys.argv) not in (2, 3, 4):
	print("Usage: %s /dev/sdaX install.wim [image-id]" % sys.argv[0])
	exit(1)

def run(cmd):
	# print(f'[Exec] {cmd}')
	if 0 != os.system(cmd):
		exit(1)

def parse_device(partition_name):
	part_num = int(partition_name[re.search('[0-9]+$', partition_name).start():])
	if partition_name.startswith('/dev/nvme') or partition_name.startswith('/dev/mmcblk'):
		disk_name = partition_name[:partition_name.rindex('p')]
	else:
		disk_name = partition_name[:len(partition_name) - len(str(part_num))]
	return disk_name, part_num

def mask_fs_type(disk_name, part_num):
	try:
		libparted = ctypes.cdll.LoadLibrary('/usr/lib/x86_64-linux-gnu/libparted.so')
	except:
		libparted = ctypes.cdll.LoadLibrary('/usr/lib/x86_64-linux-gnu/libparted.so.2')

	libparted.ped_device_get.restype = ctypes.POINTER(ctypes.c_char)
	libparted.ped_disk_new.restype = ctypes.POINTER(ctypes.c_char)
	libparted.ped_disk_get_partition.restype = ctypes.POINTER(ctypes.c_char)
	libparted.ped_file_system_type_get.restype = ctypes.POINTER(ctypes.c_char)

	device = libparted.ped_device_get(disk_name.encode())
	disk = libparted.ped_disk_new(device)
	partition = libparted.ped_disk_get_partition(disk, part_num)
	assert partition, "Failed to locate device partition: %s (p%s)" % partition_name

	fs_type = libparted.ped_file_system_type_get("ntfs".encode())
	libparted.ped_partition_set_system(partition, fs_type)
	libparted.ped_disk_commit_to_dev(disk)
	libparted.ped_disk_commit_to_os(disk)

def decompress(data):
	data = base64.decodebytes(data)
	data = lzma.decompress(data)
	return data

def main():
	partition_name = sys.argv[1]
	assert partition_name.startswith('/dev'), "Partition name must starts with: `/dev/`"

	wim_args = sys.argv[2:]
	disk_name, part_num = parse_device(partition_name)
	disk_type = subprocess.getoutput(f"LANG=en_US.UTF-8 fdisk -l {disk_name} 2>/dev/null | grep 'Disklabel type:' | awk '{{print $NF}}'")

	if not wim_args:
		return mask_fs_type(disk_name, part_num)
	if len(wim_args) == 1:
		wim_args += ['1']

	run(f'sync')
	run(f'partprobe {disk_name} && sync && sleep 2')
	run(f'dd if=/dev/zero of={partition_name} bs=1M count=10 && sync')
	run(f'mkntfs -Q {partition_name}')

	mask_fs_type(disk_name, part_num)
	run(f'parted -s {disk_name} set {part_num} boot on')
	run(f'partprobe {disk_name} && sync && sleep 2')
	run('mkdir -p /upe/part_efi /upe/part_os')

	wim_args = ' '.join(["'%s'" % x for x in wim_args])

	if sys.argv[0].endswith('.gptboot'):
		assert disk_type != 'dos', "Disk type should be GPT, not DOS."

		efi_dev = os.environ.get('EFI', '')
		if not efi_dev.startswith('/dev/'):
			raise Exception('Environment `EFI` is not set properly, expected format: EFI=/dev/xxx')
		run(f'wimapply %s {partition_name}' % wim_args)
		run(f'partprobe {disk_name} && sync && sleep 2')

		disk_efi, part_efi = parse_device(efi_dev)
		run(f'umount -l {efi_dev} >/dev/null 2>&1 || true')
		run(f"/bin/echo -e 't\n{part_efi}\n1\nw\n' | fdisk {disk_efi} >/dev/null 2>&1")
		run(f'sync && partprobe {disk_efi} && sleep 2')
		run(f"/bin/echo -e 't\n{part_num}\n11\nw\n' | fdisk {disk_name} >/dev/null 2>&1")
		run(f'sync && partprobe {disk_name} && sleep 2')
		run(f'umount -l /upe/part_efi >/dev/null 2>&1 || true')
		run(f'mount {efi_dev} /upe/part_efi >/dev/null 2>&1 || mkfs.fat -F32 {efi_dev}')
		run(f'sync && partprobe {disk_name} && sleep 2')
		run(f'mountpoint /upe/part_efi >/dev/null 2>&1 || mount {efi_dev} /upe/part_efi')
		run(f'mkdir -p /upe/part_efi/EFI/Microsoft/Boot /upe/part_efi/EFI/Boot /upe/part_efi/boot/grub')
		run(f'[ -e /cdrom/efi/boot/bootx64.efi ] && cp /cdrom/efi/boot/*.efi /upe/part_efi/EFI/Boot')

		bcd = decompress(b'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')
		with open('/upe/part_efi/EFI/Microsoft/Boot/BCD', 'wb') as fp:
			fp.write(bcd)

		run(f'mount {partition_name} /upe/part_os')
		run(f'cp -r /upe/part_os/Windows/Boot/EFI/* /upe/part_efi/EFI/Microsoft/Boot/ || true')

		with open('/upe/part_efi/boot/grub/grub.cfg', 'w') as fp:
			fp.write('''set timeout=3

menuentry "Windows" {
	if [ -e /EFI/Microsoft/Boot/bootmgfw.efi ]; then
		true
	else
		search --no-floppy --set -f /EFI/Microsoft/Boot/bootmgfw.efi
	fi
	chainloader /EFI/Microsoft/Boot/bootmgfw.efi
}

menuentry "System Bootnext" {
	exit
}

menuentry 'System Reboot' {
    reboot
}

menuentry 'System Shutdown' {
    halt
}

menuentry 'Firmware Settings' {
    fwsetup
}
''')

		run('umount -l /upe/part_os')
		run('umount -l /upe/part_efi')
		run(f'sync && partprobe {disk_efi} && sleep 1')
		run(f"/bin/echo -e 'x\nc\n{part_num}\n1A7EA69F-9381-064D-A408-687481D45B02\ng\n26FC5249-50E1-47CD-9C99-7C767F6FF244\nw\ny\n' | gdisk {disk_name} >/dev/null 2>&1")
		run(f'sync && partprobe {disk_efi} && sleep 1')
		run(f"efibootmgr -c -d {disk_efi} -p {part_efi} -L 'Windows Boot Manager' -l '\\EFI\\Microsoft\\Boot\\bootmgfw.efi' >/dev/null 2>&1")
		run(f"efibootmgr -c -d {disk_efi} -p {part_efi} -L Windows -l '\\EFI\\Boot\\grubx64.efi' >/dev/null 2>&1")
		run(f"efibootmgr -D")

		
	else:
		run(f'wimapply %s {partition_name}' % wim_args)
		run(f'sync')

		brnt = decompress(b'XQAAgAD//////////wB1lI4E4qBx9AOqiDDKBg9c0hwvhkSXWgzMYmmFsNhA4TEXwlUApg6BSgVUOrMDkP5v03m55+NIQpgmNJ21VAav294tasbcQeUqJV9CcDLsdG3wLQfsFzH7jDsFDIIJZk7mypD9DD8UMyb1e6jh0jydSRvgqkCY2Bh69QNB0AghXtZKRJLlAVmb6aVtduc4R9FSHpYZMe5gyoQSxUxzHwwlZUWmsva1bE5thVS+4cy/vU3SSiA4pDIHNi3n5+qwzXVOs6HtUrqY+O4PYNqF7RY1dwiVCnEP0Ti9+jrtRnfkjhUKdK0Hjo0LEh3RVpeGYcXDSET4BdBYp4Z6KTfBpOYUZofJ0HP17r0APvVAqz+TD21W4hKtlw2Wx1DJHNwKEzg+HSkGZsYRaOA8d+lVaw6MDZkbfvm8EWknRjsWs1IxK7sQBzISuomgIJNS6CvBbPIHVcZOviqyqryAdWBHhEkNpKmwdLjNTtmoCeX6oDxVMonDGdbiyK0cU+6DkY5XQZgLWt0SmjEKPlom4e01gX9boBKoGaYLN8oVABAuTrnntP03iHyIOufB35mEwzhDEUrUFvKIYyGA48P02ssMiLSZi/FLcEdW+vssRUED2lpHXbAEMo+a3d8Z71FHfvKw7tsnc0NdLzyi+NW7ssB2f0Vd7kk1ym+eWA/AzjNU3DtyDCIgUYEqF1X78tRfk3XMSUqEOGN/K+BAHwTKQ2dusFNd5Vtx8Es98Y0DGrwXpTk4R8sRTJOT7L6LN2oR2/xyYxeD51ZxF7lthot7sIA8joWmgHdBkmFK7QkoHACrxAvd6rqGK0u1pIKKHUveg44O27PXsT7B4/YEhgq8qOwoptUg9ahKCGMPSb+z47Q46Tox1DnjGdNDKO46o3TVqbpICPeTqVW9g1drHw06jI7xa16qfmCrqn2o6+sryefhlhbM0LWBvxZjn3ZhqzC2uBWziV8hFvXQHup+0xU0s8zlIVW2cE+UADBq/bKztkqmcdZmdXpQ+AYjIAGzhU8MN0LciEibo8kyeApztf4LD+StSAM9pI0pkK18MslMKB0mYk1teS8p+IVxVQuh+myCAiC4FwMG+j5RXJcWffjf2qNU+wdwE6UuFBgKMtfmtPTpwqigRRpHI9m0N1IQ6Zm3wUot9W/fGtfJlU3mQZNPAADi/oVReA+0tOwa7aybVjhGNj+7CoI0wTCw8Y3Frrcufb3WzvFqg7YDl8PGJgNTQDW53tOrLjXEqfUZKIZcqFaq6eM88RVxvw4SP/g5vXKAOy8lFiNDNwnLEbCs0Jawsup6TQVfp05ZRf9EPwc6BSBK2OEAWyMGedLWznrEz3gtx4xHmMdFaBe0x05K7ctgDSP4R6p0wZ86Lp/fdg7nt/qLs2Ilf3JWymXTW4OBW3eNJwdsnHhdHALDTBLQD5PTsbH9BFvEA8o3ju974vXrGyLy1ItTNEAUE8D9acXBVFq22EgMASy8Ah8bSrmlQw5yBFr2Wbdk9hIajn5OjSIggzcfipKCQ4xbovPGzvaCsu2QW3/GlwO+hPuSeiQzcNuNmJB2dyzDs+HPMzczs+f2t7AYqpxga2HW9tG4cR7UWm09omNFLGWjMfqv5a1/sVrEAAivn3rLnXcUfzl6AJWoBGjoDKeFnJP3OsPnIrgQxIaVhdX7lAEyl8wHcIyLR/1SmBENo2TkUCVoXxgtmfELYK6ZBog9UdoU8bUDFilHA6yrq43E1nfDCwuFMUeb8QLB+zu0O68nBr62Qjz+HffeKCHcE1jr1aqo2W5h1FuyT77YBteIubiwO3h2h1qJPHzDejXFgbYJ0rhkYy97rQXVoChaUKnOplT2HDwDDbnSfeWLRfkneXLf3OijvR5DUxmt2rgw7xDQ+9gs4qOlSZsKHfDAivh/+l6bmTxH9d0lYuVL4iyG3hFDI/puJP96qWxSgg8aO+MAy2kl1r9kXfEvwxiUm2SG+cGuOFAntlUdbtaQtzV3YQgMsG7s+uTeeEOfhKkC/+358CxwGHK3EC2NIKV7CmllsmhGwhF06pPTUGPLXYCbjafrgOgrpB/S3Iw40zetxuODVCiggAnwE39fIB31oCMtd3BSnLphfF2WeI1DET7+Te+sLlafN/++ErB74TtT88nuA3F+QoPt47hNON8fHjzrXdRUPzeHLTeleJdzQTJuHaiBB7QScYVVxA8GOJ2B9nBFnVAJ276rdWw1DBhLLQS+c5ronEHa3F8tbiCGAgmUSJ2ecMy/ah7Uf9WO6BIlVb3P902yfsyqRlghagdDJeytModJSoTXYsj/fLBtI1rPYAVI/3pS8zvXVnVG5UPSau+IINDObfDJ52CwriRn1e69CU56w+DZtNydrxNU2xPpG4GKnbMlt1NBqeM0049lpJg8Jy6BW41dtkO1qQKLmpKkaF4r67Otvu7Q24hkZIvqCngxdZcX97Iu2+A+gr7SfEVY2CDJavsyqWD6iURnaT4fu4fLwLe2+cmAvk2tyKm7IY+NCvoCrGMaVbReXlXd7aJCKuJf0fh7uehXFT31cJ68bE8x1ZHndaL8Jhvn7BFqFvhiiQ3ntyA0L0EzbSmrk0d8Fj4S2u/rvESjF3XcDxMbuUv1ouvev7sROx2fmxJKdMjY5UiU9oF4dE5Zq4vgBsRb/6QFsIdABjbYyThty69VcFkjYeXE2uQ0UPuvyLpUmprA+NJuCtKc9fblBYnB3+tyGX70D2oYKrwJULurR5rIajWxtExtWlJPsy5AtEVEhhQkmlFqs5I0cMErs08FTvFnIIKQI3bgn8HtN4uimiHab5uXvVovsRtbXVS9QUfuQSVfVfSJMipC6aksqqGBaCgRNiLLobcfxytomuGTjm7Fs61E/niKyTnhIAafWuD2kWq63XPfx5JoEYc1mH61sYymfpIVR/i6UU5j7Q2VJeEjk5xhmLNx4lzRjBJsPu7cU1M7wyNUzGo1S2gmwp3JTzgvxN9UQF9jZREy2At/B0fghauSGoVT6HWu1h/bQmosW1eVolnFrfeku0BIldztuTp9oAvdXz+ucBxNS65OPk95uFWpcEsLGPJaAdKDgB/7aXhl1u/rol1BeoQBAoY5SJ83aJTo8x21GySAM6ruHX1dxzpM8PTNEaYtWt+H72BzG58tC59KEvJxUJOPQAZ8z0b4Pfx6ah7EV8HxA/CLScb/THbnkgVEL3g7bIONhGuLJ6QIzxDu7Eti0gfL4KfSDYhanTwa10gfmzCBwH59bu1voHr7hMlNpbeFUNjo+FUlQf25t+2HrHR44ElpiX/+8Ja7zLwCumtbOls6XbpIn/wqjeqktS0FMxbRH6EUlZxP55Qa8mi9tCwHZ0ZA8qzXPI2kNlh9FKPHh1TC39Rpcd/5RUdAALxncZqtXtCZ4h+I4fZI+yx4EdoSkwIdu5IVc2/BuW/GHbx7v0DXf+JpA02VEF7Ezi4kVrG9HtSewuzfKuSVqX3FTmC76GnEY8deYpJDoZKsP60LLkx88ZBP9khSifK2Lf38WZS1m/9hyzsA')
		with open(partition_name, 'r+b') as fp:
			data = fp.read(8192)
			data = brnt[:0xb] + data[0xb:0x54] + brnt[0xb:] + data[0x54+len(brnt)-0xb:]
			fp.seek(0)
			fp.write(data)

		run(f'mount {partition_name} /upe/part_os')

		if sys.argv[0].endswith('.mbrboot'):
			assert disk_type == 'dos', "Disk type should be DOS, not GPT."
			run(f"grub-install {disk_name} --boot-directory='/upe/part_os/$ntfs.log'")

			with open('/upe/part_os/$ntfs.log/grub/grub.cfg', 'w') as fp:
				fp.write('''set timeout=3

menuentry "Windows" {
	if [ -e /bootmgr ]; then
		ntldr /bootmgr
	elif [ -e /ntldr ]; then
		ntldr /ntldr
	else
		chainloader +1
	fi
}

menuentry 'System Reboot' {
    reboot
}

menuentry 'System Shutdown' {
    halt
}
''')
		else:
			print('Skip installing exclusive Grub for this OS.')

		if os.path.exists('/upe/part_os/Windows/Boot/PCAT/bootmgr'):
			run('mkdir -p /upe/part_os/Boot')
			run('cp -r /upe/part_os/Windows/Boot/PCAT/* /upe/part_os/Boot/ || true')
			run('cp /upe/part_os/Boot/bootmgr /upe/part_os/ || true')
			run('cp -r /upe/part_os/Windows/Boot/Fonts /upe/part_os/Boot/ || true')

			bcd = decompress(b'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')
			with open('/upe/part_os/Boot/BCD', 'wb') as fp:
				fp.write(bcd)

		run('umount -l /upe/part_os')

if __name__ == '__main__':
	main()

