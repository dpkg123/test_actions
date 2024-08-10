#!/bin/perl -w

use strict;
use warnings;

open(my $fh, '<', 'Makefile') or die "Can not open Makefil: $!";
my $content = do { local $/; <$fh> };
close($fh);

my ($level) = $content =~ /VERSION\s*=\s*(\d+)/;
my ($sublevel) = $content =~ /PATCHLEVEL\s*=\s*(\d+)/;
my $command = "echo false";

die "Can not find PATCHLEVEL in Makefile." unless defined $sublevel;

print "Kernel version: $level.$sublevel\n";

my $gkilevel = 10;
my $gkiversion = 5;

if ($level >= $gkiversion) {
        if ($sublevel >= $gkilevel) {
                print "nothing todo.\n";
        } else {
                system($command);
        }
} else {
        system($command);
}

