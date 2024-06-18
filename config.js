const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09061194900";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_29_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI2LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzd5d2N0R1pxUXFxdWpBQlE2SklYVmlsTm5MV0t6eUl4Z2VuZWlGaWZ0VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibk1zQmlRbjJUMUtyUHFwZTZPMU9vd1wiLFxuICBcInBob25lSWRcIjogXCI5Y2E2M2E2NS1hNTBhLTQzZTEtYTQ2NC03YTM4ODQ3NmNkZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTQyLFxuICAgICAgMyxcbiAgICAgIDU0LFxuICAgICAgMTE1LFxuICAgICAgNjQsXG4gICAgICAxNTAsXG4gICAgICA1MyxcbiAgICAgIDgsXG4gICAgICA1OSxcbiAgICAgIDYxLFxuICAgICAgOTgsXG4gICAgICA4MyxcbiAgICAgIDg2LFxuICAgICAgMTUsXG4gICAgICA1NCxcbiAgICAgIDgyLFxuICAgICAgNjAsXG4gICAgICAxNzksXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgOTksXG4gICAgICAyMjUsXG4gICAgICAxMDAsXG4gICAgICAyMTAsXG4gICAgICA4OSxcbiAgICAgIDgyLFxuICAgICAgMTcsXG4gICAgICA0NyxcbiAgICAgIDE5NSxcbiAgICAgIDEyNCxcbiAgICAgIDE1MCxcbiAgICAgIDgyLFxuICAgICAgNDEsXG4gICAgICAzNCxcbiAgICAgIDI2LFxuICAgICAgMjM5LFxuICAgICAgNDEsXG4gICAgICAyMjUsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1pFU0JZRkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjExOTQ5MDA6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTIwMTM5NzE2NDU6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT25UanJJREVJWHIyN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDMk5wSUZQZ1VLTFc3TFpHVWdaSmpMWERiTzlDMjVMSWlFdk5YREVSUzFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk85RXVjeENPWXVXOHA5aGMzNWxHQXNTOEdoeWgrNkNiNGFGSmx4NUJTdVZkMERWZXZQWHB3L1Z2UVBPdDBEaW5sdkZWMlcyeXRLTmVBWmVxTFErQkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9HMG55YnVaS2tnaVJWY0Z2YjRrclNNWWJGOWJRQkxoSytaNmY2TU1UMVMvOUsyZlVVRTdSMlA4WFQ3VjBKMFBKV3EvQ3NsRzNtZlgyelY0RkxXYkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjExOTQ5MDA6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTc0OTg1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
