extern crate num_cpus;
use std::{fs::File, io::Write, sync::atomic::AtomicUsize, thread};
static SALT: &str = "IamSalt:";
static COMPLETE: AtomicUsize = AtomicUsize::new(0);
static mut HASHES: Vec<Vec<(usize, String)>> = Vec::new();

fn main() {
    let cores = num_cpus::get();
    let chunk_size = (90000000) / cores;
    let mut threads: Vec<(usize, usize)> = Vec::new();
    let current_time = std::time::SystemTime::now();
    for i in 0..cores {
        let start = if i * chunk_size < 10000000 {
            10000000
        } else {
            i * chunk_size
        };
        let end = if start + chunk_size > 99999999 {
            99999999
        } else {
            start + chunk_size
        };
        threads.push((start, end));
    }

    for ele in threads {
        thread::spawn(move || {
            calculate_hash(ele.0..ele.1);
            COMPLETE.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
        });
    }
    loop {
        if COMPLETE.load(std::sync::atomic::Ordering::SeqCst) == cores {
            println!("Generation taken: {:?}", current_time.elapsed().unwrap());
            let mut file = File::create("./hashes").unwrap();
            for i in unsafe { HASHES.iter() } {
                for j in i {
                    file.write(format!("{},{}\n", j.0, j.1).as_bytes()).unwrap();
                }
            }
            println!("File written taken: {:?}", current_time.elapsed().unwrap());
            break;
        } else {
            std::thread::sleep(std::time::Duration::from_millis(100));
        }
    }
}

fn calculate_hash(range: std::ops::Range<usize>) {
    let mut hashes: Vec<(usize, String)> = Vec::new();
    for i in range.into_iter() {
        let i = i;
        let salt = SALT.to_string();
        hashes.push((i, format!("{:x}", md5::compute(format!("{}{}", salt, i)))));
    }
    unsafe { HASHES.push(hashes) };
}
