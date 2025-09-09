import { Flagsmith } from 'flagsmith-nodejs';
import { type FeatureFlags, FEATURE_FLAGS } from './contrants';

const flagsmith = new Flagsmith({
    environmentKey: process.env.FLAGSMITH_SERVER_ENV_KEY,
    apiUrl: process.env.FLAGSMITH_URL,
});

console.log("✅ Flagsmith initialized!");

const isFeatureEnabled = async (featureName: FeatureFlags): Promise<boolean> => {
    try {
        const flags = await flagsmith.getEnvironmentFlags();
        return flags.isFeatureEnabled(featureName);
    } catch (error) {
        console.error("Error fetching feature flags:", error);
        return false;
    }
};

export default flagsmith;
export { isFeatureEnabled, FEATURE_FLAGS };
