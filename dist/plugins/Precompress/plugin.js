var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "compression-webpack-plugin", "../../utils", "./schema"], function (require, exports, compression_webpack_plugin_1, utils_1, schema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CracoPrecompressPlugin = void 0;
    compression_webpack_plugin_1 = __importDefault(compression_webpack_plugin_1);
    function CracoPrecompressPlugin(pluginOptions) {
        return {
            plugin: {
                overrideWebpackConfig: function (_a) {
                    var webpackConfig = _a.webpackConfig, cracoConfig = _a.cracoConfig, pluginOptions = _a.pluginOptions, _b = _a.context, env = _b.env, paths = _b.paths;
                    var validatedOptions = utils_1.validatePluginOptions(schema_1.pluginOptionsSchema, pluginOptions);
                    if (Array.isArray(validatedOptions)) {
                        for (var _i = 0, pluginOptions_1 = pluginOptions; _i < pluginOptions_1.length; _i++) {
                            var o = pluginOptions_1[_i];
                            webpackConfig.plugins.push(new compression_webpack_plugin_1.default(o));
                        }
                    }
                    else {
                        webpackConfig.plugins.push(new compression_webpack_plugin_1.default(validatedOptions));
                    }
                    return webpackConfig;
                },
            },
            options: pluginOptions,
        };
    }
    exports.CracoPrecompressPlugin = CracoPrecompressPlugin;
});
