import { cliCore } from '@0bdx/cli-core';

/**
 * The main starter for 0dbx's upgrading cli app.
 *
 * @param   {string[]}  argv
 *     Raw command-line arguments, typically Node.js's `process.argv`
 *
 * @return  {string}
 *     Returns the short message appended to "cliUpgrade(): " [TODO change this]
 */
export default function cliUpgrade(argv) {
    const ep = 'Error: cliUpgrade():'; // error prefix
    if (typeof argv !== 'object') throw Error(`${ep
        } argv is type '${typeof argv}' not 'object'`);
    if (!Array.isArray(argv)) throw Error(`${ep
        } argv is an object but not an array`);
    argv.map((a, i) => {
        if (typeof a !== 'string') throw Error(`${ep
            } argv[${i}] is type '${typeof a}' not 'string'`);
    });

    return `cliUpgrade() with ${cliCore()}: ${argv}`;
}
