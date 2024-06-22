{ pkgs, lib, config, inputs, ... }:

{
  languages.javascript = {
      enable = true;
      yarn = {
          enable = true;
          install.enable = true;
      };
  };
  languages.typescript = {
      enable = true;
  };
  packages = [ 
    pkgs.neovim
    pkgs.git 
  ];
  cachix.enable = false;
}
