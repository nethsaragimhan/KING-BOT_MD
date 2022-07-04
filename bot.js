return
const Analyze = require('./store/Analyze')
const Super = require('./store/base/types')
const {
	connectDb
} = require('./store/db/connect')

async function startKingMdWhatsappBot() {
	var condb = TimaCLI.loder('Loging To DataBase...'),
		isconnect = await connectDb(condb, process.env.DBURI || false),
		session_update = await decryptKingMultiDeviceSession(process.env.SESSION || false)
	await sleep()
	var condc = TimaCLI.loder('Updating DataBase...'),
		isupdated = await database.update()
	if(session_update && isupdated) {
		condc.succeed('Database Updated Successfull')
		var cm = TimaCLI.loder('Installing Commands...')
		fs.readdirSync('./Commands').forEach(m => {
			if(m.end('.js')) {
				require('./Commands/' + m)
			}
		})
		const commands = new AnalyzeCommands(Commands)
		await commands.install()
		cm.succeed('Installation Successfull...')
		await startkingMultiDevice()
	} else {
		throw new Error('Your Session Is Invalid... Please Rescan And Update The ENV ( https://imgbb.com/ )')
	}
}

startKingMdWhatsappBot()
