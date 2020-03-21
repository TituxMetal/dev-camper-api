import { mode, port } from './config'
import server from './server'

server.listen(port, process.stdout.write(`Server is running in ${mode} mode on port ${port}\n`))
