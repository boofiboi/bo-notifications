RegisterCommand("notif", function(source, args, rawCommand)
TriggerEvent('bo-notifications:notify', args[1], args[2], "Chord")
end, false)


RegisterNetEvent("bo-notifications:notify")
AddEventHandler("bo-notifications:notify", function(notiftype, text, sound)
    SendNUIMessage({
        type = notiftype,
        text = text,
        sound = sound
        })
end)