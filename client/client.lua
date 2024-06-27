exports('Notify', "Notify()")
RegisterCommand("notif", function(source, args, rawCommand)
Notify(args[1], args[2])
end, false)


RegisterNetEvent("bo-notifications:notify")
AddEventHandler("bo-notifications:notify", function(eventParam1, eventParam2)
    Notify(eventparam1, eventParam2);
end)
function Notify(notiftype, text)
    if notiftype == "warn" then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.WarnSound,
            color = Config.WarnColor
            })
        end
    if notiftype == "info" then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.InfoSound,
            color = Config.InfoColor
            })
        end
    if notiftype == "success" then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.SuccessSound,
            color = Config.SuccessColor
            })
        end
    if notiftype == "failure" then
        SendNUIMessage({
            type = notiftype,
            text = text,
            sound = Config.FailureSound,
            color = Config.FailureColor
            })
        end
    end
