const { modul } = require('../module');
const { fs } = modul;
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} Di AwasiγΈπ²π°πππ π²π¨π΅π¨π¬πΉπΌα­ΰΏ Awas Hati" Jangan Asal Ubah'`, 'orange'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
