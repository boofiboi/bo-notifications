# **bo-notifications**
"Customizable" notification script for your FiveM server, that's fully open source and modifiable

# Usage:

1. Download/clone this repository into your resources folder
2. Add `ensure bo-notifications` anywhere to your server.cfg, preferably at the start.
3. Edit the config according to your tastes.
4. Edit any script that uses any notification service (QB, ESX) and replace any mention of a notify event with this:

- Server: `TriggerClientEvent('bo-notifications:notify', "NOTIFTYPE", "ACTUALTEXT")`
- Client: `TriggerEvent('bo-notifications:notify', "NOTIFTYPE", "ACTUALTEXT")`

You can also use an export:
`exports["bo-notifications"]:Notify("NOTIFTYPE", "ACTUALTEXT")`

### Supported notification types:
- `warn` -Used for warning the player about e.g dangers, 
- `info` - Used for informing the player about useful info.
- `success` - Signifies success of a task
- `failure` - Signifies failure of a task


# Adding sounds:
1. Add your sound files into `NUI/sounds`
2. Add your sound file into `fxmanifest.lua` under `files{}`
3. Edit the config file according to your taste.


### Todo:

- [x] Basic notification functions
- [ ] GUI for configuring the script (Probably wont do?)
- [ ] Custom sounds made by me (I don't know how though.)
- [x] User friendly tutorial on how to use this script
- [ ] ~~Automatic replacement of qb-notify and esx-notify?~~ Impossible to do.
- [x] Fully finish the script
- [ ] ~~Proper MatV3 design?~~ Google's documentation on MatV3 is stupidly nowhere to be seen.
