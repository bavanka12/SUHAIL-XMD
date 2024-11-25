const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="prabodachirath@gmail.com "
global.location="hirana,moronthuduwa."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://photosly.in/wp-content/uploads/2024/08/cute-girl-pic15.jpg" || "https://photosly.in/wp-content/uploads/2024/08/cute-girl-pic15.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760334624";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://photosly.in/wp-content/uploads/2024/08/cute-girl-pic15.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_02_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOSnZ1c3lrb0RUQjdxM0FlVzN0MEVYMFNGQzAzSnVtblpBYkUrVSs1NUZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYwMzM0NjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxN0ZBRjZDOTYwM0Q1QTdBQ0FCQzQ0ODY4Qjk2MjY1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI1MzI1NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUk5YMExVNTNSUS13OGp0Nk5BV3g4QVwiLFxuICBcInBob25lSWRcIjogXCIyMWJhNDkzYy0yODk5LTRmZWMtYjBlZC0xMmYzYjdhY2EwNjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMTUyLFxuICAgICAgMjEyLFxuICAgICAgMjEzLFxuICAgICAgMjM2LFxuICAgICAgNDYsXG4gICAgICAxNTQsXG4gICAgICAxMTUsXG4gICAgICA2NCxcbiAgICAgIDI1MixcbiAgICAgIDI0MSxcbiAgICAgIDE1LFxuICAgICAgMTE5LFxuICAgICAgMjM0LFxuICAgICAgMTQwLFxuICAgICAgNzgsXG4gICAgICAxODMsXG4gICAgICAxNjMsXG4gICAgICAyNDEsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDE1MSxcbiAgICAgIDEyLFxuICAgICAgMzQsXG4gICAgICA2OCxcbiAgICAgIDExOCxcbiAgICAgIDQsXG4gICAgICAxODgsXG4gICAgICAxMjQsXG4gICAgICAxMzUsXG4gICAgICAxMDAsXG4gICAgICAyMTcsXG4gICAgICAxODksXG4gICAgICAxNzksXG4gICAgICAxMzEsXG4gICAgICAyMDksXG4gICAgICAxNTcsXG4gICAgICAxNDIsXG4gICAgICAxMjIsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNE5YVE1XRVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwMzM0NjI0OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2l0aHVcIixcbiAgICBcImxpZFwiOiBcIjEwNDk2OTUyMDgzMjcxMzo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLV0kwc0FDRUx5eWtib0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklCbER3amkxOTVpcHVzQ1BwV1NEYVJlbmtrQnE2KzJlZjV1TmpuKzhqM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianZma3lJcUJIa1R3V1JvNnBCKytPbmRPQnI2d01salhaekJJN2JzYUhWTUZiajJkblFYemtJMllIVnIzTWpGUDZzalJ5YzA0K0VHcWtJYXFucnM2QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUMxVmhJcTdGM0pCMkpmMnZOemRmcnlvVm9NS0hqZk5nUVpKN1Q0T0pxZUdNSTBOUTIvanVrRzRja1hBc1dBSkpkSytIdVBjQmNyVFF4WXNWQnRZRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjAzMzQ2MjQ6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1MzI1NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQaURcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpRC5qc29uIjogIntcImtleURhdGFcIjpcIng3SHpGMzM1R1crNXRuKzBVQ1dSMjYvY3Z6ampwLzZkRzlyaXpHK0xXSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjcyNDMzMTg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI1MzExMDY5NzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "sithu-bhh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SITHU"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
