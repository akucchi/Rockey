; Focus Rocket League window, so ShadowPlay records it.
WinActivate, ahk_exe RocketLeague.exe

;WinActivate, ahk_exe r5apex.exe ;testing

; Sleeps so ShadowPlay doesn't shit itself.
Sleep, 20

; Send ALT+F9 to ShadowPlay.
Send, !{F9}
