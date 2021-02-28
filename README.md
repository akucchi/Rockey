# Rockey

Record Cinematics Buddy animation and video through ShadowPlay at the same time

## Dependencies

- Rocket League
- BakkesMod
- Cinematics Buddy
- AutoHotKey
- Node.js

## Usage

First, you have to add these commands to `%AppData%\bakkesmod\bakkesmod\data\rcon_commands.cfg`:

```
cb_file_name
cb_camera_name
cbStartRecord
cbStopRecord
```

Then run `yarn start` to start the app.

## Troubleshooting

1. AutoHotKey must be installed in its default directory: _C:\Program Files\AutoHotkey\AutoHotkey.exe_.
2. ShadowPlay recording has to be stopped before running `record`.
3. Game must be paused before record.
4. File name must be a valid Windows file name.
