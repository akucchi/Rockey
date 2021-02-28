; Focus Rocket League window, so ShadowPlay records it.
WinActivate, ahk_exe RocketLeague.exe

;WinActivate, ahk_exe r5apex.exe ;testing

Sleep, 20
;sleeps so shadowplay doesnt shit itself

; Send ALT+F9 to ShadowPlay.
Send, !{F9}
