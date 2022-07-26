/**
 * @name NSFWBypass
 * @version 0.0.2
 * @author kuso#6510
 * @description Simple plugin to bypass discord age restriction
 * @authorId 539459006847254542
 * @updateUrl https://raw.githubusercontent.com/kvsxxx/bd-nsfwbypass/main/nsfwbypass.plugin.js
 * @website http://twitter.com/old_daggerd1ck
 */
 

module.exports = class NSFWBypass {
    // Required function. Called when the plugin is activated (including after reloads)
    start() {
        let findModule = (item) => window.webpackChunkdiscord_app.push(
            [
                [Math.random()],
                {},
                (req) => { 
                    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                        if (m.default && m.default[item] !== undefined) return m.default
                    }
                }
            ]
        )
        findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true
    }
    // Required function. Called when the plugin is deactivated
    stop() {
        let findModule = (item) => window.webpackChunkdiscord_app.push(
            [
                [Math.random()],
                {},
                (req) => { 
                    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                        if (m.default && m.default[item] !== undefined) return m.default
                    }
                }
            ]
        )
        findModule('getCurrentUser').getCurrentUser().nsfwAllowed = false
    }

}
