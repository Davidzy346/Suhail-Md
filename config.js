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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_16_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIRWVCUnRkZFdzcG0zZmVJQmV1ZmJMcEhDenhOLzhzVUt5d1dUWG9DamNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlUlEtVl92NlROcXlwdVZPOGZ5UTlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1NzEzM2FiLWE0YmItNDk0NC1iMzIxLTAwZjQ1NGE5ZjJkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDQxLFxuICAgICAgMTQzLFxuICAgICAgNDYsXG4gICAgICAxOTksXG4gICAgICAxMTIsXG4gICAgICAyMjMsXG4gICAgICAxNDEsXG4gICAgICAxMCxcbiAgICAgIDE5NCxcbiAgICAgIDEyMixcbiAgICAgIDIwLFxuICAgICAgMjE2LFxuICAgICAgODcsXG4gICAgICAyMjcsXG4gICAgICAyMjUsXG4gICAgICA3MCxcbiAgICAgIDI4LFxuICAgICAgMTgxLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxMzksXG4gICAgICA5NixcbiAgICAgIDYsXG4gICAgICA5NSxcbiAgICAgIDQ5LFxuICAgICAgMTIwLFxuICAgICAgMjEzLFxuICAgICAgMTE5LFxuICAgICAgNzIsXG4gICAgICA0NyxcbiAgICAgIDEzLFxuICAgICAgMTk2LFxuICAgICAgMjQsXG4gICAgICAxMzksXG4gICAgICAyMCxcbiAgICAgIDc3LFxuICAgICAgMTExLFxuICAgICAgMjIzLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRSOUVRUFQ2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYxMTk0OTAwOjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzkyMDEzOTcxNjQ1OjUxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BuVGpySURFTkh4cXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzJOcElGUGdVS0xXN0xaR1VnWkpqTFhEYk85QzI1TElpRXZOWERFUlMxbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQV21WdnhoVjZDSUdzZHh3TGpjcjRFUnhLM3dod0VMNTkxVzQxd1V1OW92UEJOUTNzc2phVE1jWmlaQ1JHL3ZBbzBydWVtaDFKNW1DM2NER1hESTZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrUGErcTlwWmxZb2d1ZUNlSWw1WHgyQTBzS3pJTk4xblVIWTl1M28zQ2cvQjBYUndQaG5wYkQzeVBxMGJ1dTBFVEh0N2YvN0hzM1Avd0F3OHJlNTJCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxMTk0OTAwOjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI3MDE2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNTT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1NPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL3dadzFHVVhjemhibFZydXRhOFJ3aDdsQUs4eTNSdWFEeDFGaVo4WTBuVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA0MDQwODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
