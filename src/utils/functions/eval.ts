import { Message } from 'discord.js'

import config from '../../../config.json'

const clean = (text: any) => {
    if (typeof (text) === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
    else return text
}

export const executeEval = (message: Message) => {

    try {

        const code = message.content.replace('```' + config.eval.name, '').replace('```', '')
        
        let evaled = eval(code)
        
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)

    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }

}