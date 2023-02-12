import {
    cliUpgrade,
} from './cli-upgrade.js';

import cliUpgradeTest from './src/cli-upgrade.test.js';

cliUpgradeTest(cliUpgrade);
