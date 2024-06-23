# **bo-notifications**
"Customizable" notification script for your FiveM server, that's fully open source and modifiable

This script is not yet ready for deployment on any server.

There's no usable events, nor any user-facing commands that you can use.

# PLEASE DON'T INSTALL THIS SCRIPT YET!!!!!

# Usage:

1. Download/clone this repository into your resources folder
2. Add `ensure bo-notifications` anywhere to your server.cfg, preferably at the start.
3. Edit any script that uses any notification service (QB, ESX) and replace any mention of a notify event with this:

Server: `TriggerClientEvent('bo-notifications:notify', "NOTIFICATION TYPE, "NOTIFICATION TEXT", "SOUND" )`
Client: `TriggerEvent('bo-notifications:notify', "NOTIFICATION TYPE, "NOTIFICATION TEXT", "SOUND" )`

### Supported notification types:
`warn` - Is yellow, used for warning the player about e.g dangers, 
`info` - Used for informing the player about useful info.
`success` - Is green, signifies success of a task
`failure` - Is red, signifies failure of a task


# Adding sounds:
1. Add your sound files into `NUI/sounds`
2. Add your sound file into `fxmanifest.lua` under `files{}`
3. Call the Event with your sound file name in the 3rd argument


### Todo:

- [x] Basic notification functions
- [ ] GUI for configuring the script (Probably wont do?)
- [ ] Custom sounds made by me (I don't know how though.)
- [x] User friendly tutorial on how to use this script
- [ ] Automatic replacement of qb-notify and esx-notify? (Not sure if possible to overwrite already created events.)
- [ ] Fully finish the script
- [ ] Proper MatV3 design?
