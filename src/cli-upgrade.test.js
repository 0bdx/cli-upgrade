import equal from './private-methods/equal.js';
import throws from './private-methods/throws.js';

/**
 * cliUpgrade() unit tests.
 * 
 * @typedef {import('./cli-upgrade').default} cliUpgrade
 * 
 * @param   {cliUpgrade}  f  cliUpgrade()
 * @return  {void}
 * @throws  Throws an `Error` if a test fails
 */
export default function cliUpgradeTest(f) {

    // Argument is incorrect type.
    // @ts-expect-error
    throws(()=>f(),
        `Error: cliUpgrade(): argv is type 'undefined' not 'object'`);
    // @ts-expect-error
    throws(()=>f(true),
        `Error: cliUpgrade(): argv is type 'boolean' not 'object'`);
    // @ts-expect-error
    throws(()=>f({}),
        `Error: cliUpgrade(): argv is an object but not an array`);
    // @ts-expect-error
    throws(()=>f(['Ok',123,'yup']),
        `Error: cliUpgrade(): argv[1] is type 'number' not 'string'`);

    // Ok.
    equal(f([]),
            'cliUpgrade() with cliCore(): ');
    equal(f(['Ok','yup']),
            'cliUpgrade() with cliCore(): Ok,yup');
}
