const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© POWER BY ᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew" 


global.devs = "94763412103" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94763412103";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94763412103";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_50_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS28wN0NzdGZZemcyUWZPZmYwY1ByeXdxQ3lQUFQyUlp2OE5mZUI0R1Nxdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwNzQxMjEwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjI4N0E2RTE2RjY2MDdBMUVCQUE5MTlGNzc4NkI1MjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzc4NTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDc0MTIxMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYzMjY0MjFCRjY2RjFCNTNERjYxNjg4MTE2QUJFMTY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDc3ODU5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzA3NDEyMTAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4N0U2MTlDQUY3M0UwN0M2ODg5MDU3NTE0OTIwQUNBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3Nzg2MDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwNzQxMjEwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTEzNURFMTFCQjUxQTZFNEVGOUFFRUZENTI3RTI3RjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzc4NjAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll3OWdEZ1NZVGNhNEc1eWtwQksyT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzFjMzkyNmEtNmMyNy00ODNmLThmMzktNzBkNGZlZGJmOWRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDIxMSxcbiAgICAgIDIxMixcbiAgICAgIDE5NyxcbiAgICAgIDk2LFxuICAgICAgMTIyLFxuICAgICAgODYsXG4gICAgICAzLFxuICAgICAgMjE3LFxuICAgICAgMTE5LFxuICAgICAgMjQ3LFxuICAgICAgMTQ1LFxuICAgICAgMTA3LFxuICAgICAgMjA1LFxuICAgICAgMTIwLFxuICAgICAgMixcbiAgICAgIDIwNSxcbiAgICAgIDIxMyxcbiAgICAgIDIzNixcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgNjQsXG4gICAgICA4NCxcbiAgICAgIDE0MSxcbiAgICAgIDE4MCxcbiAgICAgIDE2MixcbiAgICAgIDI1MCxcbiAgICAgIDIxNyxcbiAgICAgIDE4LFxuICAgICAgMTIyLFxuICAgICAgMTksXG4gICAgICAxOTMsXG4gICAgICAxNDMsXG4gICAgICAxNzgsXG4gICAgICAxNjEsXG4gICAgICAxMjIsXG4gICAgICAxNixcbiAgICAgIDIyMCxcbiAgICAgIDE4LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVSTlNaWU40XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNzQxMjEwMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTczMDc5OTIzMTM5NjI6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJfX19fX19fX19fX19fX82szazNrM2s4La74Lax4LeK4Lav4LeZ4LeA4LeKXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2IxNWJZREVPR3JwcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNZ05IenN1VmxFOWtMSlV4c3VqZENWTndWdnN5Z3J6WlNvSTVvcUIvUDFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkg1bUQwQXJTaTUxTEZiOHV5aGZVSTRHcEdaSGRkRjJVTUtPb0VBQVQ0Z1RETlJYS2hidkdZRHR1dHRMZ2V2K3d2eTZvQTRoakp1QmtmZUIzVW9WS0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd1ZFVRRkxINWJocWx6MHlDdUpDL0JnZWtLRUk3NnNrQnBwbmFPTStzMEdkQ0NBYWswSC9MamVUWGtvOWpUY21MemJocUh4UWRySWRBam5zNUxRK2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA3NDEyMTAzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc3ODU5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9YL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1gvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "POWER BY ᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@POWER BY ᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "MR Randew-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
