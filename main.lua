CreateThread(function()
    local _s = 1500
    while true do

        SendNUIMessage({ action = "updateHUD", health = (GetEntityHealth(PlayerPedId()) -100) })

        if IsPauseMenuActive() then
            SendNUIMessage({ action = "hide" })
        else
            SendNUIMessage({ action = "show" })
        end

        Wait(_s)
    end
end)