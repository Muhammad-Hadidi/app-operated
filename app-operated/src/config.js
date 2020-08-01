//Discord Bot Token  //Replace with personal bot token.
module.exports.token =
  "token here";

//Minecraft Server Ip  //replace with hosted MC Server IP
module.exports.serverIP = "127.0.0.1";

//Path to directory of active Minecraft Servers //Replace dir. with path to MC Servers (default is made in file) source file MINECRAFT_SERVERS
module.exports.path = "C:/Path/to/the/app-operated/servers";

//Single Server
module.exports.singleServer = false;

//command channel
module.exports.cmdChannel = "cmd";

//Server Permission levels.  These must be the EXACT role names on the discord server
//level1 can use info, servers, and ip
module.exports.level1 = "⌯ || Member";
//level2 can use start and stop
module.exports.level2 = "⌯ || Head Admin";
//level3 can use cmd and clear
module.exports.level3 = "⌯ || Admin";

/* to config each server they must have 3 arguments PROPER arguments
1. The name of the server this must match the file name in directory EXACTLY
2. This is the command arguments to start your server (this can also be found by editing you start .bat file)
3. This is the port number if you plan on running more than one server at a time
4. This is the amount of RAM the server is allocated again only matters for multi-server
copy the line below for each MC Server in directory path*/

module.exports.serverConfigs = [];

// copy the line below to add each of those servers    

module.exports.serverConfigs[0] = [ // Server Number
  "vanilla", // Directory Name
  "java", "-Xms256M", "-Xmx1024M", "-jar", "vanilla.jar", "nogui", // java Startup Line
  "25565", // Server Port
  "console", // Console Channel Name
];