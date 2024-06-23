fx_version 'adamant'
games { 'gta5' }

author 'boofiboi'
description '"Configurable" notification script for FiveM'
version '1.0'


ui_page 'NUI/index.html'

files{
    'NUI/index.html',
    'NUI/js/script.js',
    'NUI/css/styles.css',
    -- Put your sound files into NUI/sounds, then add them here.
    'NUI/sounds/Chord.mp3'
}
shared_script 'config.lua'

server_script 'server/server.lua'
client_script 'client/client.lua'