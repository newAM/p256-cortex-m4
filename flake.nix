{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      pkgs = import nixpkgs {
        system = "x86_64-linux";
        config.allowUnsupportedSystem = true;
        crossSystem = nixpkgs.lib.recursiveUpdate nixpkgs.lib.systems.examples.arm-embedded {
          rustc.config = "thumbv7em-none-eabi";
        };
      };
    in
    {
      packages.x86_64-linux.default = pkgs.rustPlatform.buildRustPackage rec {
        name = "p256-cortex-m4";

        cargoLock.lockFile = ./Cargo.lock;

        # LLVM_CONFIG = "${pkgs.clang}/lib";
      };
    };
}
