#![no_std]

/// Panics if executed in [const context][const-context], or triggers a build error if not.
///
/// [const-context]: https://doc.rust-lang.org/reference/const_eval.html#const-context
#[inline(never)]
#[cold]
#[export_name = "rust_build_error"]
#[track_caller]
pub const fn build_error(msg: &'static str) -> ! {
    panic!("{}", msg);
}
