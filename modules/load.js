module.exports.run = async (client, fs, commands, bot) =>
{
    fs.readdir("./modules/commands/", (err, files) =>
    {
        let modules = files.filter(f => f.split(".").pop() === "js");
        modules.forEach((f, i) => 
        {
            let props = require(`./commands/${f}`);
            try{client.commands.set(props.help.name, props)}
            catch(err){console.log('One or more of your modules caused an error.\n=> ' + err); process.exit(1)}
        })
        console.log(`Loaded ${modules.length} modules.`)
    });
}