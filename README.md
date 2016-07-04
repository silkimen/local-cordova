# local-cordova
This tool is a little helper for those who need to run different versions of cordova CLI on their machine. It lets you run your locally installed cordova version by simply running `lcordova` instead of `node_modules/.bin/cordova`.

## why?
If you want to run different versions of cordova CLI on your device, you need to install the CLI locally without the `-g` flag. But the problem about that is, you can't use the `cordova` command anymore. You need to type in the relative path to the binary.

This tool makes life easier as it is a wrapper you can install globally. It is just searching for the locally installed cordova CLI and running that one by simply typing the command `lcordova`.

## installation
    npm install local-cordova -g

## usage
    lcordova <cordova args>

e.g.: `lcordova prepare ios`
