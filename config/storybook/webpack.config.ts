import webpack from 'webpack'
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
export default ({config}: {config: webpack.Configuration})=> {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        // src: path.resolve(__dirname, '')
    }
    config.resolve?.modules?.push();

    config.module?.rules?.push(buildCssLoaders({isDev: true}))
    return config;
}