# CMAKE generated file: DO NOT EDIT!
# Generated by CMake Version 3.25
cmake_policy(SET CMP0009 NEW)

# ALL_TESTS at test/CMakeLists.txt:70 (file)
file(GLOB NEW_GLOB LIST_DIRECTORIES true RELATIVE "/home/user/mold/test" "/home/user/mold/test/*.sh")
set(OLD_GLOB
  "abs-error.sh"
  "absolute-symbols.sh"
  "allow-multiple-definition.sh"
  "ar-alignment.sh"
  "arch-aarch64-range-extension-thunk-disassembly.sh"
  "arch-aarch64-variant-pcs.sh"
  "arch-arm-abs-error.sh"
  "arch-arm-range-extension-thunk-disassembly.sh"
  "arch-arm-range-extension-thunk.sh"
  "arch-arm-target1.sh"
  "arch-arm-thm-jump19.sh"
  "arch-arm-thumb-interwork.sh"
  "arch-arm-tlsdesc.sh"
  "arch-i686-tls-module-base.sh"
  "arch-i686-tlsdesc.sh"
  "arch-loongarch64-mcmodel-extreme.sh"
  "arch-loongarch64-relax-call36.sh"
  "arch-loongarch64-relax-got-load.sh"
  "arch-loongarch64-relax-pcala-addi.sh"
  "arch-loongarch64-relax-tlsdesc.sh"
  "arch-ppc64le-save-restore-gprs.sh"
  "arch-riscv64-attributes.sh"
  "arch-riscv64-attributes2.sh"
  "arch-riscv64-global-pointer-dso.sh"
  "arch-riscv64-global-pointer.sh"
  "arch-riscv64-obj-compatible.sh"
  "arch-riscv64-relax-align.sh"
  "arch-riscv64-relax-got.sh"
  "arch-riscv64-relax-hi20.sh"
  "arch-riscv64-relax-j.sh"
  "arch-riscv64-symbol-size.sh"
  "arch-riscv64-variant-cc.sh"
  "arch-riscv64-weak-undef.sh"
  "arch-s390x-got.sh"
  "arch-x86_64-address-equality.sh"
  "arch-x86_64-empty-mergeable-section.sh"
  "arch-x86_64-emulation-deduction.sh"
  "arch-x86_64-exception-mcmodel-large.sh"
  "arch-x86_64-execstack-if-needed.sh"
  "arch-x86_64-function-multiversion.sh"
  "arch-x86_64-gnu-linkonce.sh"
  "arch-x86_64-gnu-retain.sh"
  "arch-x86_64-gotpcrelx.sh"
  "arch-x86_64-ifunc-alias.sh"
  "arch-x86_64-incompatible-libs-linker-script.sh"
  "arch-x86_64-incompatible-libs-linker-script2.sh"
  "arch-x86_64-incompatible-libs.sh"
  "arch-x86_64-incompatible-libs2.sh"
  "arch-x86_64-incompatible-obj.sh"
  "arch-x86_64-init-array-readonly.sh"
  "arch-x86_64-init-array.sh"
  "arch-x86_64-isa-level.sh"
  "arch-x86_64-large-bss.sh"
  "arch-x86_64-mergeable-records.sh"
  "arch-x86_64-mergeable-strings-nonalloc.sh"
  "arch-x86_64-mergeable-strings.sh"
  "arch-x86_64-note-property.sh"
  "arch-x86_64-note-property2.sh"
  "arch-x86_64-note.sh"
  "arch-x86_64-note2.sh"
  "arch-x86_64-plt.sh"
  "arch-x86_64-preinit-array.sh"
  "arch-x86_64-relax.sh"
  "arch-x86_64-reloc-overflow.sh"
  "arch-x86_64-reloc-zero.sh"
  "arch-x86_64-reloc.sh"
  "arch-x86_64-section-alignment.sh"
  "arch-x86_64-section-name.sh"
  "arch-x86_64-tbss-only.sh"
  "arch-x86_64-tls-gd-mcmodel-large.sh"
  "arch-x86_64-tls-gd-to-ie.sh"
  "arch-x86_64-tls-large-tbss.sh"
  "arch-x86_64-tls-ld-mcmodel-large.sh"
  "arch-x86_64-tls-module-base.sh"
  "arch-x86_64-tlsdesc.sh"
  "arch-x86_64-unique.sh"
  "arch-x86_64-warn-execstack.sh"
  "arch-x86_64-warn-shared-textrel.sh"
  "arch-x86_64-warn-textrel.sh"
  "arch-x86_64-z-dynamic-undefined-weak.sh"
  "arch-x86_64-z-ibt.sh"
  "arch-x86_64-z-ibtplt.sh"
  "arch-x86_64-z-rewrite-endbr.sh"
  "arch-x86_64-z-rewrite-endbr2.sh"
  "arch-x86_64-z-rewrite-endbr3.sh"
  "arch-x86_64-z-shstk.sh"
  "arch-x86_64-z-text.sh"
  "as-needed-dso.sh"
  "as-needed-dso2.sh"
  "as-needed-weak.sh"
  "as-needed.sh"
  "auxiliary.sh"
  "bno-symbolic.sh"
  "bsymbolic-functions.sh"
  "bsymbolic-non-weak-functions.sh"
  "bsymbolic-non-weak.sh"
  "bsymbolic.sh"
  "build-id.sh"
  "canonical-plt.sh"
  "cmdline.sh"
  "color-diagnostics.sh"
  "comment.sh"
  "common-archive.sh"
  "common-ref.sh"
  "common-symbols.sh"
  "compress-debug-sections-zstd.sh"
  "compress-debug-sections.sh"
  "compressed-debug-info.sh"
  "copyrel-alignment.sh"
  "copyrel-norelro.sh"
  "copyrel-protected.sh"
  "copyrel-relro.sh"
  "copyrel-relro2.sh"
  "copyrel.sh"
  "ctors-in-init-array.sh"
  "dead-debug-sections.sh"
  "debug-macro-section.sh"
  "default-symver.sh"
  "defsym-lto.sh"
  "defsym-missing-symbol.sh"
  "defsym.sh"
  "defsym2.sh"
  "demangle-cpp.sh"
  "demangle-rust.sh"
  "demangle.sh"
  "dependency-file-response-file.sh"
  "dependency-file.sh"
  "disable-new-dtags.sh"
  "discard.sh"
  "dso-undef.sh"
  "dt-init.sh"
  "dt-needed.sh"
  "duplicate-error-archive.sh"
  "duplicate-error.sh"
  "dynamic-dt-debug.sh"
  "dynamic-linker.sh"
  "dynamic-list-data.sh"
  "dynamic-list.sh"
  "dynamic-list2.sh"
  "dynamic-list3.sh"
  "dynamic-list4.sh"
  "dynamic.sh"
  "emit-relocs-cpp.sh"
  "emit-relocs-dead-sections.sh"
  "emit-relocs.sh"
  "empty-arg.sh"
  "empty-file.sh"
  "empty-input.sh"
  "empty-version.sh"
  "entry.sh"
  "exception-multiple-ehframe.sh"
  "exception.sh"
  "exclude-libs.sh"
  "exclude-libs2.sh"
  "exclude-libs3.sh"
  "execstack.sh"
  "execute-only.sh"
  "export-dynamic.sh"
  "export-from-exe.sh"
  "fatal-warnings.sh"
  "filler.sh"
  "filter.sh"
  "func-addr.sh"
  "gc-sections.sh"
  "gdb-index-compress-output.sh"
  "gdb-index-dwarf2.sh"
  "gdb-index-dwarf3.sh"
  "gdb-index-dwarf4.sh"
  "gdb-index-dwarf5.sh"
  "gdb-index-dwarf64.sh"
  "gdb-index-empty.sh"
  "gdb-index-split-dwarf.sh"
  "glibc-2.22-bug.sh"
  "global-offset-table.sh"
  "gnu-hash.sh"
  "gnu-property.sh"
  "gnu-retain.sh"
  "gnu-unique.sh"
  "gnu-warning.sh"
  "hash-style-sysv.sh"
  "hash-style.sh"
  "hello-dynamic.sh"
  "hello-static.sh"
  "help.sh"
  "hidden-archive.sh"
  "hidden-undef.sh"
  "hidden-weak-undef.sh"
  "icf-safe.sh"
  "icf-small.sh"
  "icf.sh"
  "ifunc-address-equality-exported.sh"
  "ifunc-address-equality.sh"
  "ifunc-alias.sh"
  "ifunc-dlopen.sh"
  "ifunc-dso.sh"
  "ifunc-dynamic.sh"
  "ifunc-export.sh"
  "ifunc-funcptr.sh"
  "ifunc-noplt.sh"
  "ifunc-static-pie.sh"
  "ifunc-static.sh"
  "image-base.sh"
  "init-array-priorities.sh"
  "init-in-dso.sh"
  "init.sh"
  "initfirst.sh"
  "interpose.sh"
  "invalid-version-script.sh"
  "issue646.sh"
  "large-alignment-dso.sh"
  "large-alignment.sh"
  "large-max-page-size-strip.sh"
  "large-max-page-size.sh"
  "large-text.sh"
  "library.sh"
  "link-order.sh"
  "linker-script-defsym.sh"
  "linker-script-error.sh"
  "linker-script-relocatable.sh"
  "linker-script.sh"
  "linker-script2.sh"
  "linker-script3.sh"
  "linker-script4.sh"
  "linker-script5.sh"
  "linker-script6.sh"
  "lto-archive.sh"
  "lto-archive2.sh"
  "lto-dso.sh"
  "lto-gcc.sh"
  "lto-llvm.sh"
  "lto-no-plugin.sh"
  "lto-nostdlib.sh"
  "lto-version-script.sh"
  "main-in-dso.sh"
  "many-sections.sh"
  "many-sections2.sh"
  "mergeable-strings.sh"
  "missing-but-ok.sh"
  "missing-error.sh"
  "mold-wrapper.sh"
  "mold-wrapper2.sh"
  "nmagic.sh"
  "no-allow-shlib-undefined.sh"
  "no-eh-frame-header.sh"
  "no-object-file.sh"
  "no-quick-exit.sh"
  "no-undefined-version.sh"
  "nocopyreloc.sh"
  "noinhibit-exec.sh"
  "non-canonical-plt.sh"
  "nostdlib.sh"
  "oformat-binary.sh"
  "omagic.sh"
  "package-metadata.sh"
  "physical-image-base.sh"
  "pie.sh"
  "plt-dso.sh"
  "pltgot.sh"
  "preinit-array.sh"
  "print-dependencies.sh"
  "protected-dynsym.sh"
  "protected.sh"
  "push-pop-state.sh"
  "range-extension-thunk.sh"
  "range-extension-thunk2.sh"
  "range-extension-thunk3.sh"
  "relax-got-load.sh"
  "reloc-rodata.sh"
  "relocatable-archive.sh"
  "relocatable-c++.sh"
  "relocatable-compressed-debug-info.sh"
  "relocatable-debug-info.sh"
  "relocatable-exception.sh"
  "relocatable-many-sections.sh"
  "relocatable-merge-sections.sh"
  "relocatable-mergeable-sections.sh"
  "relocatable.sh"
  "relro.sh"
  "repro.sh"
  "require-defined.sh"
  "response-file.sh"
  "response-file2.sh"
  "retain-symbols-file.sh"
  "reverse-sections.sh"
  "rodata-name.sh"
  "rosegment.sh"
  "rpath.sh"
  "run-clang.sh"
  "run.sh"
  "section-align.sh"
  "section-attributes.sh"
  "section-order.sh"
  "section-start.sh"
  "separate-debug-file.sh"
  "shared-abs-sym.sh"
  "shared.sh"
  "shuffle-sections-seed.sh"
  "shuffle-sections.sh"
  "soname.sh"
  "spare-program-headers.sh"
  "start-lib.sh"
  "start-stop-symbol.sh"
  "start-stop.sh"
  "static-archive.sh"
  "static-pie.sh"
  "stdout.sh"
  "strip-debug.sh"
  "strip.sh"
  "stt-common.sh"
  "symbol-rank.sh"
  "symbol-version-lto.sh"
  "symbol-version.sh"
  "symbol-version2.sh"
  "symbol-version3.sh"
  "symbol-version4.sh"
  "symtab-dso.sh"
  "symtab-section-symbols.sh"
  "symtab.sh"
  "synthetic-symbols.sh"
  "sysroot-linker-script.sh"
  "sysroot.sh"
  "sysroot2.sh"
  "tail-call.sh"
  "tbss-only.sh"
  "textrel.sh"
  "textrel2.sh"
  "thin-archive.sh"
  "thread-count.sh"
  "tls-alignment-multi.sh"
  "tls-common.sh"
  "tls-df-static-tls.sh"
  "tls-dso.sh"
  "tls-gd-dlopen.sh"
  "tls-gd-noplt.sh"
  "tls-gd-to-ie.sh"
  "tls-gd.sh"
  "tls-ie.sh"
  "tls-irregular-start-addr.sh"
  "tls-large-alignment.sh"
  "tls-large-static-image.sh"
  "tls-ld-noplt.sh"
  "tls-ld.sh"
  "tls-le-error.sh"
  "tls-le.sh"
  "tls-nopic.sh"
  "tls-pic.sh"
  "tls-small-alignment.sh"
  "tlsdesc-dlopen.sh"
  "tlsdesc-import.sh"
  "tlsdesc-initial-exec.sh"
  "tlsdesc-local-dynamic.sh"
  "tlsdesc-static.sh"
  "tlsdesc.sh"
  "trace-symbol-symver.sh"
  "trace-symbol.sh"
  "trace.sh"
  "undefined-glob-gc-sections.sh"
  "undefined-glob.sh"
  "undefined.sh"
  "undefined2.sh"
  "unkown-section-type.sh"
  "unresolved-symbols.sh"
  "unresolved-symbols2.sh"
  "verbose.sh"
  "version-script-search-paths.sh"
  "version-script.sh"
  "version-script10.sh"
  "version-script11.sh"
  "version-script12.sh"
  "version-script13.sh"
  "version-script14.sh"
  "version-script15.sh"
  "version-script16.sh"
  "version-script17.sh"
  "version-script18.sh"
  "version-script19.sh"
  "version-script2.sh"
  "version-script20.sh"
  "version-script21.sh"
  "version-script22.sh"
  "version-script23.sh"
  "version-script3.sh"
  "version-script4.sh"
  "version-script5.sh"
  "version-script6.sh"
  "version-script7.sh"
  "version-script8.sh"
  "version-script9.sh"
  "version.sh"
  "versioned-undef.sh"
  "visibility.sh"
  "warn-common.sh"
  "warn-once.sh"
  "warn-symbol-type.sh"
  "warn-unresolved-symbols.sh"
  "weak-export-dso.sh"
  "weak-export-dso2.sh"
  "weak-export-exe.sh"
  "weak-undef-dso.sh"
  "weak-undef.sh"
  "weak-undef2.sh"
  "weak-undef4.sh"
  "weak-undef5.sh"
  "whole-archive.sh"
  "wrap-lto.sh"
  "wrap.sh"
  "z-cet-report.sh"
  "z-defs.sh"
  "z-dynamic-undefined-weak-exe.sh"
  "z-dynamic-undefined-weak.sh"
  "z-max-page-size.sh"
  "z-nodefaultlib.sh"
  "z-nodump.sh"
  "z-now.sh"
  "z-origin.sh"
  "z-pack-relative-relocs.sh"
  "z-rodynamic.sh"
  "z-sectionheader.sh"
  "z-separate-code.sh"
  "z-stack-size.sh"
  "z-start-stop-visibility.sh"
  "z-unknown.sh"
  )
if(NOT "${NEW_GLOB}" STREQUAL "${OLD_GLOB}")
  message("-- GLOB mismatch!")
  file(TOUCH_NOCREATE "/home/user/mold/pkg/CMakeFiles/cmake.verify_globs")
endif()

# TESTS at test/CMakeLists.txt:75 (file)
file(GLOB NEW_GLOB LIST_DIRECTORIES true RELATIVE "/home/user/mold/test" "/home/user/mold/test/arch-aarch64-*.sh")
set(OLD_GLOB
  "arch-aarch64-range-extension-thunk-disassembly.sh"
  "arch-aarch64-variant-pcs.sh"
  )
if(NOT "${NEW_GLOB}" STREQUAL "${OLD_GLOB}")
  message("-- GLOB mismatch!")
  file(TOUCH_NOCREATE "/home/user/mold/pkg/CMakeFiles/cmake.verify_globs")
endif()
