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

Then run `yarn record <file-name>` to start recording and `yarn stop <file-name>`.
