exports('Notify', Notify())
RegisterCommand("notif", function(source, args, rawCommand)
TriggerEvent('bo-notifications:notify', args[1], args[2])
end, false)


RegisterNetEvent("bo-notifications:notify")
AddEventHandler("bo-notifications:notify", Notify())


function Notify(notiftype, text)
    if notifType == warn then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.WarnSound,
            color = Config.WarnColor
            })
    elseif notifType == info then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.InfoSound,
            color = Config.InfoColor
            })
    elseif notifType == success then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.SuccessSound,
            color = Config.SuccessColor
            })
    elseif notifType == failure then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.FailureColor,
            color = Config.FailureSound
            })
    end
end