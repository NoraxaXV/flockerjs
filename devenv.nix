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
    pkgs.git 
  ];
  cachix.enable = false;
}
