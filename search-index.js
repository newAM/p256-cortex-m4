var searchIndex = JSON.parse('{\
"cty":{"doc":"Type aliases to C types like c_int for use with bindgen","i":[[6,"c_char","cty","",null,null],[6,"c_int","","",null,null],[6,"c_uint","","",null,null],[6,"c_long","","",null,null],[6,"c_ulong","","",null,null],[6,"int8_t","","",null,null],[6,"int16_t","","",null,null],[6,"int32_t","","",null,null],[6,"int64_t","","",null,null],[6,"uint8_t","","",null,null],[6,"uint16_t","","",null,null],[6,"uint32_t","","",null,null],[6,"uint64_t","","",null,null],[6,"c_schar","","",null,null],[6,"c_short","","",null,null],[6,"c_longlong","","",null,null],[6,"c_uchar","","",null,null],[6,"c_ushort","","",null,null],[6,"c_ulonglong","","",null,null],[6,"c_float","","",null,null],[6,"c_double","","",null,null],[6,"intmax_t","","",null,null],[6,"uintmax_t","","",null,null],[6,"size_t","","",null,null],[6,"ptrdiff_t","","",null,null],[6,"intptr_t","","",null,null],[6,"uintptr_t","","",null,null],[6,"ssize_t","","",null,null],[6,"c_void","","",null,null]],"p":[]},\
"p256_cortex_m4":{"doc":"Idiomatic Rust bindings for <code>p256-cortex-m4</code> in the spirit …","i":[[3,"Error","p256_cortex_m4","Errors.",null,null],[6,"Result","","Result type.",null,null],[3,"SecretKey","","NIST P-256 secret key.",null,null],[3,"SecretScalar","","NIST P-256 secret scalar.",null,null],[3,"PublicKey","","NIST P-256 public key.",null,null],[3,"Keypair","","NIST P-256 keypair.",null,null],[12,"public","","Public key of the keypair",0,null],[12,"secret","","Secret key of the keypair",0,null],[3,"Signature","","NIST P-256 public key.",null,null],[3,"SharedSecret","","Outcome of ECDH key agreement.",null,null],[11,"random","","Generate a random <code>Keypair</code>.",0,[[]]],[11,"random","","Generate a random <code>SecretKey</code>.",1,[[]]],[11,"from_scalar","","Convert endianness to construct from <code>SecretScalar</code> value.",1,[[["secretscalar",3]]]],[11,"from_words","","Verifies that there are 8 words that correspond to a …",1,[[],["option",4]]],[11,"secret_scalar","","Convert endianness to obtain the inner <code>SecretScalar</code> value.",1,[[],["secretscalar",3]]],[11,"public_key","","Calculate associated public key.",1,[[],["publickey",3]]],[11,"sign_prehashed","","Non-deterministic signature on message assumed to be …",1,[[],["signature",3]]],[11,"agree","","ECDH key agreement.",1,[[["publickey",3]],["sharedsecret",3]]],[11,"unsafe_from_bytes","","Unsafe function intended for deserialization.",2,[[]]],[11,"unsafe_as_bytes","","Unsafe function intended for serialization.",2,[[]]],[11,"from_sec1_bytes","","Decode <code>PublicKey</code> (compressed or uncompressed) from the …",3,[[],["result",6]]],[11,"from_xy_bytes","","Decode assuming <code>bytes</code> is x-coordinate then y-coordinate, …",3,[[],["result",6]]],[11,"to_compressed_bytes","","Compressed encoding: <code>02 || Px</code> if Py is even and <code>03 || Px</code> …",3,[[]]],[11,"to_uncompressed_bytes","","Uncompressed encoding: <code>04 || Px || Py</code>.",3,[[]]],[11,"x","","Big-endian representation of x-coordinate.",3,[[]]],[11,"y","","Big-endian representation of x-coordinate.",3,[[]]],[11,"verify_prehashed","","Verify signature on message assumed to be hashed, if …",3,[[["signature",3]]]],[11,"r","","Big-endian representation of r.",4,[[]]],[11,"s","","Big-endian representation of s.",4,[[]]],[11,"try_from_bytes","","Decode signature as big-endian r, then big-endian s, …",4,[[],["result",6]]],[11,"to_bytes","","Encode signature from big-endian r, then big-endian s, …",4,[[]]],[11,"as_bytes","","The secret (big-endian x-coordinate)",5,[[]]],[11,"from","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"clone","","",6,[[],["error",3]]],[11,"clone","","",1,[[],["secretkey",3]]],[11,"clone","","",2,[[],["secretscalar",3]]],[11,"clone","","",3,[[],["publickey",3]]],[11,"clone","","",0,[[],["keypair",3]]],[11,"clone","","",4,[[],["signature",3]]],[11,"clone","","",5,[[],["sharedsecret",3]]],[11,"zeroize","","",1,[[]]],[11,"zeroize","","",2,[[]]],[11,"zeroize","","",5,[[]]]],"p":[[3,"Keypair"],[3,"SecretKey"],[3,"SecretScalar"],[3,"PublicKey"],[3,"Signature"],[3,"SharedSecret"],[3,"Error"]]},\
"p256_cortex_m4_sys":{"doc":"","i":[[5,"p256_convert_endianness","p256_cortex_m4_sys","Converts endianness by reversing the input value.",null,null],[5,"p256_verify","","Verifies an ECDSA signature.",null,null],[5,"p256_sign","","Creates an ECDSA signature.",null,null],[5,"p256_sign_step1","","Creates an ECDSA signature, using a two-step procedure.",null,null],[5,"p256_sign_step2","","Second step of creating an ECDSA signature, using a …",null,null],[5,"p256_keygen","","Calculates the public key from a given private key for …",null,null],[5,"p256_ecdh_calc_shared_secret","","Generates the shared secret according to the ECDH …",null,null],[5,"p256_scalarmult_base","","Raw scalar multiplication by the base point of the …",null,null],[5,"p256_scalarmult_generic","","Raw scalar multiplication by any point on the elliptic …",null,null],[5,"p256_point_to_octet_string_uncompressed","","Uncompressed encoding: \\\"04 || Px || Py\\\".",null,null],[5,"p256_point_to_octet_string_compressed","","Compressed encoding: \\\"02 || Px\\\" if Py is even and \\\"03 || …",null,null],[5,"p256_point_to_octet_string_hybrid","","Hybrid encoding: \\\"06 || Px || Py\\\" if Py is even and \\\"07 …",null,null],[5,"p256_octet_string_to_point","","Decodes a point according to the three encodings above.",null,null],[5,"P256_check_range_n","","",null,null],[5,"P256_check_range_p","","",null,null],[17,"true_","","",null,null],[17,"false_","","",null,null],[17,"__bool_true_false_are_defined","","",null,null],[17,"include_p256_verify","","",null,null],[17,"include_p256_sign","","",null,null],[17,"include_p256_keygen","","",null,null],[17,"include_p256_ecdh","","",null,null],[17,"include_p256_raw_scalarmult_generic","","",null,null],[17,"include_p256_raw_scalarmult_base","","",null,null],[17,"include_p256_to_octet_string_uncompressed","","",null,null],[17,"include_p256_to_octet_string_compressed","","",null,null],[17,"include_p256_to_octet_string_hybrid","","",null,null],[17,"include_p256_decompress_point","","",null,null],[17,"include_p256_decode_point","","",null,null],[17,"has_fpu","","",null,null],[17,"has_d_cache","","",null,null],[17,"use_fast_p256_basemult","","",null,null],[17,"use_mul_for_sqr","","",null,null],[6,"int_least64_t","","",null,null],[6,"uint_least64_t","","",null,null],[6,"int_fast64_t","","",null,null],[6,"uint_fast64_t","","",null,null],[6,"int_least32_t","","",null,null],[6,"uint_least32_t","","",null,null],[6,"int_fast32_t","","",null,null],[6,"uint_fast32_t","","",null,null],[6,"int_least16_t","","",null,null],[6,"uint_least16_t","","",null,null],[6,"int_fast16_t","","",null,null],[6,"uint_fast16_t","","",null,null],[6,"int_least8_t","","",null,null],[6,"uint_least8_t","","",null,null],[6,"int_fast8_t","","",null,null],[6,"uint_fast8_t","","",null,null],[6,"intmax_t","","",null,null],[6,"uintmax_t","","",null,null],[6,"size_t","","",null,null],[6,"wchar_t","","",null,null],[3,"max_align_t","","",null,null],[12,"__clang_max_align_nonce1","","",0,null],[12,"__clang_max_align_nonce2","","",0,null],[3,"SignPrecomp","","Sign precomputation state.",null,null],[12,"r","","",1,null],[12,"k_inv","","",1,null],[11,"from","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"clone","","",0,[[],["max_align_t",3]]],[11,"clone","","",1,[[],["signprecomp",3]]]],"p":[[3,"max_align_t"],[3,"SignPrecomp"]]},\
"rand_core":{"doc":"Random number generation traits","i":[[0,"block","rand_core","The <code>BlockRngCore</code> trait and implementation helpers",null,null],[8,"BlockRngCore","rand_core::block","A trait for RNGs which do not generate random numbers …",null,null],[16,"Item","","Results element type, e.g. <code>u32</code>.",0,null],[16,"Results","","Results type. This is the \'block\' an RNG implementing …",0,null],[10,"generate","","Generate a new block of results.",0,[[]]],[3,"BlockRng","","A wrapper type implementing [<code>RngCore</code>] for some type …",null,null],[12,"core","","The <em>core</em> part of the RNG, implementing the <code>generate</code> …",1,null],[11,"new","","Create a new <code>BlockRng</code> from an existing RNG implementing …",1,[[],["blockrng",3]]],[11,"index","","Get the index into the result buffer.",1,[[]]],[11,"reset","","Reset the number of available results. This will force a …",1,[[]]],[11,"generate_and_set","","Generate a new set of results immediately, setting the …",1,[[]]],[3,"BlockRng64","","A wrapper type implementing [<code>RngCore</code>] for some type …",null,null],[12,"core","","The <em>core</em> part of the RNG, implementing the <code>generate</code> …",2,null],[11,"new","","Create a new <code>BlockRng</code> from an existing RNG implementing …",2,[[],["blockrng64",3]]],[11,"index","","Get the index into the result buffer.",2,[[]]],[11,"reset","","Reset the number of available results. This will force a …",2,[[]]],[11,"generate_and_set","","Generate a new set of results immediately, setting the …",2,[[]]],[0,"impls","rand_core","Helper functions for implementing <code>RngCore</code> functions.",null,null],[5,"next_u64_via_u32","rand_core::impls","Implement <code>next_u64</code> via <code>next_u32</code>, little-endian order.",null,[[]]],[5,"fill_bytes_via_next","","Implement <code>fill_bytes</code> via <code>next_u64</code> and <code>next_u32</code>, …",null,[[]]],[5,"fill_via_u32_chunks","","Implement <code>fill_bytes</code> by reading chunks from the output …",null,[[]]],[5,"fill_via_u64_chunks","","Implement <code>fill_bytes</code> by reading chunks from the output …",null,[[]]],[5,"next_u32_via_fill","","Implement <code>next_u32</code> via <code>fill_bytes</code>, little-endian order.",null,[[]]],[5,"next_u64_via_fill","","Implement <code>next_u64</code> via <code>fill_bytes</code>, little-endian order.",null,[[]]],[0,"le","rand_core","Little-Endian utilities",null,null],[5,"read_u32_into","rand_core::le","Reads unsigned 32 bit integers from <code>src</code> into <code>dst</code>. …",null,[[]]],[5,"read_u64_into","","Reads unsigned 64 bit integers from <code>src</code> into <code>dst</code>. …",null,[[]]],[3,"Error","rand_core","Error type of random number generators",null,null],[8,"RngCore","","The core of a random number generator.",null,null],[10,"next_u32","","Return the next random <code>u32</code>.",3,[[]]],[10,"next_u64","","Return the next random <code>u64</code>.",3,[[]]],[10,"fill_bytes","","Fill <code>dest</code> with random data.",3,[[]]],[10,"try_fill_bytes","","Fill <code>dest</code> entirely with random data.",3,[[],[["result",4],["error",3]]]],[8,"CryptoRng","","A marker trait used to indicate that an [<code>RngCore</code>] or …",null,null],[8,"SeedableRng","","A random number generator that can be explicitly seeded.",null,null],[16,"Seed","","Seed type, which is restricted to types …",4,null],[10,"from_seed","","Create a new PRNG using the given seed.",4,[[]]],[11,"seed_from_u64","","Create a new PRNG using a <code>u64</code> seed.",4,[[]]],[11,"from_rng","","Create a new PRNG seeded from another <code>Rng</code>.",4,[[["rngcore",8]],[["error",3],["result",4]]]],[11,"from","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","rand_core::block","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"next_u32","","",1,[[]]],[11,"next_u64","","",1,[[]]],[11,"fill_bytes","","",1,[[]]],[11,"try_fill_bytes","","",1,[[],[["result",4],["error",3]]]],[11,"next_u32","","",2,[[]]],[11,"next_u64","","",2,[[]]],[11,"fill_bytes","","",2,[[]]],[11,"try_fill_bytes","","",2,[[],[["result",4],["error",3]]]],[11,"from_seed","","",1,[[]]],[11,"seed_from_u64","","",1,[[]]],[11,"from_rng","","",1,[[["rngcore",8]],[["error",3],["result",4]]]],[11,"from_seed","","",2,[[]]],[11,"seed_from_u64","","",2,[[]]],[11,"from_rng","","",2,[[["rngcore",8]],[["error",3],["result",4]]]],[11,"from","rand_core","",5,[[["nonzerou32",3]]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","rand_core::block","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","rand_core","",5,[[["formatter",3]],["result",6]]],[11,"clone","rand_core::block","",1,[[],["blockrng",3]]],[11,"clone","","",2,[[],["blockrng64",3]]],[18,"INTERNAL_START","rand_core","Codes below this point represent OS Errors (i.e. positive …",5,null],[18,"CUSTOM_START","","Codes at or above this point can be used by users to …",5,null],[11,"raw_os_error","","Extract the raw OS error code (if this error came from …",5,[[],["option",4]]],[11,"code","","Retrieve the error code, if any.",5,[[],[["nonzerou32",3],["option",4]]]]],"p":[[8,"BlockRngCore"],[3,"BlockRng"],[3,"BlockRng64"],[8,"RngCore"],[8,"SeedableRng"],[3,"Error"]]},\
"zeroize":{"doc":"Securely zero memory with a simple trait (Zeroize) built …","i":[[24,"Zeroize","zeroize","Derive the <code>Zeroize</code> trait.",null,null],[8,"Zeroize","","Trait for securely erasing types from memory",null,null],[10,"zeroize","","Zero out this object from memory using Rust intrinsics …",0,[[]]],[8,"DefaultIsZeroes","","Marker trait for types whose <code>Default</code> is the desired …",null,null],[8,"TryZeroize","","Fallible trait for representing cases where zeroization …",null,null],[10,"try_zeroize","","Try to zero out this object from memory using Rust …",1,[[]]],[3,"Zeroizing","","<code>Zeroizing</code> is a a wrapper for any <code>Z: Zeroize</code> type which …",null,null],[11,"new","","Move value inside a <code>Zeroizing</code> wrapper which ensures it …",2,[[]]],[11,"from","","",2,[[]]],[11,"from","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"zeroize","","",2,[[]]],[11,"deref","","",2,[[]]],[11,"deref_mut","","",2,[[]]],[11,"from","","",2,[[],["zeroizing",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"eq","","",2,[[["zeroizing",3]]]],[11,"ne","","",2,[[["zeroizing",3]]]],[11,"drop","","",2,[[]]],[11,"clone","","",2,[[],["zeroizing",3]]]],"p":[[8,"Zeroize"],[8,"TryZeroize"],[3,"Zeroizing"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);